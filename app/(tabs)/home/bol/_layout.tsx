import { Stack } from "expo-router";

export default function ServiceLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: "Home" }} />
    </Stack>
  );
}
