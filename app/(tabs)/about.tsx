import "@/global.css";
import { Dimensions, Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const AboutScreenHeaderImage = require('@/assets/images/BrownRoof.jpg');
const RoofingWorkImage = require('@/assets/images/RooferWithRope.jpg');
const SidingWorkImage = require('@/assets/images/Siding.jpg');
const LeafImage = require('@/assets/images/Leaf.png');
const DrillImage = require('@/assets/images/Drill.jpg');
const HammerImage = require('@/assets/images/Hammer.png');
const RoofDrawingImage = require('@/assets/images/RoofDrawing.png');
const StormDrawingImage = require('@/assets/images/Storm.png');

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const CommericalLink = () => {
  const url = "https://www.instagram.com/reel/DNEkgEkxWqO/?igsh=MWlodms1OHdpdHcycg==";
  Linking.openURL(url);
};

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false} className="bg-neutral-900">
      <View style={styles.imageContainer}>
        <Image 
          source={AboutScreenHeaderImage} 
          style={styles.headerImage}
          resizeMode="cover"
        />
        <View style={styles.overlay}>
          <Text style={styles.heroText} className="xl:text-4xl">Roofing Done Right</Text>
        </View>
      </View>
      
      <View style={styles.contentContainer}>
        <Text style={styles.descriptionText} className="xl:text-lg md:px-8 xl:px-48">
          Dynamic Roofing and Construction is a leading roofing company serving Dallas, GA, and the surrounding areas.
          With years of experience, we have built a reputation for delivering exceptional roofing services.
          Our team of skilled and certified roofers is committed to providing top-notch craftsmanship, using high-quality materials to ensure the longevity and durability of your roof.
        </Text>

        <TouchableOpacity style={styles.buttonContainer} onPress={CommericalLink}>
          <Text style={styles.buttonText}>Learn More</Text>
        </TouchableOpacity>
        
      </View>
    


    {/* Container with flex-row layout */}
<View className="items-center justify-center">
  <Text className="text-center text-yellow-400 font-bold text-2xl xl:text-2xl mb-5">Our Services</Text>
</View>

