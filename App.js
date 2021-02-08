import React from 'react';
import { View } from 'react-native';
import SplashScreen from './src/SplashScreen/index';

console.disableYellowBox = true;
// Create a component
const App = () => (
  <View style={{ flex: 1 }}>
    <SplashScreen />
   </View>
);

// Render it to the device
export default App;