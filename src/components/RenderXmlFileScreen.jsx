
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import RNFS from 'react-native-fs';
import { WebView } from 'react-native-webview';

const RenderXmlFileScreen = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [xmlContent, setXmlContent] = useState('');

  // Function to pick a document
  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.pickSingle();
      setSelectedFile(result);
      setFileName(result.name);

      // Read the file content 
      const fileContent = await RNFS.readFile(result.uri, 'utf8');
      setXmlContent(fileContent);

    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User canceled the picker');
      } else {
        console.error('Error picking document: ', err);
      }
    }
  };

  // Generate HTML content to display the XML||svg  code in WebView
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>XML Content</title>
       
      </head>
      <body>
        
       ${xmlContent}
      </body>
    </html>
  `;

  return (
    <View style={styles.container}>
      {/* Display file name if selected */}
     
      {/* WebView to render XML content */}
      {xmlContent && (
        <WebView
          originWhitelist={['*']}
          source={{ html: htmlContent }}
          style={styles.webView}
        />
      ) }

      {/* File selection button at the bottom */}
      <TouchableOpacity  activeOpacity={0.7} style={styles.fileButton} onPress={pickDocument}>
        <Text style={styles.fileButtonText}>Select XML File</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    paddingTop: 20,
    justifyContent: 'space-between',
    paddingBottom: 30,
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
    marginTop: 20,
  },
  fileName: {
    fontSize: 20,
    color: '#2c3e50',
    textAlign: 'center',
    fontWeight: '500',
    marginBottom: 20,
  },
  placeholder: {
    fontSize: 18,
    color: '#7f8c8d',
    textAlign: 'center',
    marginTop: 50,
  },
  webView: {
    flex: 1,
    width: '100%',
    marginBottom: 20,
  },
  fileButton: {
    alignSelf:'center',
    width: '100%',
    paddingVertical: 15,
    backgroundColor: '#3498db',
    borderRadius: 10,
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
  },
  fileButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
});

export default RenderXmlFileScreen;
