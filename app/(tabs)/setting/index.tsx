import { decrement, increment } from "@/src/store/counterSlice";
import { RootState } from "@/src/store/store";
import { Button, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

export default function SettingScreen() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen. {count}</Text>
      <Button
        onPress={() => dispatch(increment())}
        title="Increment "
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Button
        onPress={() => dispatch(decrement())}
        title="Decrement "
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}
