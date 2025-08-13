import { EmailJSResponseStatus, send } from '@emailjs/react-native';
import React, { useEffect, useState } from 'react';
import { Alert, Image, Linking, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const PhoneImage = require('@/assets/images/Phone.png'); // Add your phone icon image


interface FormData {
  name: string;
  email: string;
  phone: string;
  description: string;
}

export default function ContactScreen() {
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    description: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Auto-hide success message after 5 seconds
  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  const handleSubmit = async () => {
    // Prevent multiple submissions
    if (isSubmitting) return;

    if (!formData.name || !formData.email || !formData.description) {
      Alert.alert('Error', 'Please fill in all required fields');
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      Alert.alert('Error', 'Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      console.log('Attempting to send email...'); // Debug log
      
      const result = await send(
        'service_roofing', // EmailJS service ID
        'template_oitj9vp', // EmailJS template ID
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.description,
        },
        {
          publicKey: 'UK6AdWIUcm9VHsdYJ', // EmailJS public key
        },
      );

      console.log('Email sent successfully:', result); // Debug log
      
      // Show success message and reset form
      setShowSuccess(true);
      setFormData({ name: '', email: '', phone: '', description: '' });
      
    } catch (err) {
      console.error('Email sending error:', err); // Debug log
      
      let errorMessage = 'An unexpected error occurred. Please try again.';
      
      if (err instanceof EmailJSResponseStatus) {
        console.log('EmailJS Request Failed...', err);
        errorMessage = `Failed to send message (${err.status}: ${err.text}). Please check your connection and try again.`;
      } else if (err instanceof Error) {
        errorMessage = `Error: ${err.message}`;
      }
      
      Alert.alert('Error', errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePhoneCall = () => {
    Linking.openURL('tel:4047849030');
  };

  const handleCalendlyOpen = () => {
    Linking.openURL('https://calendly.com/dynamic-rcllc/roof');
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer} className='bg-stone-800'>
      {/* Success Message */}
      {showSuccess && (
        <View className="bg-green-100 border-l-4 border-green-500 p-4 mb-4 mx-4 rounded-r-lg">
          <View className="flex-row items-center">
            <View className="flex-shrink-0">
              <Text className="text-green-600 text-xl">✓</Text>
            </View>
            <View className="ml-3 flex-1">
              <Text className="text-green-800 font-semibold text-base">
                Message Sent Successfully!
              </Text>
              <Text className="text-green-700 text-sm mt-1">
                Thank you for contacting us. We'll get back to you within 24 hours.
              </Text>
            </View>
            <TouchableOpacity 
              onPress={() => setShowSuccess(false)}
              className="ml-3"
            >
              <Text className="text-green-600 text-lg font-bold">×</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* Contact Form */}
      <View style={styles.formContainer} className='sm:w-5/6 sm:mx-auto'>
        <Text style={styles.title}>Contact us</Text>
        
        {/* Phone Section */}
        <View style={styles.phoneSection}>
          <TouchableOpacity onPress={handlePhoneCall} style={styles.phoneButton}>
            <Image source={PhoneImage} style={styles.phoneIcon} />
            <Text style={styles.phoneText}>Phone : 404-784-9030</Text>
          </TouchableOpacity>
        </View>

        {/* Name Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>
            Name <Text style={styles.required}>*</Text>
          </Text>
          <TextInput
            style={styles.textInput}
            value={formData.name}
            onChangeText={(value) => handleInputChange('name', value)}
            placeholder="Enter your name"
            placeholderTextColor="#9CA3AF"
            editable={!isSubmitting}
          />
        </View>

        {/* Email Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>
            Email <Text style={styles.required}>*</Text>
          </Text>
          <TextInput
            style={styles.textInput}
            value={formData.email}
            onChangeText={(value) => handleInputChange('email', value)}
            placeholder="Enter your email"
            placeholderTextColor="#9CA3AF"
            keyboardType="email-address"
            autoCapitalize="none"
            editable={!isSubmitting}
          />
        </View>

        {/* Phone Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>
            Phone number <Text style={styles.optional}>(optional)</Text>
          </Text>
          <TextInput
            style={styles.textInput}
            value={formData.phone}
            onChangeText={(value) => handleInputChange('phone', value)}
            placeholder="Enter your phone number"
            placeholderTextColor="#9CA3AF"
            keyboardType="phone-pad"
            editable={!isSubmitting}
          />
        </View>

        {/* Description Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>
            Short description <Text style={styles.required}>*</Text>
          </Text>
          <TextInput
            style={[styles.textInput, styles.textArea]}
            value={formData.description}
            onChangeText={(value) => handleInputChange('description', value)}
            placeholder="Enter a short description"
            placeholderTextColor="#9CA3AF"
            multiline={true}
            numberOfLines={4}
            textAlignVertical="top"
            editable={!isSubmitting}
          />
        </View>

        {/* Submit Button */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={[styles.submitButton, isSubmitting && styles.submitButtonDisabled]} 
            onPress={handleSubmit}
            disabled={isSubmitting}
          >
            <Text style={styles.submitButtonText}>
              {isSubmitting ? 'Sending...' : 'Submit'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Calendly Scheduling Section */}
      <View style={styles.calendlyContainer} className='sm:w-5/6 sm:mx-auto'>
        <Text style={styles.calendlyTitle}>Schedule Your Roof Consultation</Text>
        <Text style={styles.calendlyDescription}>
          Book a convenient time for your free roof inspection and consultation.
        </Text>
        <TouchableOpacity style={styles.calendlyButton} onPress={handleCalendlyOpen}>
          <Text style={styles.calendlyButtonText}>Schedule Appointment</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 32,
  },
  formContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 32,
    marginTop: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: 24,
  },
  phoneSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    paddingTop: 24,
    paddingBottom: 24,
  },
  phoneButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  phoneIcon: {
    width: 32,
    height: 32,
    marginRight: 8,
  },
  phoneText: {
    fontSize: 16,
    color: '#1F2937',
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151', // text-gray-700
    marginBottom: 8,
  },
  required: {
    color: '#EF4444', // text-red-500
  },
  optional: {
    color: '#9CA3AF', // text-gray-400
    fontSize: 12,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#D1D5DB', // border-gray-300
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#374151', // text-gray-700
    backgroundColor: '#FFFFFF',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  submitButton: {
    backgroundColor: '#F97316', // bg-orange-500
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    minWidth: 120,
  },
  submitButtonDisabled: {
    backgroundColor: '#D1D5DB', // Disabled color
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  // New Calendly styles
  calendlyContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 32,
    marginTop: 24,
    alignItems: 'center',
  },
  calendlyTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: 12,
  },
  calendlyDescription: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 22,
  },
  calendlyButton: {
    backgroundColor: '#10B981', // Green color for scheduling
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
    minWidth: 200,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  calendlyButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});