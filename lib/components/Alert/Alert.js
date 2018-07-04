'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _uikit = require('uikit');

var _uikit2 = _interopRequireDefault(_uikit);

var _AlertClose = require('./AlertClose');

var _AlertClose2 = _interopRequireDefault(_AlertClose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Alert = function (_React$Component) {
  _inherits(Alert, _React$Component);

  function Alert() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Alert);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Alert.__proto__ || Object.getPrototypeOf(Alert)).call.apply(_ref, [this].concat(args))), _this), _this._events = {
      'beforehide': function beforehide() {
        return _this.props.onBeforeHide();
      },
      'hide': function hide() {
        return _this.props.onHide();
      }
    }, _this.setRef = function (ref) {
      return _this.node = ref;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Alert, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.component = _uikit2.default.alert(this.node);

      // Bind UIkit events to this component
      Object.keys(this._events).map(function (eventName) {
        _uikit2.default.util.on(_this2.node, eventName, _this2._events[eventName]);
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.component.$destroy();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      if (newProps.close) this.component.close();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          customClassName = _props.className,
          component = _props.component,
          closable = _props.closable,
          children = _props.children,
          variant = _props.variant,
          close = _props.close,
          rest = _objectWithoutProperties(_props, ['className', 'component', 'closable', 'children', 'variant', 'close']);

      var className = (0, _classnames2.default)(customClassName, 'uk-alert', _defineProperty({}, 'uk-alert-' + variant, !!variant));

      // Appends close button if `closable` is set.
      var childrenNodes = [];
      _react2.default.Children.forEach(children, function (child) {
        if ((typeof child === 'undefined' ? 'undefined' : _typeof(child)) === 'object' && closable) {
          if (child.type.displayName !== 'AlertClose') childrenNodes.push(child);
        } else {
          childrenNodes.push(child);
        }
      });

      if (closable) {
        childrenNodes = [_react2.default.createElement(_AlertClose2.default, { key: 0 })].concat(_toConsumableArray(childrenNodes));
      }

      return _react2.default.createElement(component, _extends({
        ref: this.setRef,
        className: className
      }, rest), childrenNodes);
    }
  }]);

  return Alert;
}(_react2.default.Component);

// Sub-components


Alert.propTypes = {
  closable: _propTypes2.default.bool,
  variant: _propTypes2.default.oneOf(['primary', 'success', 'warning', 'danger']),
  close: _propTypes2.default.bool
};
Alert.defaultProps = {
  component: 'div',
  closable: false,
  onBeforeHide: function onBeforeHide(f) {
    return f;
  },
  onHide: function onHide(f) {
    return f;
  },
  close: false
};
Alert.Close = _AlertClose2.default;

exports.default = Alert;