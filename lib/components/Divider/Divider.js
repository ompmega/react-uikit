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

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Divider = function Divider(props) {
  var customClassName = props.className,
      component = props.component,
      icon = props.icon,
      small = props.small,
      rest = _objectWithoutProperties(props, ['className', 'component', 'icon', 'small']);

  var className = (0, _classnames2.default)(customClassName, {
    'uk-divider-icon': icon,
    'uk-divider-small': small
  });

  return _react2.default.createElement(component, _extends({
    className: className
  }, rest));
};

Divider.propTypes = {
  icon: _propTypes2.default.bool,
  small: _propTypes2.default.bool
};

Divider.defaultProps = {
  component: 'hr',
  icon: false,
  small: false
};

exports.default = Divider;