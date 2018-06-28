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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Button = function Button(props) {
  var _classNames;

  var customClassName = props.className,
      variant = props.variant,
      small = props.small,
      large = props.large,
      href = props.href,
      type = props.type,
      block = props.block,
      rest = _objectWithoutProperties(props, ['className', 'variant', 'small', 'large', 'href', 'type', 'block']);

  var className = (0, _classnames2.default)(customClassName, 'uk-button', (_classNames = {}, _defineProperty(_classNames, 'uk-button-' + variant, variant), _defineProperty(_classNames, 'uk-button-small', small), _defineProperty(_classNames, 'uk-button-large', large), _defineProperty(_classNames, 'uk-width-1-1', block), _classNames));

  return href ? _react2.default.createElement('a', _extends({
    href: href,
    className: className
  }, rest)) : _react2.default.createElement('button', _extends({
    type: type || 'button',
    className: className
  }, rest));
};

Button.propTypes = {
  variant: _propTypes2.default.oneOf(['default', 'primary', 'secondary', 'danger', 'text', 'link']),
  small: _propTypes2.default.bool,
  large: _propTypes2.default.bool,
  block: _propTypes2.default.bool
};

Button.defaultProps = {
  variant: 'default',
  small: false,
  large: false,
  block: false
};

exports.default = Button;