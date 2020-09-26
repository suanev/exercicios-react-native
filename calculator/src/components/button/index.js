import React from 'react';
import { StyleSheet, Dimensions, TouchableHighlight, Text } from 'react-native';

export default Button = ({onClick, label, double, triple, operation}) => {
  const stylesButton = [styles.button];

  if(double) stylesButton.push(styles.buttonDouble);
  if(triple) stylesButton.push(styles.buttonTriple);
  if(operation) stylesButton.push(styles.operationButton);

  return (
    <TouchableHighlight onPress={() => onClick(label)}>
      <Text style={stylesButton}>{label}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    fontSize: 40,
    padding: 20,
    backgroundColor: "#CC99FF",
    textAlign: "center",
    borderWidth: 1,
    color: "#FFF",
    borderColor: "#FFF",
    width: Dimensions.get('window').width / 4,
    height: Dimensions.get('window').width / 4,
  },
  operationButton: {
    backgroundColor: "#B266FF"
  },
  buttonDouble: {
    width: (Dimensions.get('window').width / 4) * 2,
  },
  buttonTriple: {
    width: (Dimensions.get('window').width / 4) * 3,
  }
});