import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MaskedTextInput, MaskedTextInputProps } from 'react-native-mask-text';
import { HelperText, TextInput, TextInputProps } from 'react-native-paper';

interface Props extends MaskedTextInputProps {
  text: string
  error?: boolean
  helperText?: string
}

export const MoneyInputText = ({ text, error, helperText = '', ...rest }: Props) => {
  return (
    <>
      <Text style={styles.text}>{text}</Text>
      <TextInput
        error={error}
        style={styles.input}
        textColor='black'
        render={(props) =>
          <MaskedTextInput
            {...props}
            {...rest}
            type="currency"
            options={{
              prefix: 'R$ ',
              decimalSeparator: ',',
              groupSeparator: '.',
              precision: 2,
            }}
            placeholderTextColor='blue'
            keyboardType="numeric"
          />
        }
      />
      {
        helperText !== '' &&
        <HelperText type='error'>
          {helperText}
        </HelperText>
      }
    </>
  )
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    fontSize: 18
  },
  text: {
    fontWeight: 'bold',
    color: '#FFF',
    paddingBottom: 8
  }
})