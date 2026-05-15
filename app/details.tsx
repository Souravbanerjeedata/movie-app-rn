import AppButton from "@/components/AppButton";
import MovieCard from "@/components/MovieCard";
import SectionHeader from "@/components/SectionHeader";
import Colors from "@/constants/colors";
import { movies } from "@/constants/mock-data";
import { AntDesign, Feather, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const DetailsScreen = () => {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.overview}>
          <Image
            style={styles.overviewImage}
            source={require("@/assets/images/overview.png")}
          />
          <View style={[styles.cover, { paddingTop: insets.top }]}>
            <View style={{ flex: 1, paddingHorizontal: 14 }}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.backBtnWrapper}
                onPress={() => router.back()}
              >
                <Feather name="chevron-left" size={26} color={Colors.text} />
              </TouchableOpacity>
            </View>
            <LinearGradient
              style={styles.blur}
              colors={["transparent", Colors.background]}
            >
              <Text
                numberOfLines={1}
                style={{
                  fontSize: 26,
                  fontWeight: "600",
                  color: Colors.text,
                }}
              >
                The Sandman
              </Text>
              <Text style={{ color: Colors.gray }}>
                2025 | Monster Horror | Sci-Fi Epic
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <AntDesign name="star" size={16} color="#ff891b" />
                <Text
                  style={{
                    color: "#ff891b",
                    marginLeft: 6,
                    fontWeight: "600",
                  }}
                >
                  9.5
                </Text>
              </View>
            </LinearGradient>
          </View>
        </View>
        <View style={{ padding: 14 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <AppButton
              title="Watch now "
              style={{ backgroundColor: Colors.primary }}
              icon={<FontAwesome5 name="play" size={16} color={Colors.text} />}
            />
            <AppButton
              title="Download "
              icon={<Feather name="download" size={16} color={Colors.text} />}
            />
          </View>
          <View style={styles.btnWrapper}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{ alignItems: "center" }}
            >
              <Feather name="bookmark" size={16} color={Colors.text} />
              <Text style={{ color: Colors.text, fontSize: 10 }}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{ alignItems: "center", marginLeft: 18 }}
            >
              <Ionicons
                name="paper-plane-outline"
                size={16}
                color={Colors.text}
              />
              <Text style={{ color: Colors.text, fontSize: 10 }}>Share</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text
              style={{ color: Colors.primary, fontSize: 18, fontWeight: "600" }}
            >
              Overview
            </Text>
            <Text style={{ color: Colors.text, marginTop: 10, fontSize: 12 }}>
              Upon escaping after decades of imprisonment by a mortal wizard,
              Dream, the personification of dreams, sets about to reclaim his
              lost equipment.
            </Text>
          </View>
        </View>
        <View style={{ marginVertical: 20 }}>
          <SectionHeader title="You may also like" />
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
      </ScrollView>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  overview: {
    position: "relative",
    height: 400,
  },
  overviewImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  cover: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 9999,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "space-between",
  },
  backBtnWrapper: {
    height: 40,
    width: 40,
    backgroundColor: "#202020",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  blur: {
    width: "100%",
    height: 120,
    padding: 14,
    justifyContent: "space-between",
  },
  btnWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
  },
});
