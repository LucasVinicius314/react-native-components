import {
  StyleSheet,
  TextInput as _TextInput,
} from 'react-native'

import React from 'react'
import { TextInputMask } from 'react-native-masked-text'

function Unmasked({
  value = '',
  secureTextEntry = false,
  keyboardType = 'default',
  style = {},
  onChangeText = () => { },
}) {
  const [val, setVal] = React.useState(value)
  const update = val => {
    setVal(val)
    onChangeText(val)
  }
  return (
    <_TextInput
      value={val}
      onChangeText={update}
      keyboardType={keyboardType}
      style={style}
      secureTextEntry={secureTextEntry}
      render={props => <_TextInput {...props} style={styles.inputText} />}
    />
  )
}

function Masked({
  value = '',
  secureTextEntry = false,
  type,
  keyboardType = 'default',
  options = {},
  style = {},
  onChangeText = () => console.log(123123),
}) {
  const [val, setVal] = React.useState(value)
  const update = val => {
    setVal(val)
    onChangeText(val)
  }
  return (
    <TextInputMask
      type={type}
      value={val}
      onChangeText={update}
      keyboardType={keyboardType}
      style={style}
      secureTextEntry={secureTextEntry}
      options={options}
      render={props => <_TextInput {...props} style={styles.inputText} />}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    marginVertical: 4,
    width: '100%',
  },
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
