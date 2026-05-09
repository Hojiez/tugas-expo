import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Welcome!</Text>
      
      {/* Subtitle */}
      <Text style={styles.subtitle}>This is the home screen of the app.</Text>

      {/* Button */}
      <Link href="/about" style={styles.button}>
        Go to About screen
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20, // Adds some breathing room on the sides
  },
  title: {
    fontSize: 36, // Makes the text very large
    fontWeight: 'bold', // Makes the text thick
    color: '#ffffff',
    marginBottom: 8, // Pushes the subtitle slightly down
  },
  subtitle: {
    fontSize: 16, // Smaller than the title
    color: '#a0a0a0', // A grayish color to make it look secondary
    marginBottom: 40, // Adds a big gap before the link button shows up
    textAlign: 'center',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#3498db', // A nice blue color for the link
  },
});