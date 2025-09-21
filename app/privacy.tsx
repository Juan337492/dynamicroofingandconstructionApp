import { Stack } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function PrivacyScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Privacy Policy' }} />
      <View style={styles.outerContainer}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <Text style={styles.title}>Privacy Policy for Dynamic Roofing and Construction</Text>
          <Text style={styles.paragraph}>
            <Text style={styles.boldText}>Effective Date:</Text> September 21, 2025
          </Text>
          <Text style={styles.paragraph}>
            Thank you for choosing the Dynamic Roofing and Construction. This Privacy Policy explains how we collect, use, and handle your information when you use our app. Your privacy is important to us, and we are committed to protecting your personal data.
          </Text>

          <Text style={styles.subtitle}>1. Information We Collect</Text>
          <Text style={styles.paragraph}>
            We only collect information that you voluntarily provide to us through the contact form in our app. This information includes: Name, Email Address, Phone Number (optional), and your message. We refer to this as <Text style={styles.boldText}>"Personally Identifiable Information" (PII)</Text>.
          </Text>

          <Text style={styles.subtitle}>2. How We Use Your Information</Text>
          <Text style={styles.paragraph}>
            The contact information you provide is used solely to respond to your inquiries, provide you with information about our services, schedule consultations, and for general customer service.
          </Text>

          <Text style={styles.subtitle}>3. Data Processing and Third-Party Services</Text>
          <Text style={styles.paragraph}>
            Our contact form is powered by <Text style={styles.boldText}>EmailJS</Text>. When you submit the form, the information is securely transmitted by the EmailJS service to our company's email inbox. We do not sell, trade, or rent your contact information to any other outside parties.
          </Text>

          <Text style={styles.subtitle}>4. Third-Party Links and Services</Text>
          <Text style={styles.paragraph}>
            Our app contains links to third-party services like <Text style={styles.boldText}>Calendly</Text> for scheduling and your device's native <Text style={styles.boldText}>Phone Dialer</Text>. This Privacy Policy does not cover the practices of those third parties, and any information you provide to them is subject to their own privacy policies.
          </Text>

          <Text style={styles.subtitle}>5. Data Security</Text>
          <Text style={styles.paragraph}>
            We are committed to protecting your information and take reasonable precautions to keep it safe. However, please be aware that no method of transmission over the internet or method of electronic storage is 100% secure.
          </Text>

          <Text style={styles.subtitle}>6. Children's Privacy</Text>
          <Text style={styles.paragraph}>
            Our services are not directed to individuals under the age of 18. We do not knowingly collect contact information from children under 18.
          </Text>

          <Text style={styles.subtitle}>7. Changes to This Privacy Policy</Text>
          <Text style={styles.paragraph}>
            We may update our Privacy Policy from time to time. You are advised to review this Privacy Policy periodically for any changes.
          </Text>
          
          <Text style={styles.subtitle}>8. Contact Us</Text>
          <Text style={styles.paragraph}>
            If you have any questions about this Privacy Policy, please contact us at: dynamic.rcllc@gmail.com or call 404-784-9030.
          </Text>
          
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#292524',
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 20,
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
    paddingBottom: 4,
  },
  paragraph: {
    fontSize: 16,
    color: '#D1D5DB', // A light gray for easier reading
    lineHeight: 24,
    marginBottom: 12,
  },
  boldText: {
    fontWeight: 'bold',
    color: '#fff',
  },
  button: {
    fontSize: 18,
    textDecorationLine: 'underline',
    color: '#60A5FA', // A light blue for links
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
});