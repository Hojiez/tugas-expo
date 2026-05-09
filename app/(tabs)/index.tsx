import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import Box from '@/components/box';

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.subtitle}>salamat po</Text>

      <Image 
        source={{ uri: 'https://picsum.photos/300/200' }} 
        style={styles.image} 
      />

      <Box title="testimoni" subtitle="sebuah subtitle" />

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Recent Activity</Text>
        <Text style={styles.cardText}>lorem ipsum dolor sit amet alala</Text>
      </View>

      <Link href="/about" style={styles.button}>
        Go to About screen
      </Link>

      <Link href="/simple" style={styles.button}>
      Go to simple screen
      </Link>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#a0a0a0',
    marginBottom: 30,
    textAlign: 'center',
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 15, 
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#333842',
    padding: 20,
    borderRadius: 10,
    width: '100%',
    marginTop: 20,
    marginBottom: 40,
  },
  cardTitle: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardText: {
    color: '#cccccc',
    fontSize: 14,
    lineHeight: 20, 
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#3498db',
    marginBottom: 50, 
  },
});