import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import React, { useState } from 'react';
import Home from './home';
import Test from './test';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function App() {
  const [ name, setName ] = useState("");
  const [ level, setLevel ] = useState("");
  
  const getLevel = (lvl) => {
    setLevel(lvl);
  }

  const getName = (n) => {
    setName(n);
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home"  children= { ()=><Home getLevel={getLevel} getName={getName} />}/>
        <Stack.Screen name="Test" children= { ()=><Test getLevel={getLevel} getName={getName} level={level} />} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    height: "100%",
  },
  title:{
    fontSize: 32,
    margin: 10
  }
});
