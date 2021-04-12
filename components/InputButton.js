import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import Button from 'react-native-flat-button';

import Colors from '../constants/Colors';

function InputButton({ text, onPress }) {
  return (
    <Button
      type="custom"
      onPress={onPress}
      containerStyle={styles.button}
      backgroundColor={Colors.tan}
      borderRadius={0}
      shadowHeight={0}
    >
      {text}
    </Button>
  );
}

export default InputButton;
const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
});
