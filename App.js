import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

import { View, SafeAreaView,  StyleSheet } from 'react-native';
import React from 'react';

import Home from './src/screens/home/home';
import CadDespesa from './src/screens/cad-despesa/cad-despesa';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen  name='home' component={Home} options={{headerShown: false}}/>
        <Stack.Screen  name='despesa' component={CadDespesa} options={{
          title: "Despesa",
          headerTitleAlign: "center",
          headerShadowVisible: false
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
    container:{
      flex: 1
    }
})


/*<View style={styles.container}>
        <CadDespesa />
    </View>
*/