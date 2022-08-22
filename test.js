import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import QuestionsMath from './components/getQuestion';
import QuestionsMathM from './components/getQuestionMedium';
import QuestionsMathH from './components/getQuestionHard';
import React, { useState, useEffect } from 'react';
import QuestionBlock from './components/questionBlock';
import Timer from './components/timer';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';


const questionsHandler = new QuestionsMath();
const questionsHandlerM = new QuestionsMathM();
const questionsHandlerH = new QuestionsMathH();
var questionsObjects = questionsHandlerM.getQuestionsNoDuplicates(15);

const NavigationToDetails = navigation =>{
  navigation.navigate("Home");
}
function Test(props) {
    //const [ questionsObjects, setQuestionsObjects ] = useState(questionsHandlerM.getQuestionsNoDuplicates(15));
    const navigation = useNavigation();

    switch(props.level){
      case "בינוני":
        console.log("בנוני")
        questionsObjects = questionsHandlerM.getQuestionsNoDuplicates(15); 
        break;
      case "קל":
          console.log("קל")
          questionsObjects = questionsHandlerM.getQuestionsNoDuplicates(15); 
          break;
      case "קשה":
        console.log("קשה")
        questionsObjects = questionsHandlerH.getQuestionsNoDuplicates(15); 
        break;
    } 
    

    return (
        <View style={styles.container}>
            <View style={styles.bar}>
                <Timer></Timer>
                <TouchableOpacity onPress={() => { // this button, will change the name and level to empty string so the app.js component will know to go back to the choose part of the app.
                    Alert.alert(
                        "אתה מנסה לצאת",
                        "האם אתה בטוח שתרצה לצאת מהמבחן, השנויים לא ישמרו.",
                        [
                          {
                            text: "להשאר",
                            onPress: () => {/* doing nothing... */},
                            style: "cancel"
                          },
                          { text: "לצאת", onPress: () => {
                            props.getName("");
                            props.getLevel("");
                            NavigationToDetails(navigation);
                            ////// ------------------------------------
                          }}
                        ]
                      );
                }}>
                    <View style={{flexDirection: "row", alignItems:"center", justifyContent:"center"}}>
                        <Entypo style={{marginLeft: 30}} name="back" size={50} color="red" />
                        <Text style={{fontSize: 18, marginLeft: 10}}>חזור</Text>
                    </View>
                </TouchableOpacity>
                <Text style={{fontSize: 20}}>שם המבחן: {props.name}, רמת המבחן: {props.level}</Text>
            </View>
            
            <View style={styles.questionsZone}>
              <ScrollView>
                  { questionsObjects.map(q => {
                      return (
                        <QuestionBlock key={q.id} question={q.question} answer={q.answer} id={q.id} wrongAnswers={q.wrongAnswers}></QuestionBlock>
                      )
                  }) }
              </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      marginTop: 30,
      backgroundColor: '#fff',
      alignItems: 'center',
      height: "80%",
      width: "100%"
    },
    bar:{
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    questionsZone:{
      alignItems: "flex-end"
    }
  });
  


export default Test;