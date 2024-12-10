import { Link } from "expo-router";
import { View } from "react-native";

export default function SettingScreen() {
  return (
    <View>
      <Link href={"/bol/1"}>bol 1</Link>
      <Link href={"/bol/2"}>bol 2</Link>
      <Link href={"/bol/3"}>bol 3</Link>
      <Link href={"/bol/4"}>bol 4</Link>
      <Link href={"/bol/5"}>bol 5</Link>
    </View>
  );
}
