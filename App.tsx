import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Image,
  StyleSheet,
  View,
  Keyboard,
  ScrollView,
} from 'react-native';
import { Button } from './src/components/Button';
import { MoneyInputText } from './src/components/InputText';
import { Heading } from './src/components/Heading';
import { Modal } from './src/components/Modals';
import { Calculator } from './src/components/Modals/ModalCalculator';

function App(): JSX.Element {

  const [alcool, setAlcool] = useState<string>('0')
  const [gasolina, setGasolina] = useState<string>('0')
  const [mask, setMask] = useState({
    alcool: '',
    gasolina: ''
  })
  const [error, setError] = useState('')
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    if (alcool === '0') {
      setError('errorAlcool')
      return
    }
    else if (gasolina === '0') {
      setError('errorGasolina')
      return
    }
    setError('')
    setVisible(true);
    Keyboard.dismiss()

  }
  const hideModal = () => {
    setVisible(false);
    setError('')
    setAlcool('0')
    setGasolina('0')
  }

  return (

    <SafeAreaView style={styles.container}>
      <Modal visible={visible} onDismiss={hideModal}>
        <Calculator howToUse={Number(alcool) / Number(gasolina)} alcool={mask.alcool} gasolina={mask.gasolina} onDismiss={hideModal} />

      </Modal>

      <ScrollView keyboardShouldPersistTaps='handled' contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} >
        <View style={styles.header}>
          <Image
            source={require('./src/assets/logo.png')}
          />
          <Heading size='h2' customStyle={{ paddingTop: 8 * 2 }}  >
            Qual melhor opção?
          </Heading>
        </View>

        <View>

          <View style={{ paddingBottom: 8 * 2 }}>

            <MoneyInputText
              helperText={error === 'errorAlcool' ? 'Valor precisa ser maior que 0' : ''}
              error={error === 'errorAlcool'}
              value={alcool}
              onChangeText={(text, rawText) => {
                setError('')
                setMask({
                  ...mask,
                  alcool: text
                })
                setAlcool(rawText)
              }}
              text='Álcool (preço por litro):'
            />
          </View>

          <View style={{ paddingBottom: 8 * 2 }}>
            <MoneyInputText
              value={gasolina}

              helperText={error === 'errorGasolina' ? 'Valor precisa ser maior que 0' : ''}
              error={error === 'errorGasolina'}
              onChangeText={(text, rawText) => {
                setGasolina(rawText)
                setMask({
                  ...mask,
                  gasolina: text
                })
              }}
              text='Gasolina (preço por litro):'
            />
          </View>

          <Button text='Calcular' onPress={showModal} />
        </View>
      </ScrollView>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#212121",
    paddingHorizontal: 16,
    flex: 1,
  },
  header: {
    paddingBottom: 8 * 9,
    alignItems: 'center'
  },
});

export default App;
