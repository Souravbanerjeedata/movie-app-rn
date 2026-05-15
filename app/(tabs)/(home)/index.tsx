import ContinueWatchingMovieCard from "@/components/ContinueWatchingMovieCard";
import MovieCard from "@/components/MovieCard";
import OverviewSection from "@/components/OverviewSection";
import SectionHeader from "@/components/SectionHeader";
import Colors from "@/constants/colors";
import { useFetch } from "@/hooks/useFetch";
import { Movie } from "@/types";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";

function getRandomMovie(movies: Movie[]): Movie | null {
  if (!movies?.length) return null;
  const withBackdrops = movies.filter((movie) => movie.backdrop_path);
  if (!withBackdrops.length) return null;
  const randomMovie =
    withBackdrops[Math.floor(Math.random() * withBackdrops.length)];
    return randomMovie;
}

export default function HomeScreen() {
  const currentYear = new Date().getFullYear();
  const params = {
    include_adult: false,
    include_video: false,
    language: "en-US",
    page: 1,
    sort_by: "popularity.desc",
  };

  const { data: trendingData, loading: trendingLoading } = useFetch(
    "/discover/movie",
    params,
  );

  const { data: newReleasesData, loading: newReleasesLoading } = useFetch(
    "/discover/movie",
    { ...params, primary_release_year: currentYear },
  );

  const { data: internationalPicksData, loading: internationalPicksLoading } =
    useFetch("/discover/tv", params);

  const { data: continueWatchingData, loading: continueWatchingLoading } =
    useFetch("/discover/tv", { ...params, page: 2 });

  const trendingMovies: Movie[] = trendingData?.results;
  const newReleasesMovies: Movie[] = newReleasesData?.results;
  const internationalPicksMovies: Movie[] = internationalPicksData?.results;
  const continueWatchingMovies: Movie[] = continueWatchingData?.results;
  const overviewMovie = getRandomMovie(trendingMovies);

  return (
    <View style={styles.container}>
      <ScrollView>
        <OverviewSection movie={overviewMovie} />
        {/* Trending Now */}
        <View style={{ marginVertical: 20 }}>
          <SectionHeader title="Trending now 🔥" />
          <FlatList
            data={trendingMovies}
            renderItem={({ item }) => <MovieCard movie={item} />}
            horizontal
          />
        </View>

        {/* Continue Watching */}
        <View style={{ marginVertical: 20 }}>
          <SectionHeader title="Continue Watching" />
          <FlatList
            data={continueWatchingMovies}
            renderItem={({ item }) => (
              <ContinueWatchingMovieCard movie={item} />
            )}
            horizontal
          />
        </View>

        {/* New Releases */}
        <View style={{ marginVertical: 20 }}>
          <SectionHeader title="New Releases 🚀" />
          <FlatList
            data={newReleasesMovies}
            renderItem={({ item }) => <MovieCard movie={item} />}
            horizontal
          />
        </View>

        {/* International Picks */}
        <View style={{ marginVertical: 20 }}>
          <SectionHeader title="International Picks 🌎" />
          <FlatList
            data={internationalPicksMovies}
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
  },
});
