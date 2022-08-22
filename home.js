import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, ProgressViewIOSComponent } from 'react-native';
import Block from './components/block';
import React from 'react';
import image1 from './assets/mathImage.png';
import image2 from './assets/textImage.png';
import image3 from './assets/shapes.png';
import image4 from './assets/analogistShapesImage.png';
import { NavigationContainer } from '@react-navigation/native';

export default function Home(props) {

  const { navigation } = props;
 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Application Name</Text>
      <ScrollView>
        <Block navigation={navigation} getLevel={props.getLevel} name="כמותי" getName={props.getName} img={image1}/>
      
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    height: "90%",
  },
  title:{
    fontSize: 32,
    margin: 10
  }
});
