import React from "react";
import { StyleSheet, SafeAreaView, Text, View, Button } from "react-native";

import Colors from "../constants/Colors";
import InputButton from "../components/InputButton";

function InputPad(props) {
  const numberInputs = [
    { row: [1, 2, 3] },
    { row: [4, 5, 6] },
    { row: [7, 8, 9] },
  ];
  return (
    <View style={styles.numberInputContainer}>
      {numberInputs.map((item, index) => {
        //Map over each row of the input number data (Make the three rows)
        return (
          <View key={index} style={styles.numberInputRow}>
            {item.row.map((number) => {
              //Map over each number in each row to create each individual input cell (Make the three cells in each row)
              return (
                <InputButton
                  key={number}
                  text={number}
                  onPress={() => console.log(`${number} was pressed`)}
                />
              );
            })}
          </View>
        );
      })}
    </View>
  );
}

export default InputPad;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.grey,
    alignItems: "center",
    justifyContent: "flex-start",
  },

  numberInputContainer: {
    backgroundColor: Colors.blue,
    height: "25%",
    width: "95%",
    borderWidth: 1,
  },

  numberInputRow: {
    flex: 1,
    backgroundColor: Colors.white,
    flexDirection: "row",
  },
});
