import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import Button from 'react-native-flat-button';

import Colors from '../constants/Colors';

function Cell({ value, Pressed, position }) {
    const [isActive, setIsActive] = useState(false);
    var text = ""
    // If the cell value is 0 then it will leave the cell blank
    if (value != 0){
        text = value
    } 
  return (
    <Button
      type="custom"
      onPress={ () => {setIsActive(!isActive); Pressed(value, position); } }
      containerStyle={isActive ? styles.buttonActive : styles.buttonInactive}
      backgroundColor={Colors.tan}
      borderRadius={0}
      shadowHeight={0}
    >
      {text}
    </Button>
  );
}
// Going to have to set default text value to ""
export default Cell;
const styles = StyleSheet.create({
  buttonInactive: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'red',
  },
  buttonActive: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'yellow'
  }
});