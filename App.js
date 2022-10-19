import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/Navigation/index';

export default function App() {
  return (
    <View style={styles.root}>
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
});
