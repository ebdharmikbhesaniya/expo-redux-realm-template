import { Stack, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function BolScreen() {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>Service Screen {id}</Text>
      <Stack.Screen options={{ headerTitle: "bol details" }} />
    </View>
  );
}
