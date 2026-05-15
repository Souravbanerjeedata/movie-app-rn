import FilterItem from "@/components/FilterItem";
import MovieCard from "@/components/MovieCard";
import Colors from "@/constants/colors";
import { movies } from "@/constants/mock-data";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

export default function MoviesScreen() {
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
        data={movies}
        renderItem={({ item }) => (
          <MovieCard image={item.image} title={item.title} genre={item.genre} />
        )}
        numColumns={3}
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
