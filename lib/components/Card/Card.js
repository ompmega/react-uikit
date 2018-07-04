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

var _CardTitle = require('./CardTitle');

var _CardTitle2 = _interopRequireDefault(_CardTitle);

var _CardBody = require('./CardBody');

var _CardBody2 = _interopRequireDefault(_CardBody);

var _CardHeader = require('./CardHeader');

var _CardHeader2 = _interopRequireDefault(_CardHeader);

var _CardFooter = require('./CardFooter');

var _CardFooter2 = _interopRequireDefault(_CardFooter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Card = function Card(props) {
  var _classNames;

  var customClassName = props.className,
      component = props.component,
      variant = props.variant,
      body = props.body,
      rest = _objectWithoutProperties(props, ['className', 'component', 'variant', 'body']);

  var className = (0, _classnames2.default)(customClassName, 'uk-card', (_classNames = {}, _defineProperty(_classNames, 'uk-card-' + variant, !!variant), _defineProperty(_classNames, 'uk-card-body', body), _classNames));

  return _react2.default.createElement(component, _extends({
    className: className
  }, rest));
};

Card.propTypes = {
  variant: _propTypes2.default.oneOf(['default', 'primary', 'secondary']),
  body: _propTypes2.default.bool
};

Card.defaultProps = {
  component: 'div',
  variant: 'default',
  body: false

  // Sub-components
};Card.Title = _CardTitle2.default;
Card.Body = _CardBody2.default;
Card.Header = _CardHeader2.default;
Card.Footer = _CardFooter2.default;

exports.default = Card;