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

var _FormFieldset = require('./FormFieldset');

var _FormFieldset2 = _interopRequireDefault(_FormFieldset);

var _FormLegend = require('./FormLegend');

var _FormLegend2 = _interopRequireDefault(_FormLegend);

var _FormControls = require('./FormControls');

var _FormControls2 = _interopRequireDefault(_FormControls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Form = function Form(props) {
  var customClassName = props.className,
      stacked = props.stacked,
      horizontal = props.horizontal,
      rest = _objectWithoutProperties(props, ['className', 'stacked', 'horizontal']);

  var className = (0, _classnames2.default)(customClassName, {
    'uk-form-stacked': stacked,
    'uk-form-horizontal': horizontal
  });

  return _react2.default.createElement('form', _extends({
    className: className
  }, rest));
};

Form.propTypes = {
  onSubmit: _propTypes2.default.any,
  method: _propTypes2.default.oneOf(['get', 'post']),
  action: _propTypes2.default.string,
  stacked: _propTypes2.default.bool,
  horizontal: _propTypes2.default.bool
};

Form.defaultProps = {
  stacked: false,
  horizontal: false

  // Sub-components
};Form.Fieldset = _FormFieldset2.default;
Form.Legend = _FormLegend2.default;
Form.Controls = _FormControls2.default;

exports.default = Form;