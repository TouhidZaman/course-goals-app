import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import AddCourseGoal from "./components/AddCourseGoal";
import { useState } from "react";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Button
        title="Add course goal"
        onPress={() => setShowModal((prevState) => !prevState)}
      />
      <AddCourseGoal visible={showModal} setVisible={setShowModal} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 50,
  },
});
