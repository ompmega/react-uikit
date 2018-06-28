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

var Card = function Card(props) {
  var customClassName = props.className,
      title = props.title,
      variant = props.variant,
      rest = _objectWithoutProperties(props, ['className', 'title', 'variant']);

  var className = (0, _classnames2.default)(customClassName, _defineProperty({
    'uk-card': !title,
    'uk-card-body': !title,
    'uk-card-title': title
  }, 'uk-card-' + variant, !!variant));

  if (title) return _react2.default.createElement('h3', _extends({
    className: className
  }, rest));

  return _react2.default.createElement('div', _extends({
    className: className
  }, rest));
};

Card.propTypes = {
  title: _propTypes2.default.bool,
  variant: _propTypes2.default.oneOf(['default'])
};

exports.default = Card;