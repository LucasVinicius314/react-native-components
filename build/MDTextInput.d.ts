import * as React from 'react';
import { TextInputProps } from 'react-native-paper/lib/typescript/components/TextInput/TextInput';
declare type Mask = 'number' | 'cpf';
declare type MDInputProps = Omit<TextInputProps & {
    mask?: Mask | RegExp | ((val: string) => string);
}, 'theme'>;
declare const MDTextInput: React.FunctionComponent<MDInputProps>;
export { MDTextInput };
