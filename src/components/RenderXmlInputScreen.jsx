import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { WebView } from 'react-native-webview';

const RenderXmlInputScreen = () => {
  const [xmlInput, setXmlInput] = useState('');
  const [xmlContent, setXmlContent] = useState('');

  
  const handleInputChange = (text) => {
    setXmlInput(text);
  };

  // Render the XML content to WebView when the user clicks 'Render'
  const renderXml = () => {
    setXmlContent(xmlInput);
  };

  // Generate HTML content to render XML in WebView
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>XML Input</title>
      </head>
      <body>
        ${xmlContent}
      </body>
    </html>
  `;

  return (
    <View style={styles.container}>
      {/* Heading */}
      <Text style={styles.heading}>Render XML Form from Input</Text>

      {/* WebView to render the XML content */}
      {xmlContent && (
        <WebView
          originWhitelist={['*']}
          source={{ html: htmlContent }}
          style={styles.webView}
        />
      )}

   
      {/* Text Input for XML code */}
      <TextInput
        style={styles.textInput}
        multiline
        placeholder="Enter your XML code here"
        value={xmlInput}
        onChangeText={handleInputChange}
      />
     
      {/* Render Button */}
      <TouchableOpacity activeOpacity={0.7} style={styles.renderButton} onPress={renderXml}>
        <Text style={styles.buttonText}>Render XML</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    paddingTop: 20,
    paddingBottom: 30,
    paddingHorizontal: 20,
    justifyContent: 'flex-start',
  },
  heading: {
    marginTop:20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: 20,
  },
  textInput: {
    height: 200,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginBottom: 20,
    backgroundColor: '#fff',
    textAlignVertical: 'top', 
    lineHeight: 22,
  },
  renderButton: {
    width: '100%',
    paddingVertical: 15,
    backgroundColor: '#3498db',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
  webView: {
    flex: 1,
    width: '100%',
    marginBottom: 20,
  },
  spacer: {
    flexGrow: 1,
  },
});

export default RenderXmlInputScreen;
