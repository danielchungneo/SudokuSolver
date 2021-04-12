import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import Cell from '../components/Cell';

import Colors from '../constants/Colors';

function Board(props) {
    const cellRows = [
        { row: [0, 1, 2, 3, 4, 5, 6, 7, 8] }, 
        { row: [0, 1, 2, 3, 4, 5, 6, 7, 8] }, 
        { row: [0, 1, 2, 3, 4, 5, 6, 7, 8] }, 
        { row: [0, 1, 2, 3, 4, 5, 6, 7, 8] }, 
        { row: [0, 1, 2, 3, 4, 5, 6, 7, 8] }, 
        { row: [0, 1, 2, 3, 4, 5, 6, 7, 8] }, 
        { row: [0, 1, 2, 3, 4, 5, 6, 7, 8] }, 
        { row: [0, 1, 2, 3, 4, 5, 6, 7, 8] }, 
        { row: [0, 1, 2, 3, 4, 5, 6, 7, 8] }, 
        ];
    return (
            <View style={styles.container}>
                {cellRows.map((item, rowIndex) => {
                    return (
                        <View key={rowIndex} style={styles.cellRow}>
                            {item.row.map((cellValue, columnIndex) => {
                                return (
                                    <Cell 
                                        key={columnIndex}
                                        value={cellValue}
                                        position={[rowIndex, columnIndex]}
                                        Pressed={(value, position) => console.log(`Cell Position: (${position[0]}, ${position[1]})`)}
                                    />
                                )
                            })}
                        </View>
                    )
                })}
                
            </View>
    );
}

export default Board;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.grey,
        alignItems: 'center',
        justifyContent: 'center',
      },
      
      container: {
        backgroundColor: Colors.blue,
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: "100%",
        minHeight: "60%",
        margin: 100,
        borderWidth: 2,
    },

    cellRow: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: Colors.white,
        minWidth: "100%",
    },

})