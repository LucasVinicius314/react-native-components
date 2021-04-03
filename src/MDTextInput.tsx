import * as React from 'react'

import { TextInput } from 'react-native-paper'
import { TextInputProps } from 'react-native-paper/lib/typescript/components/TextInput/TextInput'

export type Mask = 'number' | 'cpf'

export type MDInputProps = Omit<
  TextInputProps & {
    mask?: Mask | RegExp | ((val: string) => string)
  },
  'theme'
>

export const masks = {
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

export const MDTextInput: React.FunctionComponent<MDInputProps> = React.forwardRef(
  (props: MDInputProps, ref) => {
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
      if (props.onChangeText) {
        props.onChangeText(val)
      }
    }
    return (
      <TextInput
        {...props}
        value={props.value}
        onChangeText={updateValue}
        ref={ref}
      />
    )
  }
)
