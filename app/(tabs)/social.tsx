import "@/global.css";
import { Ionicons } from '@expo/vector-icons';
import { Link, Stack } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Social() {
  return (
    <>
      <Stack.Screen options={{ title: 'Social' }} />
      <View style={styles.container} className='bg-neutral-900 flex-row gap-3'>

    <Text className='text-white'>Click one to follow our social! </Text>
        <Link href="https://www.instagram.com/dynamic.roofing?igsh=d3RkdndsOG5nMDAw" >
        <Ionicons name="logo-instagram" color='white' size={24}></Ionicons>
        </Link>

        <Link href="https://www.google.com/maps/place/Dynamic+Roofing+and+Construction+LLC/@33.8897616,-84.8526025,11z/data=!4m6!3m5!1s0xaa04ee89fc70fdd5:0x3690b3bda000bfa!8m2!3d33.8895559!4d-84.712519!16s%2Fg%2F11t652hfqb?hl=en-US" >
        <Ionicons name="logo-google" color='white' size={24}></Ionicons> 
        </Link>
            
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
