import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';

export default function Home(props) {
  return (
    <SafeAreaView style={styles.screen}>
      <LinearGradient
        colors={[Colors.aqua, Colors.teal]}
        style={styles.background}
      >
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>Sudoku Solver</Text>
        </View>
        <View style={styles.startButtonContainer}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('MainUI')}
            style={styles.startButton}
          >
            <Text style={styles.startButtonText}>Start Solving</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.startButtonContainer}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Board')}
            style={styles.startButton}
          >
            <Text style={styles.startButtonText}>Testing Board View</Text>
          </TouchableOpacity>
        </View>

      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.grey,
    alignItems: 'center',
    justifyContent: 'center',
  },

  background: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textContainer: {
    margin: 15,
    height: '25%',
    width: '90%',
    backgroundColor: Colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 2,
  },

  titleText: {
    fontFamily: Fonts.regular,
    fontSize: 50,
    color: Colors.white,
  },

  startButtonContainer: {
    backgroundColor: Colors.blue,
    height: '10%',
    width: '40%',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },

  startButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  startButtonText: {
    fontFamily: Fonts.regular,
    color: Colors.white,
    fontSize: 20,
  },
});
