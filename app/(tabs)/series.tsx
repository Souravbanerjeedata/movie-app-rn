import FilterItem from "@/components/FilterItem";
import MovieCard from "@/components/MovieCard";
import Colors from "@/constants/colors";
import { useFetch } from "@/hooks/useFetch";
import { Movie } from "@/types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import {
  FlatList,
  RefreshControl,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

export default function SeriesScreen() {
  const [page, setPage] = useState(1);
  const params = {
    include_adult: false,
    include_video: false,
    language: "en-US",
    page,
    sort_by: "popularity.desc",
  };
  const { data, loading } = useFetch("/discover/tv", params);
  const series: Movie[] = data?.results;

  const handleRefresh = () => {
    const randomPage = Math.floor(Math.random() * 10) + 1;
    setPage(randomPage);
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          marginVertical: 20,
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <FilterItem title="Category" />
          <FilterItem title="Region" />
          <FilterItem title="Release Year" />
        </ScrollView>
        <TouchableOpacity activeOpacity={0.8} style={{ padding: 10 }}>
          <MaterialCommunityIcons
            name="filter-outline"
            color={Colors.text}
            size={24}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={series}
        renderItem={({ item }) => <MovieCard movie={item} />}
        numColumns={3}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={handleRefresh}
            colors={[Colors.gray]}
            tintColor={Colors.gray}
          />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});
