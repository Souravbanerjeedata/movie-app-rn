import Colors from "@/constants/colors";
import { Feather, Octicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

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
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Feather name="play-circle" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="series"
        options={{
          tabBarLabel: "TV/Series",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Feather name="folder" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => (
            <Octicons name="person" size={20} color={color} />
          ),
          tabBarLabel: "Me",
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
