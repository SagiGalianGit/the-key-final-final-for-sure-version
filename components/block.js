import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Button, Alert, TouchableWithoutFeedback, TouchableOpacity  } from 'react-native';
import React, { useState } from 'react';
import { EvilIcons } from '@expo/vector-icons'; 
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

const NavigationToDetails = navigation =>{
    
    navigation.navigate("Test");
}

function Block(props) {
    const navigation = useNavigation();
    const [ arrowMode, setArrowMode ] = useState("arrow-left");
    const [ level, setLevel ] = useState("קל");
    
    const setUpTest = () => {
        props.getLevel(level);
        props.getName(props.name);
    }

    const handleIconClick = () => {
        if (arrowMode == "arrow-left"){
            setArrowMode("arrow-down");
        }else{
            setArrowMode("arrow-left");
        }
    }
    var explanation = " לפניכם מבחן בנושא " + String(props.name) + ",  המבחן יכיל שאלות ברמת קושי שתבחרו על ידי לחיצה בחץ. המבחן יכין אתכם לחלק " + String(props.name) + " בצו ראשון."
    return (
        <View style={styles.container}>
            <ImageBackground source={props.img} resizeMode="cover" style={styles.image}>
                <View style={styles.title}>
                    <TouchableWithoutFeedback onPress={handleIconClick}>
                        <EvilIcons name={arrowMode} size={40} color="black" />
                    </TouchableWithoutFeedback>   
                    <Text style={{fontSize: 20, marginTop: 7, marginRight: 10}}>רמה</Text>                 
                    <Text style={{fontSize: 22, marginTop:5}}>{props.name}</Text>
                    <Button title="הסבר" onPress={() => Alert.alert(explanation)} />
                </View>
                <View style={{width: "100%", alignItems:"left"}}>
                    { arrowMode == "arrow-down" && <View style={styles.dropList}>
                    <TouchableOpacity onPress={() => {
                        setLevel("קל");
                        setArrowMode("arrow-left");
                        }} style={{alignItems:"center", borderRadius:10 }}>
                        <Text style={styles.dropButton}>קל</Text>

                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => {
                        setLevel("בינוני");
                        setArrowMode("arrow-left");
                        }} style={{ alignItems:"center", borderRadius:10 }}>
                        <Text style={styles.dropButton}>בנוני</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => {
                        setLevel("קשה");
                        setArrowMode("arrow-left");
                        }} style={{alignItems:"center", borderRadius:10}}>
                        <Text style={styles.dropButton}>קשה</Text>
                    </TouchableOpacity>
                    </View> }
                </View>
                <TouchableOpacity onPress={() => {
                    console.log(props)
                    NavigationToDetails(navigation);
                    setUpTest();
                }} style={{width: "60%", marginTop: 30, alignItems:"center", borderRadius:10, backgroundColor:"green"}}>
                    <Text style={styles.buttonText}>התחל תרגול</Text>

                </TouchableOpacity>    
                <Text style={{fontSize: 33}}>רמה:  {level} </Text>
            </ImageBackground>
        </View>
    );
}


export default Block;


const styles = StyleSheet.create({
    title:{
        backgroundColor: '#808080',
        flexDirection: "row",
        justifyContent: "center",
        width: "100%"
    },
    image: {
        flex: 1,
        width: "100%",
        height: "100%",
        alignItems:"center"
    },
    container:{
        height: 300,
        width: 300,
        margin: 4,
        borderWidth: 6,
        borderColor: '#111',
        borderRadius: 10,
    },
    buttonText:{
        fontSize: 22,
        color: "black",
    },
    dropList:{
        width: "40%",
        height: "50%",
        backgroundColor: "gray",
        borderWidth: 2,
        borderColor:"black",
        borderBottomEndRadius:20
    },
    dropButton:{
        fontSize: 22  
    }
});