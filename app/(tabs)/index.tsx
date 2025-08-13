import "@/global.css";
import { Image, StyleSheet, View } from 'react-native';

const HomeScreenImage = require('@/assets/images/HomeScreen.png');

export default function Index() {
  return (
    <View style={styles.container} >
      <View style={styles.imageContainer}>
        <Image source={HomeScreenImage} style={styles.image} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
   imageContainer: {
    flex: 1,
    width: '100%', 
  },
  image: {
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
  },
})
