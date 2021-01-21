import * as RN from 'react-native'
import * as React from 'react'

import { useIsFocused } from '@react-navigation/native'

const CStatusBar: React.FunctionComponent<RN.StatusBarProps> = (props: RN.StatusBarProps) => {
  return (
    useIsFocused()
      ? <RN.StatusBar {...props} />
      : null
  )
}

export { CStatusBar }
