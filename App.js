import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/components/Home';
import RenderXmlFileScreen from './src/components/RenderXmlFileScreen';
import RenderXmlInputScreen from './src/components/RenderXmlInputScreen';
import { StatusBar } from 'react-native';


const Stack=createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
       <StatusBar
        barStyle="dark-content" 
        translucent={true}
        backgroundColor="transparent"
      />
      <Stack.Navigator 
        screenOptions={{headerShown:'false'}}
        initialRouteName='Home'
      >
        <Stack.Screen  options={{
          headerShown: false, 
        }} name="Home" component={Home} />
        <Stack.Screen  options={{
          title: 'Render File',
        }} name="FileScreen" component={RenderXmlFileScreen} />
        <Stack.Screen  options={{
          title: 'Render Input Xml', 
        }} name="InputScreen" component={RenderXmlInputScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
