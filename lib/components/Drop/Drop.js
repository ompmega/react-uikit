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

var _DropContainer = require('./DropContainer');

var _DropContainer2 = _interopRequireDefault(_DropContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Drop = function (_React$PureComponent) {
  _inherits(Drop, _React$PureComponent);

  function Drop() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Drop);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Drop.__proto__ || Object.getPrototypeOf(Drop)).call.apply(_ref, [this].concat(args))), _this), _this._events = {
      'toggle': function toggle() {
        return _this.props.onToggle();
      },
      'stack': function stack() {
        return _this.props.onStack();
      },
      'beforeshow': function beforeshow() {
        return _this.props.onBeforeShow();
      },
      'show': function show() {
        return _this.props.onShow();
      },
      'shown': function shown() {
        return _this.props.onShown();
      },
      'beforehide': function beforehide() {
        return _this.props.onBeforeHide();
      },
      'hide': function hide() {
        return _this.props.onHide();
      },
      'hidden': function hidden() {
        return _this.props.onHidden();
      }
    }, _this.setRef = function (ref) {
      return _this.node = ref;
    }, _this.getOptions = function () {
      var _this$props = _this.props,
          mode = _this$props.mode,
          position = _this$props.position,
          offset = _this$props.offset,
          delayHide = _this$props.delayHide,
          duration = _this$props.duration;


      return {
        mode: mode,
        pos: position,
        offset: offset,
        'delay-hide': delayHide,
        duration: duration
      };
    }, _this.registerComponent = function () {
      _this.component = _uikit2.default.drop(_this.node, _this.getOptions());
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Drop, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.registerComponent();

      // Bind UIkit events to this component
      Object.keys(this._events).forEach(function (eventName) {
        _uikit2.default.util.on(_this2.node, eventName, _this2._events[eventName]);
      });
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
          component = _props.component,
          mode = _props.mode,
          position = _props.position,
          duration = _props.duration,
          delayHide = _props.delayHide,
          offset = _props.offset,
          navbar = _props.navbar,
          rest = _objectWithoutProperties(_props, ['className', 'component', 'mode', 'position', 'duration', 'delayHide', 'offset', 'navbar']);

      var className = (0, _classnames2.default)(customClassName, {
        'uk-navbar-dropdown': navbar
      });

      return _react2.default.createElement(component, _extends({
        ref: this.setRef,
        className: className
      }, rest));
    }
  }]);

  return Drop;
}(_react2.default.PureComponent);

// Sub-components


Drop.propTypes = {
  mode: _propTypes2.default.oneOf(['click', 'hover']),
  position: _propTypes2.default.oneOf(['bottom-left', 'bottom-center', 'bottom-right', 'bottom-justify', 'top-left', 'top-center', 'top-right', 'top-justify', 'left-top', 'left-center', 'left-bottom', 'right-top', 'right-center', 'right-bottom']),
  offset: _propTypes2.default.number,
  delayHide: _propTypes2.default.number,
  duration: _propTypes2.default.number,
  navbar: _propTypes2.default.bool
};
Drop.defaultProps = {
  component: 'div',
  mode: 'hover',
  position: 'bottom-left',
  offset: 0,
  delayHide: 800,
  duration: 200,
  navbar: false,
  onBeforeShow: function onBeforeShow(f) {
    return f;
  },
  onShow: function onShow(f) {
    return f;
  },
  onShown: function onShown(f) {
    return f;
  },
  onBeforeHide: function onBeforeHide(f) {
    return f;
  },
  onHide: function onHide(f) {
    return f;
  },
  onHidden: function onHidden(f) {
    return f;
  },
  onToggle: function onToggle(f) {
    return f;
  },
  onStack: function onStack(f) {
    return f;
  }
};
Drop.Container = _DropContainer2.default;

exports.default = Drop;