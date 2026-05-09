import { Text, View } from 'react-native';

export default function SimpleScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#25292e' }}>
      <Text style={{ color: 'white', fontSize: 20 }}>
        Hello word
      </Text>
    </View>
  );
}