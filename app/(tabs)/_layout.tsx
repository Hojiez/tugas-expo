import { Tabs } from 'expo-router';
// You can safely remove the Text import since we are replacing the emojis!
import { Image } from 'react-native'; 

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <Image 
              source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/home.png' }} 
              style={{ 
                width: 24, 
                height: 24, 
                opacity: focused ? 1 : 0.5 
              }} 
            />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarIcon: ({ focused }) => (
            <Image 
              source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/info.png' }} 
              style={{ 
                width: 24, 
                height: 24, 
                opacity: focused ? 1 : 0.5 
              }} 
            />
          ),
        }}
      />
    </Tabs>
  );
}