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

var Flex = function Flex(props) {
  var component = props.component,
      customClassName = props.className,
      inline = props.inline,
      align = props.align,
      rest = _objectWithoutProperties(props, ['component', 'className', 'inline', 'align']);

  var className = (0, _classnames2.default)(customClassName, _defineProperty({
    'uk-flex': !inline,
    'uk-flex-inline': inline
  }, 'uk-flex-' + align, !!align));

  return _react2.default.createElement(component, _extends({
    className: className
  }, rest));
};

Flex.propTypes = {
  inline: _propTypes2.default.bool,
  align: _propTypes2.default.oneOf(['left', 'center', 'right', 'between', 'around', 'stretch', 'top', 'middle', 'bottom'])
};

Flex.defaultProps = {
  component: 'div',
  inline: false
};

exports.default = Flex;