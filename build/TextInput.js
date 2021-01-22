"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Unmasked = exports.Masked = void 0;
const MaskedText = require("react-native-masked-text");
const React = require("react");
const react_native_1 = require("react-native");
const Unmasked = (props) => {
    const format = (text) => text;
    const [, setVal] = React.useState(props.value);
    const update = (text) => {
        var _a;
        text = ((_a = props.format) !== null && _a !== void 0 ? _a : format)(text);
        setVal(text);
        props.onChangeText(text);
    };
    return (<react_native_1.TextInput value={props.value} onChangeText={update} keyboardType={props.keyboardType} style={props.style} secureTextEntry={props.secureTextEntry} 
    // @ts-ignore
    render={(props) => <react_native_1.TextInput {...props} style={styles.inputText}/>}/>);
};
exports.Unmasked = Unmasked;
const Masked = (props) => {
    const format = (text) => text;
    const [, setVal] = React.useState(props.value);
    const update = (text) => {
        var _a;
        text = ((_a = props.format) !== null && _a !== void 0 ? _a : format)(text);
        setVal(text);
        props.onChangeText(text);
    };
    return (<MaskedText.TextInputMask type={props.type} value={props.value} onChangeText={update} keyboardType={props.keyboardType} style={props.style} secureTextEntry={props.secureTextEntry} options={props.options} 
    // @ts-ignore
    render={(props) => <react_native_1.TextInput {...props} style={styles.inputText}/>}/>);
};
exports.Masked = Masked;
const styles = react_native_1.StyleSheet.create({
    inputText: {
        fontSize: 20,
        padding: 6,
        marginTop: 16,
    },
});
//# sourceMappingURL=TextInput.js.map