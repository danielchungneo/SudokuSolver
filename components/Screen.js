import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import Colors from '../constants/Colors';

function Screen(props) {
  return (
    <SafeAreaView styles={styles.container}>
      <LinearGradient
        colors={[Colors.aqua, Colors.teal]}
        style={styles.screen}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.grey,
    alignItems: 'center',
    justifyContent: 'center',
  },

  screen: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -1,
  },
});

export default Screen;
