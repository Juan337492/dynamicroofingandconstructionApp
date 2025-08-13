import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native';

const shinglesImage = require('@/assets/images/shingles.jpg');
const lookingImage = require('@/assets/images/lookingAtRoof.jpg');
const gutterGuardImage = require('@/assets/images/leafBlasterPro.png');
const roofImage = require('@/assets/images/roofimage.jpg');
const atlasImage = require('@/assets/images/atlasShingles.jpg');

// Type definitions
interface BlogPost {
  id: number;
  title: string;
  author: string;
  excerpt: string;
  content: string;
  category: string;
  image: any;
  date: string;
}

interface BlogCardProps {
  post: BlogPost;
  imageWidth: number;
}

const BlogPage = () => {
  const [imageWidth, setImageWidth] = useState(getResponsiveImageWidth());

  useEffect(() => {
    const handleResize = () => {
      setImageWidth(getResponsiveImageWidth());
    };

    const subscription = Dimensions.addEventListener('change', handleResize);
    return () => subscription?.remove?.();
  }, []);

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Essential Roof Maintenance',
      author: 'Juan Rodriguez',
      excerpt: 'Regular roof maintenance is essential to prevent costly repairs and extend the life of your roof. Small issues can quickly escalate if not addressed in time.',
      content: 'Regular roof maintenance is essential to prolonging its lifespan and protecting your home. Tasks such as clearing debris, checking for damaged shingles, cleaning gutters, and inspecting flashing can help you identify potential problems early and avoid expensive repairs. Experts recommend having your roof inspected at least once a year, and especially after major weather events.',
      category: 'Roof Care Tips',
      image: shinglesImage,
      date: '2024-01-15',
    },
    {
      id: 2,
      title: 'Why Get a FREE Roof Inspection?',
      author: 'Victor Rodriguez',
      excerpt: 'A free roof inspection can be valuable for identifying hidden damage and ensuring your home stays protected throughout the year.',
      content: 'A free roof inspection can be valuable for several reasons. First, it helps homeowners discover issues like loose shingles, water damage, or mold growth before they become major problems. Second, many roofing companies offer this service without any obligation, giving you peace of mind. Third, if your home has experienced recent storms, it’s important to check for damage that may qualify for insurance coverage.',
      category: 'Protection',
      image: lookingImage,
      date: '2024-01-20',
    },
    {
      id: 3,
      title: 'LeafBlaster Pro® Gutter Guards',
      author: 'Juan Rodriguez',
      excerpt: 'Clogged gutters pose serious risks, including water damage and foundation erosion. LeafBlaster Pro® keeps your gutters clean and flowing year-round.',
      content: 'Clogged gutters pose serious risks to your home by causing overflow that can damage your roof, siding, and even foundation. LeafBlaster Pro® Gutter Guards are designed to keep out leaves, pine needles, and debris while allowing water to flow freely. Made of stainless steel micro-mesh and backed by a 40-year warranty, these guards are a low-maintenance solution for homeowners seeking long-term protection.',
      category: 'Gutter Guards',
      image: gutterGuardImage,
      date: '2024-01-25',
    },
    {
      id: 4,
      title: 'Insurance Claim Process',
      author: 'Victor Rodriguez',
      excerpt: 'The insurance claim process for roof damage can be complex. Knowing what to expect can help you navigate it successfully and get the coverage you deserve.',
      content: 'The insurance claim process for roof damage typically involves several steps: documenting the damage with photos, contacting your insurance provider, scheduling an inspection with an adjuster, and hiring a certified roofer to provide a detailed estimate. It’s important to understand your policy’s coverage and exclusions. Working with a contractor experienced in insurance claims can make the process smoother and improve your chances of approval.',
      category: 'Insurance Claims',
      image: roofImage,
      date: '2024-02-01',
    },
    {
      id: 5,
      title: 'Benefits of Atlas Shingles for Your Roof',
      author: 'Victor Rodriguez',
      excerpt: 'When it comes to roofing, choosing the right materials is critical. Atlas shingles offer strength, style, and long-term value.',
      content: 'Atlas shingles are quickly becoming popular for homeowners due to their durability, aesthetic appeal, and advanced technology. These shingles feature Scotchgard™ Protector to prevent black streaks caused by algae. They are engineered for superior wind resistance and come in a variety of styles and colors to match your home. Choosing Atlas shingles means investing in a roof that looks great and lasts longer.',
      category: 'Roofing Materials',
      image: atlasImage,
      date: '2024-02-05',
    },
  ];

  const BlogCard: React.FC<BlogCardProps> = ({ post, imageWidth }) => (
    <View className="bg-white rounded-lg shadow-sm mb-4 overflow-hidden mt-5">
      <Image 
        source={post.image} 
        style={[styles.servicesImages, { width: imageWidth }]} className='mt-5'
        resizeMode="cover"
      />
      <View className="p-10">
        <View className="inline-block px-2 py-1 bg-blue-100 rounded-full mb-2 self-start">
          <Text className="text-xs text-blue-600 font-medium">{post.category}</Text>
        </View>
        <Text className="text-lg font-semibold text-gray-900 mb-2 leading-6">{post.title}</Text>
        <Text className="text-sm text-gray-600 mb-2">By {post.author}</Text>
        <Text className="text-gray-700 leading-5 text-sm mb-2 sm:px-10 lg:w-3/4 lg:mx-auto">
        {post.content}
        </Text>

        <Text className="text-sm text-gray-500 mb-0">
          {new Date(post.date).toLocaleDateString()}
        </Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-neutral-900">
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      {/* Header */}
      <View className="px-4 py-6 bg-white shadow-sm">
        <Text className="text-2xl font-bold text-gray-900 mb-1">Dynamic Roofing Blog</Text>
        <Text className="text-base text-gray-600">Expert insights and tips for your home</Text>
      </View>

      {/* Blog Posts */}
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 16, paddingBottom: 16 }}
        showsVerticalScrollIndicator={false}
      >
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} imageWidth={imageWidth} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

// Helper to calculate responsive image width
const getResponsiveImageWidth = () => {
  const screenWidth = Dimensions.get('window').width;
  if (screenWidth > 1200) {
    return screenWidth * 0.9;
  } else if (screenWidth > 768) {
    return screenWidth * 0.9;
  } else {
    return screenWidth * 0.7;
  }
};

const styles = StyleSheet.create({
  servicesImages: {
    maxWidth: 400,
    height: 200,
    maxHeight: 200,
    padding: 16,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 6,
  },
});

export default BlogPage;
