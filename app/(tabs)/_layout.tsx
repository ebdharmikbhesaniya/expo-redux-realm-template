import { Tabs } from "expo-router";
import { Text, View } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="home" options={{ headerShown: false }} />
      <Tabs.Screen name="setting" options={{ headerShown: false }} />
    </Tabs>
  );
}
