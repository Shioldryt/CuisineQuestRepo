
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './lib/BottomTabs';
import * as Font from 'expo-font'
import * as Splashscreen from 'expo-splash-screen'
import { NativeBaseProvider } from 'native-base';

const Stack = createNativeStackNavigator();

function App() {

  const [loaded] = Font.useFonts({
    Copenhagen: require('./assets/fonts/Copenhagen.ttf'),
    QuickKiss: require('./assets/fonts/QuickKiss.ttf'),
  })

  if (!loaded) {
    Splashscreen.preventAutoHideAsync()
  }else{
    Splashscreen.hideAsync()
  }

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="Tabs" component={BottomTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  )
}
export default App;