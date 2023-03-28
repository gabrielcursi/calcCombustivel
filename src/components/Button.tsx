import React from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ButtonProps,
  TouchableOpacityProps
} from 'react-native';

interface Props extends TouchableOpacityProps {
  text: string
}

export function Button({ text, ...rest }: Props) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: '#FF502F' }]}
      {...rest}
    >
      <Text style={styles.buttonTxt}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    padding: 8,
    borderRadius: 5,
    alignItems: 'center'
  },
  buttonTxt: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold'
  },
});

