import React from 'react'
import {
  StyleProp,
  StyleSheet,
  Text,
  TextProps,
  TextStyle
} from 'react-native';

interface Props extends TextProps {
  title?: string | React.ReactNode
  size: 'h1' | 'h2' | 'h3' | 'h4'
  customStyle?: StyleProp<TextStyle>
}

export function Heading({ title, size, customStyle, children, ...rest }: Props) {
  let textStyle: {}
  switch (size) {
    case 'h1':
      textStyle = styles.h1
      break
    case 'h2':
      textStyle = styles.h2
      break
    case 'h3':
      textStyle = styles.h3
      break
    case 'h4':
      textStyle = styles.h4
      break
  }

  const passedStyles = Array.isArray(customStyle) && Object.assign({}, ...customStyle)

  return (
    <Text style={[textStyle, { ...passedStyles }]}>
      {children}
    </Text>
  );
}



const styles = StyleSheet.create({
  h1: {
    color: "#FFF",
    fontSize: 32,
    fontWeight: 'bold'
  },
  h2: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: 'bold'
  },
  h3: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: 'bold'
  },
  h4: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: 'bold'
  },
});

