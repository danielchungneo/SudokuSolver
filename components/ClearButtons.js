import React from 'react';
import { StyleSheet } from 'react-native';
import Button from 'react-native-flat-button';

import Colors from '../constants/Colors';

function ClearButtons({ text, Press, number }) {
  return (
    <Button
      value= "number"
      type="custom"
      onPress={() => Press(number, text)} // Set onPress of button to run the passed in function of Press
      containerStyle={styles.button}
      backgroundColor={Colors.red}
      borderRadius={0}
      shadowHeight={0}
    >
      {text}
    </Button>
  );
}

export default ClearButtons;
const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
});
