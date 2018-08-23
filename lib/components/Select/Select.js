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

var _SelectOption = require('./SelectOption');

var _SelectOption2 = _interopRequireDefault(_SelectOption);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Select = function Select(props) {
  var _classNames;

  var customClassName = props.className,
      size = props.size,
      blank = props.blank,
      rest = _objectWithoutProperties(props, ['className', 'size', 'blank']);

  var className = (0, _classnames2.default)(customClassName, 'uk-select', (_classNames = {}, _defineProperty(_classNames, 'uk-form-' + size, !!size), _defineProperty(_classNames, 'uk-form-blank', blank), _classNames));

  return _react2.default.createElement('select', _extends({
    className: className
  }, rest));
};

Select.propTypes = {
  size: _propTypes2.default.oneOf(['large', 'small']),
  blank: _propTypes2.default.bool
};

Select.defaultProps = {
  blank: false

  // Sub-components
};Select.Option = _SelectOption2.default;

exports.default = Select;