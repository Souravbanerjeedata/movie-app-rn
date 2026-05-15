import MovieCard from "@/components/MovieCard";
import SectionHeader from "@/components/SectionHeader";
import Colors from "@/constants/colors";
import { ms } from "@/constants/screen-dimensions";
import { useFetch } from "@/hooks/useFetch";
import { Movie } from "@/types";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function ProfileScreen() {
  const params = {
    include_adult: false,
    include_video: false,
    language: "en-us",
    page: 3,
    sort_by: "popularity.desc",
  };

  const { data: yesterdayData } = useFetch("/discover/movie", params);
  const { data: dateData } = useFetch("/discover/movie", {
    ...params,
    page: 2,
  });

  const yesterdayMovies: Movie[] = yesterdayData?.results;
  const dateMovies: Movie[] = dateData?.results;

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginVertical: 20,
          }}
        >
          <Image
            style={styles.profile}
            source={require("@/assets/images/profile.jpg")}
            borderRadius={100}
          />

          <Text style={styles.name}>Sourav</Text>
          <Text style={{ color: Colors.gray }}>
            souravbanerjee907@gmail.com
          </Text>
        </View>
        <Text
          style={{
            color: Colors.primary,
            fontWeight: "600",
            fontSize: 16,
            marginHorizontal: 12,
          }}
        >
          Watch History
        </Text>
        <View style={{ marginVertical: 12 }}>
          <SectionHeader title="Yesterday" />
          <FlatList
            data={yesterdayMovies || []}
            renderItem={({ item }) => <MovieCard movie={item} />}
            horizontal
          />
        </View>
        <View style={{ marginVertical: 20 }}>
          <SectionHeader title="15th October, 2025" />
          <FlatList
            data={dateMovies || []}
            renderItem={({ item }) => <MovieCard movie={item} />}
            horizontal
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 4,
  },
  profile: {
    width: ms(150),
    height: ms(150),
  },
  name: {
    color: Colors.text,
    fontWeight: "600",
    fontSize: ms(22),
    marginTop: 12,
  },
});
