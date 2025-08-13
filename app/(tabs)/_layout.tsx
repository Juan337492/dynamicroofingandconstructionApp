import '@/global.css';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
//menu

export default function TabLayout() {
  return (
    <Tabs
     screenOptions={{
    tabBarActiveTintColor: '#ffd33d',
    headerStyle: {
      backgroundColor: '#121212',
    },
    headerShadowVisible: false,
    headerTintColor: '#fff',
    tabBarStyle: {
      backgroundColor: '#121212',
    },
  }}
     >

      <Tabs.Screen 
      name="index" 
      options={{ 
        title: 'Home',
        tabBarIcon:({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} ></Ionicons>
        ), 
        }} 
        />
      <Tabs.Screen 
      name="about" 
      options={{ 
        title: 'About', 
        tabBarIcon:({ color, focused }) => (
            <Ionicons name={focused ? 'business-sharp' : 'business-outline'} color={color} size={24}/>
        ),
        }} 
        />
      <Tabs.Screen 
      name='contact' 
      options={{ 
        title: 'Contact' ,
        tabBarIcon:({ color, focused }) => (
            <Ionicons name={focused ? 'call-sharp' : 'call-outline'} color={color} size={24}/>
        ),
        }}
        />
        <Tabs.Screen 
      name='blog' 
      options={{ 
        title: 'Blog' ,
        tabBarIcon:({ color, focused }) => (
            <Ionicons name={focused ? 'book-sharp' : 'book-outline'} color={color} size={24}/>
        ),
        }}
        />
        <Tabs.Screen 
      name='social' 
      options={{ 
        title: 'Social' ,
        tabBarIcon:({ color}) => (
            <Ionicons name='share-social-outline' color={color} size={24}/>
        ),
        }}
        />
    </Tabs>
  );
}
