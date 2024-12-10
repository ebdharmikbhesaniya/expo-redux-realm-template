import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

// Types for the data
type BOLData = {
  bol: string;
  source: string;
  palletCount: number;
  expectedCount: number;
  cartonCount: number;
};

// Search Bar Component
const SearchBar: React.FC<{
  placeholder: string;
  onSearch: (value: string) => void;
}> = ({ placeholder, onSearch }) => (
  <View style={styles.searchBar}>
    <Ionicons name="search" size={20} color="gray" />
    <TextInput
      style={styles.searchInput}
      placeholder={placeholder}
      onChangeText={onSearch}
    />
  </View>
);

// BOL Card Component
const BOLCard: React.FC<BOLData> = ({
  bol,
  source,
  palletCount,
  expectedCount,
  cartonCount,
}) => (
  <View style={styles.bolCard}>
    <Text style={styles.bolText}>BOL: {bol}</Text>
    <Text style={styles.bolText}>Source: {source}</Text>
    <Text style={styles.bolText}>Pallet Count: {palletCount}</Text>
    <Text style={styles.bolText}>Expected Count: {expectedCount}</Text>
    <Text style={styles.bolText}>Carton Count: {cartonCount}</Text>
  </View>
);

// Main Page Component
const BolScreen: React.FC = () => {
  const [search, setSearch] = useState<string>("");

  const bolData: BOLData[] = [
    {
      bol: "BRG2224077051",
      source: "WH",
      palletCount: 10,
      expectedCount: 32,
      cartonCount: 0,
    },
    {
      bol: "BRG2224077053",
      source: "WH",
      palletCount: 10,
      expectedCount: 32,
      cartonCount: 0,
    },
    {
      bol: "BRG2224077054",
      source: "WH",
      palletCount: 10,
      expectedCount: 32,
      cartonCount: 0,
    },
  ];

  const filteredData = bolData.filter((item) =>
    item.bol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <SearchBar placeholder="Search BOL" onSearch={setSearch} />

      {/* BOL List */}
      <ScrollView style={styles.scroll}>
        {filteredData.map((item, index) => (
          <BOLCard key={index} {...item} />
        ))}
      </ScrollView>

      {/* Blind Receive Button */}
      <View style={styles.buttonContainer}>
        <Button title="Blind Receive" onPress={() => alert("Blind Receive")} />
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
  },
  scroll: {
    flex: 1,
    padding: 10,
  },
  bolCard: {
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  bolText: {
    fontSize: 14,
    marginVertical: 2,
  },
  buttonContainer: {
    padding: 10,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    backgroundColor: "#fff",
  },
  navItem: {
    alignItems: "center",
  },
});

export default BolScreen;
