import * as React from 'react'

import { TextInput } from 'react-native-paper'
import { TextInputProps } from 'react-native-paper/lib/typescript/components/TextInput/TextInput'

type Mask = 'number' | 'cpf'

type MDInputProps = Omit<
  TextInputProps & {
    mask?: Mask | RegExp | ((val: string) => string)
  },
  'theme'
>

const masks = {
  number: (val: string) => {
    return val.replace(/\D/g, '')
  },
  cpf: (val: string) => {
    val = val.replace(/\D/g, '')
    val = val.replace(/^(\d{3})/, '$1.')
    val = val.replace(/^(\d{3}\.)(\d{3})/, '$1$2.')
    val = val.replace(/^(\d{3}\.\d{3}\.)(\d{3})/, '$1$2-')
    val = val.replace(/^(\d{3}\.\d{3}\.\d{3}-)(\d{2})/, '$1$2')
    return val.replace(/^(.{14})(.*)/, '$1')
  },
}

const MDTextInput: React.FunctionComponent<MDInputProps> = (
  props: MDInputProps
) => {
  const [value, setValue] = React.useState<string>(props.value || '')
  const updateValue = (val: string) => {
    if (props.mask) {
      if (typeof props.mask === 'string') {
        val = masks[props.mask](val)
      } else if (typeof props.mask === 'function') {
        val = props.mask(val)
      } else if (props.mask instanceof RegExp) {
        const match = val.match(props.mask)
        if (match && match[0]) {
          val = match[0]
        } else {
          val = ''
        }
      }
    }
    setValue(val)
    if (props.onChangeText) {
      props.onChangeText(val)
    }
  }
  return <TextInput {...props} value={value} onChangeText={updateValue} />
}

export { MDTextInput }
