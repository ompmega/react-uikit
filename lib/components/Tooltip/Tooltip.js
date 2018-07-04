'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _uikit = require('uikit');

var _uikit2 = _interopRequireDefault(_uikit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tooltip = function (_React$Component) {
  _inherits(Tooltip, _React$Component);

  function Tooltip() {
    _classCallCheck(this, Tooltip);

    return _possibleConstructorReturn(this, (Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).apply(this, arguments));
  }

  _createClass(Tooltip, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          pos = _props.position,
          duration = _props.duration,
          delay = _props.delay,
          animation = _props.animation;


      var options = _extends({ pos: pos, duration: duration, delay: delay, animation: animation }, this.props.options);

      this.component = _uikit2.default.tooltip(_reactDom2.default.findDOMNode(this), options);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.component.$destroy();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          title = _props2.title,
          children = _props2.children,
          position = _props2.position,
          options = _props2.options,
          duration = _props2.duration,
          animation = _props2.animation,
          rest = _objectWithoutProperties(_props2, ['title', 'children', 'position', 'options', 'duration', 'animation']);

      return _react2.default.cloneElement(children, _extends({
        title: title
      }, rest));
    }
  }]);

  return Tooltip;
}(_react2.default.Component);

Tooltip.propTypes = {
  title: _propTypes2.default.string.isRequired,
  options: _propTypes2.default.object,
  children: _propTypes2.default.node.isRequired,
  position: _propTypes2.default.oneOf(['top', 'top-left', 'top-right', 'bottom', 'bottom-left', 'bottom-right', 'left', 'right']),
  duration: _propTypes2.default.number,
  delay: _propTypes2.default.number,
  animation: _propTypes2.default.string
};
Tooltip.defaultProps = {
  options: {},
  position: 'top',
  duration: 100,
  animation: 'uk-animation-scale-up'
  /*onBeforeShow: f=>f,
  onShow: f=>f,
  onShown: f=>f,
  onBeforeHide: f=>f,
  onHide: f=>f,
  onHidden: f=>f,*/


  /*_events = {
    'beforeshow': () => this.props.onBeforeShow(),
    'show': () => this.props.onShow(),
    'shown': () => this.props.onShown(),
    'beforehide': () => this.props.onBeforeHide(),
    'hide': () => this.props.onHide(),
    'hidden': () => this.props.onHidden(),
  }*/

};
exports.default = Tooltip;