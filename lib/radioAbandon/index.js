var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import React, { PureComponent } from 'react';
import Checkbox from 'antd/lib/checkbox';
import 'antd/lib/checkbox/style/css';
import './index.less';
var CheckboxGroup = Checkbox.Group;
var RadioAbandon = /** @class */ (function (_super) {
    __extends(RadioAbandon, _super);
    function RadioAbandon(props) {
        var _this = _super.call(this, props) || this;
        _this.onChange = function (value) {
            var lastValue = value.pop();
            _this.setState({
                value: lastValue,
            });
            if (_this.props.onChange) {
                _this.props.onChange(lastValue);
            }
        };
        _this.state = {
            value: '',
        };
        return _this;
    }
    RadioAbandon.prototype.componentDidMount = function () {
        this.setState({
            value: this.props.value,
        });
    };
    RadioAbandon.prototype.render = function () {
        var _a = this.props, onChange = _a.onChange, value = _a.value, className = _a.className, props = __rest(_a, ["onChange", "value", "className"]);
        var valueOwn = [this.props.value];
        return (React.createElement("div", { className: 'antd-radio-abandon' },
            React.createElement(CheckboxGroup, __assign({ className: className, value: valueOwn, onChange: this.onChange }, props))));
    };
    return RadioAbandon;
}(PureComponent));
export default RadioAbandon;
