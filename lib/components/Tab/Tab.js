'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _uikit = require('uikit');

var _uikit2 = _interopRequireDefault(_uikit);

var _TabItem = require('./TabItem');

var _TabItem2 = _interopRequireDefault(_TabItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tab = function (_React$Component) {
  _inherits(Tab, _React$Component);

  function Tab() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Tab);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tab.__proto__ || Object.getPrototypeOf(Tab)).call.apply(_ref, [this].concat(args))), _this), _this.setRef = function (ref) {
      return _this.node = ref;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Tab, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.component = _uikit2.default.tab(this.node);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.component.$destroy();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          customClassName = _props.className,
          bottom = _props.bottom,
          rest = _objectWithoutProperties(_props, ['className', 'bottom']);

      var className = (0, _classnames2.default)(customClassName, {
        'uk-tab-bottom': bottom
      });

      return _react2.default.createElement(this.props.component, _extends({
        ref: this.setRef,
        className: className
      }, rest), this.props.children);
    }
  }]);

  return Tab;
}(_react2.default.Component);

// Sub-components


Tab.propTypes = {
  bottom: _propTypes2.default.bool
};
Tab.defaultProps = {
  component: 'ul',
  bottom: false
};
Tab.Item = _TabItem2.default;

exports.default = Tab;