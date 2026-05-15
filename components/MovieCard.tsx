import Colors from "@/constants/colors";
import { hs, ms, vs } from "@/constants/screen-dimensions";
import { TMDB_IMAGE_BASE_PATH } from "@/hooks/useFetch";
import { Movie } from "@/types";
import { default_image } from "@/utils/assets";
import { getGenreString } from "@/utils/genre";
import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const MovieCard = ({ movie }: { movie: Movie }) => {
  const router = useRouter();
  const tmdb_image_path = movie
    ? `${TMDB_IMAGE_BASE_PATH}${movie?.poster_path}`
    : "";

  return (
    <TouchableOpacity
      onPress={() => router.push("/details")}
      activeOpacity={0.8}
      style={styles.container}
    >
      <Image
        source={tmdb_image_path ? { uri: tmdb_image_path } : default_image}
        style={styles.image}
      />
      <View>
        <Text
          numberOfLines={1}
          style={{ color: Colors.text, fontWeight: "600", fontSize: ms(14) }}
        >
          {movie?.original_title || movie?.original_name}
        </Text>
        <Text
          numberOfLines={1}
          style={{ color: Colors.gray, fontSize: ms(10) }}
        >
          {getGenreString(movie?.genre_ids || [])}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  container: {
    width: hs(110),
    marginHorizontal: 8,
    marginBottom: 14,
  },
  image: {
    height: vs(150),
    width: "100%",
    borderRadius: 10,
  },
});
