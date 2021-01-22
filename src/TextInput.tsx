import * as MaskedText from 'react-native-masked-text'
import * as RN from 'react-native'
import * as React from 'react'

import {
  StyleSheet,
  TextInput as _TextInput,
} from 'react-native'

import { TextInputMaskOptionProp } from 'react-native-masked-text/index'

interface UnmaskedTextInputProps extends RN.TextInputProps {
  format?: (text: string) => string
  onChangeText: (text: string) => void
}

const Unmasked: React.FunctionComponent<UnmaskedTextInputProps> = (props: UnmaskedTextInputProps) => {
  const format: MaskedTextInputProps['format'] = (text: string) => text
  const [, setVal] = React.useState(props.value)
  const update: (text: string) => void = (text: string) => {
    text = (props.format ?? format)(text)
    setVal(text)
    props.onChangeText(text)
  }
  return (
    <_TextInput
      value={props.value}
      onChangeText={update}
      keyboardType={props.keyboardType}
      style={props.style}
      secureTextEntry={props.secureTextEntry}
      // @ts-ignore
      render={(props: RN.TextInputProps) => <_TextInput {...props} style={styles.inputText} />}
    />
  )
}

interface MaskedTextInputProps extends RN.TextInputProps {
  format?: (text: string) => string
  onChangeText: (text: string) => void
  type: 'cel-phone' | 'cnpj' | 'cpf' | 'credit-card' | 'custom' | 'datetime' | 'money' | 'only-numbers' | 'zip-code'
  options: TextInputMaskOptionProp
}

const Masked: React.FunctionComponent<MaskedTextInputProps> = (props: MaskedTextInputProps) => {
  const format: MaskedTextInputProps['format'] = (text: string) => text
  const [, setVal] = React.useState(props.value)
  const update: (text: string) => void = (text: string) => {
    text = (props.format ?? format)(text)
    setVal(text)
    props.onChangeText(text)
  }
  return (
    <MaskedText.TextInputMask
      type={props.type}
      value={props.value}
      onChangeText={update}
      keyboardType={props.keyboardType}
      style={props.style}
      secureTextEntry={props.secureTextEntry}
      options={props.options}
      // @ts-ignore
      render={(props: string) => <_TextInput {...props} style={styles.inputText} />}
    />
  )
}

const styles = StyleSheet.create({
  inputText: {
    fontSize: 20,
    padding: 6,
    marginTop: 16,
  },
})

export {
  Masked,
  Unmasked,
}
