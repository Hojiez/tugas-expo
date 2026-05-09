import { Text, View, StyleSheet } from 'react-native';
import Box from '@/components/box'; // Note: Added the semicolon here for good measure!

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About screen</Text>
      {/* Moved the Box inside the View! */}
      <Box title="testimoni" subtitle="sebuah subtitle" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    marginBottom: 20, 
  },
});