"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MDTextInput = exports.masks = void 0;
const React = require("react");
const react_native_paper_1 = require("react-native-paper");
exports.masks = {
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
exports.MDTextInput = React.forwardRef((props, ref) => {
    const updateValue = (val) => {
        if (props.mask) {
            if (typeof props.mask === 'string') {
                val = exports.masks[props.mask](val);
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
        if (props.onChangeText) {
            props.onChangeText(val);
        }
    };
    return (<react_native_paper_1.TextInput {...props} value={props.value} onChangeText={updateValue} ref={ref}/>);
});
//# sourceMappingURL=MDTextInput.js.map