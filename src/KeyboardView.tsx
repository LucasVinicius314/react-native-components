import * as React from 'react'

import { Keyboard, View, ViewProps } from 'react-native'

const KeyboardView = (props: ViewProps & { children: React.ReactNode }) => {
  const [keyboard, setKeyboard] = React.useState<boolean>(false)
  const [padding, setPadding] = React.useState<number>(0)

  React.useEffect(() => {
    Keyboard.addListener('keyboardDidShow', (e) => {
      setKeyboard(true)
      setPadding(e.endCoordinates.height)
    })
    Keyboard.addListener('keyboardDidHide', () => {
      setKeyboard(false)
      setPadding(0)
    })
    return () => {
      Keyboard.removeAllListeners('keyboardDidShow')
      Keyboard.removeAllListeners('keyboardDidHide')
    }
  }, [])

  return (
    <View
      {...props}
      style={[props.style, { paddingBottom: keyboard ? padding : 0 }]}
    />
  )
}

export { KeyboardView }
