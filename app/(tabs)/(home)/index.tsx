import ContinueWatchingMovieCard from "@/components/ContinueWatchingMovieCard";
import MovieCard from "@/components/MovieCard";
import OverviewSection from "@/components/OverviewSection";
import Colors from "@/constants/colors";
import { movies } from "@/constants/mock-data";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const SectionHeader = ({ title }: { title: string }) => {
  return (
    <View style={styles.sectionHeader}>
      <Text style={{ color: Colors.text, fontWeight: "600", fontSize: 16 }}>
        {title}
      </Text>
      <TouchableOpacity activeOpacity={0.8} style={{ padding: 10 }}>
        <Text style={{ color: Colors.primary }}>See more</Text>
      </TouchableOpacity>
    </View>
  );
};

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
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 14,
    paddingHorizontal: 14,
  },
});
