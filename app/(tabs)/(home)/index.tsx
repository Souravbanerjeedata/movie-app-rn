import ContinueWatchingMovieCard from "@/components/ContinueWatchingMovieCard";
import MovieCard from "@/components/MovieCard";
import OverviewSection from "@/components/OverviewSection";
import SectionHeader from "@/components/SectionHeader";
import Colors from "@/constants/colors";
import { movies } from "@/constants/mock-data";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <OverviewSection />
        {/* Trending Now */}
        <View style={{ marginVertical: 20 }}>
          <SectionHeader title="Trending now 🔥" />
          <FlatList
            data={movies}
            renderItem={({ item }) => (
              <MovieCard
                image={item.image}
                title={item.title}
                genre={item.genre}
              />
            )}
            horizontal
          />
        </View>

        {/* Continue Watching */}
        <View style={{ marginVertical: 20 }}>
          <SectionHeader title="Continue Watching" />
          <FlatList
            data={[...movies].reverse()}
            renderItem={({ item }) => (
              <ContinueWatchingMovieCard
                title={item.title}
                image={item.image}
                genre={item.genre}
              />
            )}
            horizontal
          />
        </View>

        {/* New Releases */}
        <View style={{ marginVertical: 20 }}>
          <SectionHeader title="New Releases 🚀" />
          <FlatList
            data={movies}
            renderItem={({ item }) => (
              <MovieCard
                image={item.image}
                title={item.title}
                genre={item.genre}
              />
            )}
            horizontal
          />
        </View>

        {/* International Picks */}
        <View style={{ marginVertical: 20 }}>
          <SectionHeader title="International Picks 🌎" />
          <FlatList
            data={[...movies].reverse()}
            renderItem={({ item }) => (
              <MovieCard
                image={item.image}
                title={item.title}
                genre={item.genre}
              />
            )}
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
  },
});
