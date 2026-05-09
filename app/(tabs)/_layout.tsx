import { Tabs } from 'expo-router';
import { Text } from 'react-native';
export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: () => <Text>🏠</Text>,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarIcon: () => <Text>✈️</Text>,
        }}
      />
    </Tabs>
  );
}