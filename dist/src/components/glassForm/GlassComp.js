"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GlassmorphForm = GlassmorphForm;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _index = require("./styles/index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function GlassmorphForm(_ref) {
  var children = _ref.children,
      restProps = _objectWithoutProperties(_ref, ["children"]);

  return /*#__PURE__*/_react.default.createElement(_index.Container, restProps, children);
}

GlassmorphForm.Section = function (_ref2) {
  var children = _ref2.children,
      restProps = _objectWithoutProperties(_ref2, ["children"]);

  return /*#__PURE__*/_react.default.createElement(_index.Section, restProps, children);
};

//# sourceMappingURL=GlassComp.js.map