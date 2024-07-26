import { StatusBar } from "expo-status-bar";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
} from "react-native";
import AddCourseGoal from "./components/AddCourseGoal";
import { useState } from "react";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [goals, setGoals] = useState([
    {
      id: 1111,
      text: "hello",
    },
  ]);

  const handleAddGoal = (newGoal) => {
    const id = new Date().toISOString();
    setGoals((prevGoals) => [...prevGoals, { id, text: newGoal }]);
    setShowModal(false);
  };

  return (
    <>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.heading}>
          <Button
            title="Add course goal"
            onPress={() => setShowModal((prevState) => !prevState)}
          />
        </View>
        <FlatList
          style={styles.goals}
          data={goals}
          renderItem={({ item }) => <GoalItem goal={item.text} />}
          keyExtractor={({ id }) => id}
        />
      </View>
      <AddCourseGoal
        visible={showModal}
        setVisible={setShowModal}
        handleAddGoal={handleAddGoal}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 50,
  },
  heading: {
    paddingBottom:20,
    marginBottom: 10,
    borderBottomColor: "#CCCCCC",
    borderBottomWidth: 1
  }
});
