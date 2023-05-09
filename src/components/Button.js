import React from "react";
import { Text, StyleSheet, Dimensions, TouchableHighlight } from "react-native";


const style = StyleSheet.create({
    button: {
            fontSize:40,
            height: Dimensions.get('window').width/4,
            width: Dimensions.get('window').width/4,
            padding: 20,
            backgroundColor: '#f0f0f0',
            textAlign: 'center',
            borderWidth: 1,
            borderColor: '#888',
    },
    operationButton: {
        color: '#fff',
        backgroundColor: '#fa8231',
    },
    buttonDouble: {
        width: (Dimensions.get('window').width / 4)*2,
    },
    buttonTriple: {
        width: (Dimensions.get('window').width / 4)*3,
    }
}
)
export default props => {
        const StyleButton = [style.button]
        if(props.double)StyleButton.push(style.buttonDouble)
        if(props.triple)StyleButton.push(style.buttonTriple)
        if(props.operation)StyleButton.push(style.operationButton)
     return (
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
                <Text style={StyleButton}>{props.label}</Text>
        </TouchableHighlight>
     )
}