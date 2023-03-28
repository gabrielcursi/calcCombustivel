import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
import { Heading } from '../Heading';
import { Button } from '../Button';
import { Paragraph } from '../Paragraph';

interface Props {
  howToUse: number
  gasolina: string
  alcool: string
  onDismiss?: (() => void) | undefined
}

const SwitchText = (howToUse: number) => {
  switch (true) {
    case howToUse < 0.7:
      return (
        <Heading size='h2' customStyle={[{ color: '#37BD52' }]}>Álcool</Heading>
      )
    case howToUse > 0.7:
      return (
        <Heading size='h2' customStyle={[{ color: 'red' }]}>Gasolina</Heading>
      )
  }
}

export const Calculator = ({ howToUse, alcool, gasolina, onDismiss }: Props) => {
  return (

    <ScrollView keyboardShouldPersistTaps='handled' contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} >
      <View style={styles.header}>
        <Image
          source={require('../../assets/gas.png')}
        />
        <Heading size='h2'>
          Compensa usar {SwitchText(howToUse)}
        </Heading>
      </View>

      <View style={styles.body}>
        <Heading size='h3'>
          Com os preços:
        </Heading>
        <Paragraph size='p1r'>
          Álcool {alcool}
        </Paragraph>
        <Paragraph size='p1r'>
          Gasolina {gasolina}
        </Paragraph>
      </View>

      <Button text='Calcular novamente' onPress={onDismiss} />

    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#212121",
    paddingHorizontal: 16,
    flex: 1,
  },
  header: {
    paddingBottom: 8 * 4,
    alignItems: 'center'
  },
  body: {
    paddingBottom: 8 * 3,
    alignItems: 'center'
  }
});