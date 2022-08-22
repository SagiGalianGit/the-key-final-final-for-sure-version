import { StyleSheet, Text, View, ScrollView, Alert } from 'react-native';
import React, { useState } from 'react';
import mixArray from './mixArray';
import CheckBox from "expo-checkbox";

function QuestionBlock(props) {
    const [ selected1, setSelected1 ] = useState(false);
    const [ selected2, setSelected2 ] = useState(false);
    const [ selected3, setSelected3 ] = useState(false);
    const [ selected4, setSelected4 ] = useState(false);

    const [ qOrdered, setQordered ] = useState(props.wrongAnswers);
    const [ qUnordered, setQunordered ] = useState(mixArray(qOrdered, props.answer));   
    const [ indexOfCurrect, setIndexOfCurrect ] = useState(qUnordered.indexOf(props.answer))

    return (
        <View style={styles.container}>
            <Text style={{fontSize: 32}}>{props.question}</Text>
            <View style={{flexDirection:"row"}}>
                <View>
                    { qUnordered.map(ans => {
                        return (
                            <View key={Math.random()}>
                                <Text style={{margin: 20, fontSize: 22}}>{ans}</Text>
                            </View>
                        )
                    }) }
                </View>
                <View>
                    <CheckBox
                        style={{margin: 20}}
                        value={selected1}
                        onValueChange={() => {
                            setSelected1(true);
                            setSelected2(false);
                            setSelected3(false);
                            setSelected4(false);
                            if (indexOfCurrect == 0){
                                Alert.alert("you are right")
                            }                            
                        }}
                        color={selected1 ? "#4630EB" : undefined}
                    />
                    <CheckBox
                        style={{margin: 20}}
                        value={selected2}
                        onValueChange={() => {
                            setSelected1(false);
                            setSelected2(true);
                            setSelected3(false);
                            setSelected4(false);
                            if (indexOfCurrect == 1){
                                Alert.alert("you are right")
                            }   
                        }}
                        color={selected2 ? "#4630EB" : undefined}
                    />
                    <CheckBox
                        style={{margin: 20}}
                        value={selected3}
                        onValueChange={() => {
                            setSelected1(false);
                            setSelected2(false);
                            setSelected3(true);
                            setSelected4(false);
                            if (indexOfCurrect == 2){
                                Alert.alert("you are right")
                            }   
                            
                        }}
                        color={selected3 ? "#4630EB" : undefined}
                    />
                    <CheckBox
                        style={{margin: 20}}
                        value={selected4}
                        onValueChange={() => {
                            setSelected1(false);
                            setSelected2(false);
                            setSelected3(false);
                            setSelected4(true);
                            if (indexOfCurrect == 3){
                                Alert.alert("you are right")
                            }   
                        }}
                        color={selected4 ? "#4630EB" : undefined}
                    />
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 20,
        alignItems: "flex-end",
        width: 300,    
        borderWidth: 2,
        borderColor: "#111"
    },
  });
  

export default QuestionBlock;