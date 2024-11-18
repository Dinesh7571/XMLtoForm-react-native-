import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

const Home = () => {
    const navigation = useNavigation();
  // Function for handling button clicks
  const handleFileButtonClick = () => {
   navigation.navigate('FileScreen')
  };

  const handleInputButtonClick = () => {
    navigation.navigate('InputScreen')
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to Form Renderer</Text>
      <Text style={styles.subHeading}>Choose an option below to render a form</Text>

     
      <TouchableOpacity

      activeOpacity={0.7}
        style={[styles.button, styles.fileButton]}
        onPress={handleFileButtonClick}
      >
        <Text style={styles.buttonText}>Render Form from XML File</Text>
      </TouchableOpacity>

     
      <TouchableOpacity
      activeOpacity={0.7}
        style={[styles.button, styles.inputButton]}
        onPress={handleInputButtonClick}
      >
        <Text style={styles.buttonText}>Render Form from XML Input</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  heading: {
    textAlign:'center',
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subHeading: {
    fontSize: 18,
    color: '#777',
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    width: '100%',
    paddingVertical: 15,
    borderRadius: 8,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fileButton: {
    backgroundColor: '#4CAF50', // Green button for file option
  },
  inputButton: {
    backgroundColor: '#2196F3', // Blue button for input option
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default Home;
