import {
  Button,
  Modal,
  StyleSheet,
  TextInput,
  View,
  Image,
} from "react-native";

export default function AddCourseGoal() {
  return (
    <Modal>
      <View style={styles.container}>
        <Image
          style={styles.goalImage}
          source={require("../assets/images/goal.png")}
        />
        <TextInput style={styles.textInput} placeholder="Your course goal" />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" color={"orange"} />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    gap: 26,
  },
  goalImage: {
    height: 180,
    width: 180,
  },
  textInput: {
    borderRadius: 10,
    borderColor: "#cccccc",
    borderWidth: 1,
    width: "100%",
    padding:8
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 26,
  },
  button: {
    width: 100,
  },
});
