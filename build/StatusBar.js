"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CStatusBar = void 0;
const RN = require("react-native");
const React = require("react");
const native_1 = require("@react-navigation/native");
const CStatusBar = (props) => {
    return (native_1.useIsFocused()
        ? <RN.StatusBar {...props}/>
        : null);
};
exports.CStatusBar = CStatusBar;
//# sourceMappingURL=StatusBar.js.map