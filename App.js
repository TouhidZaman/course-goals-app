import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  View,
  FlatList,
  Text,
  Pressable,
} from "react-native";
import AddCourseGoal from "./components/AddCourseGoal";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [goals, setGoals] = useState([]);

  const handleAddGoal = (newGoal) => {
    if (!newGoal) return;
    const id = new Date().toISOString();
    setGoals((prevGoals) => [...prevGoals, { id, text: newGoal }]);
    setShowModal(false);
  };

  return (
    <>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.headingArea}>
          <Button
            title="Add course goal"
            onPress={() => setShowModal((prevState) => !prevState)}
          />
          <View style={styles.headingBottom}>
            <Text style={styles.headingText}>Your Course Goals</Text>
            <Pressable onPress={() => setGoals([])}>
              <Text style={styles.clearButton}>Clear All</Text>
            </Pressable>
          </View>
        </View>
        {!goals.length && (
          <View style={styles.noGoals}>
            <Text style={styles.noGoals}>You have no goals yet!</Text>
          </View>
        )}
        <FlatList
          style={styles.goalsArea}
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
    paddingVertical: 50,
  },
  headingArea: {
    paddingHorizontal: 10,
    marginVertical: 10,
    shadowColor: "#000", // Color of the shadow
    shadowOffset: { width: 0, height: 5 }, // Offset for the shadow, height for bottom shadow
    shadowOpacity: 0.3, // Opacity of the shadow
    shadowRadius: 5, // Blur radius of the shadow
    elevation: 5, // Required for Android shadow
    backgroundColor: "#fff", // Ensure the background color matches the design
    paddingBottom: 5, // Optional: to add space below the heading
  },
  headingBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 10,
  },
  headingText: {
    fontSize: 18,
    fontWeight: "600",
  },
  clearButton: {
    padding: 8,
    color: "blue",
  },
  goalsArea: {
    paddingHorizontal: 10,
  },
  noGoals: {
    alignItems: "center",
    marginTop: 10,
  },
});
