import Colors from "@/constants/colors";
import { TMDB_IMAGE_BASE_PATH } from "@/hooks/useFetch";
import { Movie } from "@/types";
import { default_image } from "@/utils/assets";
import { getGenreString } from "@/utils/genre";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const OverviewSection = ({ movie }: { movie: Movie | null }) => {
  const bacdrop_image = movie
    ? `${TMDB_IMAGE_BASE_PATH}${movie?.backdrop_path}`
    : null;
  const yearRelease = movie?.release_date?.split("-")[0] ?? "";
  return (
    <View style={styles.overview}>
      <Image
        style={styles.overviewImage}
        source={bacdrop_image ? { uri: bacdrop_image } : default_image}
      />
      {/* Overlay */}
      <View style={styles.overlay}>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.header}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                style={styles.profileImage}
                source={require("@/assets/images/profile.jpg")}
              />
              <View style={{ marginLeft: 8 }}>
                <Text style={styles.greeting}>Hi, Sourav</Text>
                <Text style={{ color: Colors.text, fontSize: 16 }}>
                  Welcome Back
                </Text>
              </View>
            </View>
            <TouchableOpacity style={styles.searchWrapper} activeOpacity={0.8}>
              <Feather name="search" size={24} color={Colors.text} />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
        <LinearGradient
          style={styles.blur}
          colors={["transparent", Colors.background]}
        >
          <View style={styles.categoryBadge}>
            <Text
              style={{ color: Colors.text, fontSize: 16, fontWeight: "500" }}
            >
              Series
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              numberOfLines={1}
              style={{
                fontSize: 26,
                fontWeight: "600",
                color: Colors.text,
                flex: 1,
              }}
            >
              {movie?.original_title || movie?.original_name}
            </Text>
            <View style={{ width: 75, alignItems: "flex-end" }}>
              <TouchableOpacity style={styles.playBtn} activeOpacity={0.8}>
                <FontAwesome5 name="play" size={24} color={Colors.text} />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={{ color: Colors.gray }}>
            {`${yearRelease} | ${getGenreString(movie?.genre_ids || [])}`}
          </Text>
        </LinearGradient>
      </View>
    </View>
  );
};

export default OverviewSection;

const styles = StyleSheet.create({
  overview: {
    position: "relative",
    height: 400,
  },
  overviewImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  header: {
    padding: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // marginTop: Platform.OS === "android" ? 8 : 0,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  greeting: {
    fontSize: 22,
    color: Colors.text,
    fontWeight: "600",
  },
  searchWrapper: {
    width: 50,
    height: 50,
    backgroundColor: "#535456",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  blur: {
    height: 150,
    width: "100%",
    padding: 14,
    justifyContent: "space-around",
  },
  categoryBadge: {
    width: 100,
    backgroundColor: Colors.surface,
    padding: 8,
    borderRadius: 14,
    alignItems: "center",
  },
  playBtn: {
    width: 60,
    height: 60,
    borderRadius: "50%",
    backgroundColor: Colors.surface,
    alignItems: "center",
    justifyContent: "center",
  },
});
