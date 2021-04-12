import React from 'react';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import Button from 'react-native-flat-button';
import LinearGradient from 'expo-linear-gradient';

import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';

import InputPad from './InputPad';
import SolveButton from '../components/SolveButton';
import ClearButtons from '../components/ClearButtons';
import Board from "../components/Board";

function MainUI(props) {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.UIAreaContainer}>
        <View style={styles.boardContainer}>
          <Board />
        </View>
        <View style={styles.clearContainer}>
          <View style={styles.clearButton}>
            <ClearButtons
              Press={(value, text) => console.log(value + " " + text)} // Passing a function to each button
              text="Clear Cell" // Passing values into the button
              number="1" 
            />
          </View>
          <View style={styles.clearButton}>
            <ClearButtons
              Press={(value, text) => console.log(value + " " + text)}
              text="Clear Board"
              number="2"
            />
          </View>
        </View>
        <InputPad />
        <View style={styles.solveButtonContainer}>
          <SolveButton
            pressed={() => console.log('I will solve now')}
            text="Solve"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default MainUI;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: Colors.grey,
  },

  UIAreaContainer: {
    backgroundColor: Colors.brown,
    height: '100%',
    width: '90%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 10,
  },

  boardContainer: {
    backgroundColor: Colors.blue,
    height: '60%',
    width: '95%',
    marginTop: 10,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  clearContainer: {
    height: '5%',
    width: '95%',
    backgroundColor: Colors.tan,
    borderWidth: 1,
    flexDirection: 'row',
  },

  clearButton: {
    flex: 1,
  },

  solveButtonContainer: {
    backgroundColor: Colors.green,
    height: '8%',
    width: '95%',
    borderWidth: 1,
  },
});
