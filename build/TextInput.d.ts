import * as RN from 'react-native';
import * as React from 'react';
import { TextInputMaskOptionProp } from 'react-native-masked-text/index';
interface UnmaskedTextInputProps extends RN.TextInputProps {
    format: Function;
    onChangeText: (text: string) => void;
}
declare const Unmasked: React.FunctionComponent<UnmaskedTextInputProps>;
interface MaskedTextInputProps extends RN.TextInputProps {
    format: Function;
    onChangeText: (text: string) => void;
    type: 'cel-phone' | 'cnpj' | 'cpf' | 'credit-card' | 'custom' | 'datetime' | 'money' | 'only-numbers' | 'zip-code';
    options: TextInputMaskOptionProp;
}
declare const Masked: React.FunctionComponent<MaskedTextInputProps>;
export { Masked, Unmasked, };
