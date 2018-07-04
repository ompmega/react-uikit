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

var _TableCaption = require('./TableCaption');

var _TableCaption2 = _interopRequireDefault(_TableCaption);

var _TableHead = require('./TableHead');

var _TableHead2 = _interopRequireDefault(_TableHead);

var _TableBody = require('./TableBody');

var _TableBody2 = _interopRequireDefault(_TableBody);

var _TableFooter = require('./TableFooter');

var _TableFooter2 = _interopRequireDefault(_TableFooter);

var _TableRow = require('./TableRow');

var _TableRow2 = _interopRequireDefault(_TableRow);

var _TableCell = require('./TableCell');

var _TableCell2 = _interopRequireDefault(_TableCell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Table = function Table(props) {
  var customClassName = props.className,
      divider = props.divider,
      striped = props.striped,
      hover = props.hover,
      size = props.size,
      rest = _objectWithoutProperties(props, ['className', 'divider', 'striped', 'hover', 'size']);

  var className = (0, _classnames2.default)(customClassName, 'uk-table', _defineProperty({
    'uk-table-divider': divider,
    'uk-table-striped': striped,
    'uk-table-hover': hover
  }, 'uk-table-' + size, size && size !== 'default'));

  return _react2.default.createElement('table', _extends({
    className: className
  }, rest));
};

Table.propTypes = {
  divider: _propTypes2.default.bool,
  striped: _propTypes2.default.bool,
  hover: _propTypes2.default.bool,
  size: _propTypes2.default.oneOf(['small', 'default', 'large'])
};

Table.defaultProps = {
  divider: false,
  striped: false,
  hover: false,
  size: 'default'

  // Sub-components
};Table.Caption = _TableCaption2.default;
Table.Head = _TableHead2.default;
Table.Body = _TableBody2.default;
Table.Footer = _TableFooter2.default;
Table.Row = _TableRow2.default;
Table.Cell = _TableCell2.default;

exports.default = Table;