import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import AddCourseGoal from './components/AddCourseGoal';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Button title='Add course goal' />
      <AddCourseGoal />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 50
  },
});
