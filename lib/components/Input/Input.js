'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _InputLabel = require('./InputLabel');

var _InputLabel2 = _interopRequireDefault(_InputLabel);

var _InputCheckbox = require('./InputCheckbox');

var _InputCheckbox2 = _interopRequireDefault(_InputCheckbox);

var _InputRadio = require('./InputRadio');

var _InputRadio2 = _interopRequireDefault(_InputRadio);

var _InputTextarea = require('./InputTextarea');

var _InputTextarea2 = _interopRequireDefault(_InputTextarea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Input = function Input(props) {
  var customClassName = props.className,
      size = props.size,
      rest = _objectWithoutProperties(props, ['className', 'size']);

  var className = (0, _classnames2.default)(customClassName, 'uk-input', _defineProperty({}, 'uk-form-' + size, !!size));

  return _react2.default.createElement('input', _extends({
    className: className
  }, rest));
};

Input.propTypes = {
  placeholder: _propTypes2.default.string,
  value: _propTypes2.default.any,
  disabled: _propTypes2.default.bool,
  size: _propTypes2.default.oneOf(['small', 'large'])
};

Input.defaultProps = {
  disabled: false

  // Sub-components
};Input.Label = _InputLabel2.default;
Input.Checkbox = _InputCheckbox2.default;
Input.Radio = _InputRadio2.default;
Input.Textarea = _InputTextarea2.default;

exports.default = Input;