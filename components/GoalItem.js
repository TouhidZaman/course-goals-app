import { StyleSheet, Text, View } from "react-native";

export default function GoalItem({ goal }) {
  return (
    <View style={styles.item}>
      <Text>{goal}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#cccccc",
    padding: 8,
    borderRadius: 10,
    marginVertical: 5
  },
});
