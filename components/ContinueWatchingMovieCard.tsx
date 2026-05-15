import Colors from "@/constants/colors";
import { hs, vs } from "@/constants/screen-dimensions";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  DimensionValue,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface ContinueWatchingMovieCardProps {
  image?: ImageSourcePropType | undefined;
  title: string;
  genre: string;
}

const ContinueWatchingMovieCard = ({
  image,
  title,
  genre,
}: ContinueWatchingMovieCardProps) => {
  const getRandomPercentage = (): DimensionValue => {
    const min = 10;
    const max = 100;
    const value = Math.floor(Math.random() * (max - min + 1)) + min;
    return `${value}%`;
  };
  const randomPercentage = getRandomPercentage();

  return (
    <View style={styles.container}>
      <View style={{ position: "relative" }}>
        <TouchableOpacity style={styles.pressplay}>
          <FontAwesome5 name="play" size={24} color="#202020" />
        </TouchableOpacity>
      </View>
      <Image source={image} style={styles.image} />
      <View style={styles.progressBarContainer}>
        <View style={[styles.progress, { width: randomPercentage }]} />
      </View>
      <View style={{ marginTop: 8 }}>
        <Text
          numberOfLines={1}
          style={{ color: Colors.text, fontWeight: "600", fontSize: 16 }}
        >
          {title}
        </Text>
        <Text numberOfLines={1} style={{ color: Colors.gray, fontSize: 12 }}>
          {genre}
        </Text>
      </View>
    </View>
  );
};

export default ContinueWatchingMovieCard;

const styles = StyleSheet.create({
  container: {
    width: hs(240),
    marginHorizontal: 8,
  },
  image: {
    height: vs(170),
    width: "100%",
    borderRadius: 8,
  },
  pressplay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },
  progressBarContainer: {
    marginTop: 8,
    height: 3,
    width: "100%",
    overflow: "hidden",
    backgroundColor: Colors.text,
    borderRadius: 4,
  },
  progress: {
    backgroundColor: Colors.primary,
    height: "100%",
    borderRadius: 4,
  },
});
