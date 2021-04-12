import React from 'react';
import { StyleSheet } from 'react-native';
import Button from 'react-native-flat-button';

import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';

function SolveButton({ text, pressed }) {
  return (
    <Button
      type="custom"
      onPress={pressed}
      containerStyle={styles.buttonContainer}
      backgroundColor={Colors.green}
      borderRadius={0}
      shadowHeight={0}
    >
      {text}
    </Button>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default SolveButton;
