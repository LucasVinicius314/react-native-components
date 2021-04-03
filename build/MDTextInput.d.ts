import * as React from 'react';
import { TextInputProps } from 'react-native-paper/lib/typescript/components/TextInput/TextInput';
export declare type Mask = 'number' | 'cpf';
export declare type MDInputProps = Omit<TextInputProps & {
    mask?: Mask | RegExp | ((val: string) => string);
}, 'theme'>;
export declare const masks: {
    number: (val: string) => string;
    cpf: (val: string) => string;
};
export declare const MDTextInput: React.FunctionComponent<MDInputProps>;
