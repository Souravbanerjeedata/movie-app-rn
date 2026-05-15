import MovieCard from "@/components/MovieCard";
import SectionHeader from "@/components/SectionHeader";
import Colors from "@/constants/colors";
import { ms } from "@/constants/screen-dimensions";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function ProfileScreen() {
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
        <View style={{ marginVertical: 20 }}>
          <SectionHeader title="Yesterday" />
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
        <View style={{ marginVertical: 20 }}>
          <SectionHeader title="15th October, 2025" />
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
