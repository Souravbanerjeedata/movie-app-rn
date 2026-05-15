import Colors from "@/constants/colors";
import { Feather, MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const RightIcon = ({ icon }: { icon?: any }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.rightIconWrapper}>
      {icon ? icon : <Feather name="search" size={24} color={Colors.text} />}
    </TouchableOpacity>
  );
};

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarInactiveTintColor: Colors.gray,
        tabBarActiveTintColor: Colors.primary,
        tabBarStyle: {
          backgroundColor: Colors.background,
          borderColor: Colors.background,
        },
      }}
    >
      <Tabs.Screen
        name="(home)/index"
        options={{
          tabBarLabel: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="movies"
        options={{
          tabBarLabel: "Movies",
          headerTitle: "",
          tabBarIcon: ({ color }) => (
            <Feather name="play-circle" size={20} color={color} />
          ),
          headerStyle: { backgroundColor: Colors.background },
          headerRight: () => <RightIcon />,
          headerLeft: () => <Text style={styles.title}>Movies</Text>,
        }}
      />
      <Tabs.Screen
        name="series"
        options={{
          tabBarLabel: "TV/Series",
          headerTitle: "",
          tabBarIcon: ({ color }) => (
            <Feather name="folder" size={20} color={color} />
          ),
          headerStyle: { backgroundColor: Colors.background },
          headerRight: () => <RightIcon />,
          headerLeft: () => <Text style={styles.title}>Series</Text>,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => (
            <Octicons name="person" size={20} color={color} />
          ),
          tabBarLabel: "Me",
          headerStyle: { backgroundColor: Colors.background },
          headerTitle: "",
          headerRight: () => {
            return (
              <RightIcon
                icon={
                  <MaterialCommunityIcons
                    name="cog-outline"
                    color={Colors.text}
                    size={24}
                  />
                }
              />
            );
          },
          headerLeft: () => {
            return <Text style={styles.title}>Profile</Text>;
          },
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  rightIconWrapper: {
    height: 45,
    width: 45,
    backgroundColor: "#202020",
    borderRadius: "50%",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },
  title: {
    color: Colors.text,
    marginLeft: 14,
    fontWeight: "600",
    fontSize: 24,
  },
});
