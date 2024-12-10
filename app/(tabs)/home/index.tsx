import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function HomeScreen() {
  const handleInboundPress = () => {
    router.replace("./home/bol");
    alert("Inbound clicked!");
  };

  const handleOutboundPress = () => {
    alert("Outbound clicked!");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.card} onPress={handleInboundPress}>
        <Ionicons name="download-outline" size={40} color="#4CAF50" />
        <Text style={styles.cardText}>Inbound</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={handleOutboundPress}>
        <Ionicons name="cloud-upload-outline" size={40} color="#2196F3" />
        <Text style={styles.cardText}>Outbound</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F8FA",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  header: {
    fontSize: 28,
    fontWeight: "700",
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 20,
  },
  cardText: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "500",
    color: "#333",
  },
});
