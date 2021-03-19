"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MDTextInput = void 0;
const React = require("react");
const react_native_paper_1 = require("react-native-paper");
const masks = {
    number: (val) => {
        return val.replace(/\D/g, '');
    },
    cpf: (val) => {
        val = val.replace(/\D/g, '');
        val = val.replace(/^(\d{3})/, '$1.');
        val = val.replace(/^(\d{3}\.)(\d{3})/, '$1$2.');
        val = val.replace(/^(\d{3}\.\d{3}\.)(\d{3})/, '$1$2-');
        val = val.replace(/^(\d{3}\.\d{3}\.\d{3}-)(\d{2})/, '$1$2');
        return val.replace(/^(.{14})(.*)/, '$1');
    },
};
const MDTextInput = (props) => {
    const [value, setValue] = React.useState(props.value || '');
    const updateValue = (val) => {
        if (props.mask) {
            if (typeof props.mask === 'string') {
                val = masks[props.mask](val);
            }
            else if (typeof props.mask === 'function') {
                val = props.mask(val);
            }
            else if (props.mask instanceof RegExp) {
                const match = val.match(props.mask);
                if (match && match[0]) {
                    val = match[0];
                }
                else {
                    val = '';
                }
            }
        }
        setValue(val);
        if (props.onChangeText) {
            props.onChangeText(val);
        }
    };
    return <react_native_paper_1.TextInput {...props} value={value} onChangeText={updateValue}/>;
};
exports.MDTextInput = MDTextInput;
//# sourceMappingURL=MDTextInput.js.map