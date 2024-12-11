import { Task } from "@/src/realm";
import { useQuery, useRealm } from "@realm/react";
import { useCallback, useMemo, useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function Index() {
  const [description, setDescription] = useState("");

  const realm = useRealm();
  const result = useQuery(Task);

  const tasks = useMemo(() => result.sorted("createdAt"), [result]);

  const handleAddTask = useCallback(
    (description: string): void => {
      if (!description) {
        return;
      }

      // Everything in the function passed to "realm.write" is a transaction and will
      // hence succeed or fail together. A transcation is the smallest unit of transfer
      // in Realm so we want to be mindful of how much we put into one single transaction
      // and split them up if appropriate (more commonly seen server side). Since clients
      // may occasionally be online during short time spans we want to increase the probability
      // of sync participants to successfully sync everything in the transaction, otherwise
      // no changes propagate and the transaction needs to start over when connectivity allows.
      realm.write(() => {
        realm.create("Task", Task.generate(description));
      });
      setDescription("");
    },
    [realm]
  );

  const handleSubmit = () => {
    handleAddTask(description);
    setDescription("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={description}
        placeholder="Enter new task description"
        onChangeText={setDescription}
        autoCorrect={false}
        autoCapitalize="none"
      />
      <Pressable onPress={handleSubmit}>
        <Text>＋</Text>
      </Pressable>

      <View>
        <FlatList
          data={tasks}
          keyExtractor={(task) => task._id.toString()}
          renderItem={({ item }) => (
            <View>
              <Text>{item.description}</Text>
              <Text>{item.isComplete}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
});
