'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var TableCell = function TableCell(props) {
  var origin = props.origin,
      rest = _objectWithoutProperties(props, ['origin']);

  if (origin === 'TableHead') return _react2.default.createElement('th', rest);

  return _react2.default.createElement('td', rest);
};

TableCell.propTypes = {
  origin: _propTypes2.default.string.isRequired
};

exports.default = TableCell;