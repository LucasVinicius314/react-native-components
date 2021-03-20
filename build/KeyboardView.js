"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyboardView = void 0;
const React = require("react");
const react_native_1 = require("react-native");
const KeyboardView = (props) => {
    const [keyboard, setKeyboard] = React.useState(false);
    const [padding, setPadding] = React.useState(0);
    React.useEffect(() => {
        react_native_1.Keyboard.addListener('keyboardDidShow', (e) => {
            setKeyboard(true);
            setPadding(e.endCoordinates.height);
        });
        react_native_1.Keyboard.addListener('keyboardDidHide', () => {
            setKeyboard(false);
            setPadding(0);
        });
        return () => {
            react_native_1.Keyboard.removeAllListeners('keyboardDidShow');
            react_native_1.Keyboard.removeAllListeners('keyboardDidHide');
        };
    }, []);
    return (<react_native_1.View {...props} style={[props.style, { paddingBottom: keyboard ? padding : 0 }]}/>);
};
exports.KeyboardView = KeyboardView;
//# sourceMappingURL=KeyboardView.js.map