<View className="flex flex-row flex-wrap justify-center gap-5">
  <View className="w-3/4 md:w-1/2 lg:w-1/3 2xl:w-1/4 shadow-xl items-center rounded-lg p-4 bg-stone-800">
    <Image style={styles.servicesImages} source={RoofingWorkImage} resizeMode="contain" className="rounded-md" />
    <Text className="text-center py-2 font-semibold text-yellow-400">Roofing Work</Text>
    <Text style={styles.descriptionText} className="xl:text-lg">
      Dynamic Roofing and Construction has over two decades of experience providing top-quality roofing services, with our
      expertise in installing new shingle roofs, repairing roof leaks, and replacing old ones.
    </Text>
  </View>
  
  <View className="w-3/4 md:w-1/2 lg:w-1/3 2xl:w-1/4 shadow-xl items-center rounded-lg p-4 bg-stone-800">
    <Image style={styles.servicesImages} source={SidingWorkImage} resizeMode="contain" className="rounded-md" />
    <Text className="text-center py-2 font-semibold text-yellow-400">Siding Repairs</Text>
    <Text style={styles.descriptionText} className="xl:text-lg">
      Our skilled team has the expertise to handle any siding repairs your home may need, and we take pride in delivering outstanding results for our clients.
    </Text>
  </View>

  <View className="w-3/4 md:w-1/2 lg:w-1/3 2xl:w-1/4 shadow-xl items-center rounded-lg p-4 bg-stone-800">
    <Image style={styles.servicesImages} source={LeafImage} resizeMode="contain" className="rounded-md" />
    <Text className="text-center py-2 font-semibold text-yellow-400">Gutter Guard Installation</Text>
    <Text style={styles.descriptionText} className="xl:text-lg">
      Protect your gutters from debris and clogs with our professional gutter guard installation services.
    </Text>
  </View>

  <View className="w-3/4 md:w-1/2 lg:w-1/3 2xl:w-1/4 shadow-xl items-center rounded-lg p-4 bg-stone-800">
    <Image style={styles.servicesImages} source={DrillImage} resizeMode="contain" className="rounded-md" />
    <Text className="text-center py-2 font-semibold text-yellow-400">Gutters Installs</Text>
    <Text style={styles.descriptionText} className="xl:text-lg">
      We also replace old, worn-out gutters with durable, long-lasting ones that will protect your home from water damage for years. 
    </Text>
  </View>

  <View className="w-3/4 md:w-1/2 lg:w-1/3 2xl:w-1/4 shadow-xl items-center rounded-lg p-4 bg-stone-800">
    <Image style={styles.servicesImages} source={HammerImage} resizeMode="contain" className="rounded-md" />
    <Text className="text-center py-2 font-semibold text-yellow-400">Emergency Repairs</Text>
    <Text style={styles.descriptionText} className="xl:text-lg">
      We provide 24/7 emergency roofing services to protect your home from unexpected damage and weather-related issues.
    </Text>
  </View>

  <View className="w-3/4 md:w-1/2 lg:w-1/3 2xl:w-1/4 shadow-xl items-center rounded-lg p-4 bg-stone-800">
    <Image style={styles.servicesImages} source={RoofDrawingImage} resizeMode="contain" className="rounded-md" />
    <Text className="text-center py-2 font-semibold text-yellow-400">Roof Inspections</Text>
    <Text style={styles.descriptionText} className="xl:text-lg">
      Comprehensive roof inspections to identify potential issues before they become costly problems for your home.
    </Text>
  </View>

  <View className="w-3/4 md:w-1/2 lg:w-1/3 2xl:w-1/4 shadow-xl items-center rounded-lg p-4 bg-stone-800 mb-2">
    <Image style={styles.servicesImages} source={StormDrawingImage} resizeMode="contain" className="rounded-md" />
    <Text className="text-center py-2 font-semibold text-yellow-400">Storm Damage Restoration</Text>
    <Text style={styles.descriptionText} className="xl:text-lg">
      Expert restoration services for storm-damaged roofs, working directly with insurance companies for seamless claims processing.
    </Text>
  </View>
</View>

  </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    width: screenWidth < 768 ? '80%' : screenWidth < 1024 ? '50%' : '30%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    alignSelf: 'center',
    bottom: 10,
    backgroundColor: '#facc15', // Add background color
    padding: 12,
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  servicesImages:{
    width: screenWidth > 1200 ? screenWidth * 0.90 : // Desktop
           screenWidth > 768 ? screenWidth * 0.90 :   // Tablet
           screenWidth * 0.70,                        // Mobile
    maxWidth: 300, // Prevent it from getting too wide on tablets
    maxHeight:200,
    padding: 16,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 6,
  },
  imageContainer: {
    position: 'relative',
    width: '90%',
    height: screenHeight * 0.4, // 40% of screen height
    minHeight: 250,
    maxHeight: 400,
    alignSelf: 'center',
  },
  headerImage: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  heroText: {
    fontSize: screenWidth > 400 ? 28 : 24,
    fontWeight: 'bold',
    color: '#fbbf24', // yellow-400
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  descriptionText: {
    fontSize: screenWidth > 400 ? 16 : 14,
    color: '#fbbf24',
    lineHeight: screenWidth > 400 ? 24 : 22,
    marginBottom: 30,
    textAlign: 'justify',
  },
  sectionTitle: {
    fontSize: screenWidth > 400 ? 24 : 22,
    fontWeight: 'bold',
    color: '#fbbf24',
    marginBottom: 20,
    textAlign: 'center',
  },
  sectionText: {
    fontSize: screenWidth > 400 ? 18 : 16,
    color: '#fbbf24',
    lineHeight: screenWidth > 400 ? 26 : 24,
    textAlign: 'justify',
  },
});