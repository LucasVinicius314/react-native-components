import * as React from 'react'

import { StatusBar as _StatusBar } from 'react-native'
import { useIsFocused } from '@react-navigation/native'

const StatusBar = props => useIsFocused() ? <_StatusBar {...props} /> : null

export { StatusBar }