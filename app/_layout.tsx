import { RealmProvider } from "@/src/realm/db";
import { store } from "@/src/store/store";
import { Stack } from "expo-router";
import { Provider as ReduxProvider } from "react-redux";

export default function RootLayout() {
  return (
    <ReduxProvider store={store}>
      <RealmProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </RealmProvider>
    </ReduxProvider>
  );
}
