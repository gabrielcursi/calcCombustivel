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
  size: 'p1r' | 'p1b' | 'p2r' | 'p2b'
  customStyle?: StyleProp<TextStyle>
}

export function Paragraph({ title, size, customStyle, children, ...rest }: Props) {
  let textStyle: {}
  switch (size) {
    case 'p1r':
      textStyle = styles.p1r
      break
    case 'p1b':
      textStyle = styles.p1b
      break
    case 'p2r':
      textStyle = styles.p2r
      break
    case 'p2b':
      textStyle = styles.p2b
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
  p1r: {
    color: "#FFF",
    fontSize: 18,
  },
  p1b: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: 'bold'
  },
  p2r: {
    color: "#FFF",
    fontSize: 16,
  },
  p2b: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: 'bold'
  },
});

