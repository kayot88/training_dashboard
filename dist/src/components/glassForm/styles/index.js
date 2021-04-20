"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Square5 = exports.Square4 = exports.Square3 = exports.Square2 = exports.Square1 = exports.Forget = exports.StyledLink = exports.Button = exports.Input = exports.FeatureContainer = exports.Color3 = exports.Color2 = exports.Color = exports.Section = exports.FormTitle = exports.Container = exports.FormContainer = void 0;

var _reactRouterDom = require("react-router-dom");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19;

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FormContainer = _styledComponents.default.form(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: left;\n  width: 300px;\n  min-height: 400px;\n"])));

exports.FormContainer = FormContainer;

var Container = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([""])));

exports.Container = Container;

var FormTitle = _styledComponents.default.h2(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  position: relative;\n  color: #fff;\n  font-weight: 600;\n  width: 100%;\n  letter-spacing: 1px;\n  font-size: 24px;\n  margin-bottom: 40px;\n  &:before {\n    position: absolute;\n    content: \"\";\n    left: 0;\n    bottom: -10px;\n    width: 80px;\n    height: 4px;\n    background: #fff;\n  }\n"])));

exports.FormTitle = FormTitle;

var Section = _styledComponents.default.section(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  background: rgb(2, 0, 36);\n  overflow: hidden;\n  background: linear-gradient(to bottom, #f1f4f9, #dff1ff);\n"])));

exports.Section = Section;

var Color = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: -350px;\n  width: 800px;\n  height: 800px;\n  background: #ff359b;\n  filter: blur(250px);\n"])));

exports.Color = Color;

var Color2 = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  position: absolute;\n  bottom: 50px;\n  left: 300px;\n  width: 500px;\n  height: 500px;\n  background: #fffd87;\n  filter: blur(250px);\n"])));

exports.Color2 = Color2;

var Color3 = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  position: absolute;\n  bottom: -150px;\n  width: 500px;\n  height: 700px;\n  background: #00d2ff;\n  filter: blur(250px);\n"])));

exports.Color3 = Color3;

var FeatureContainer = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  position: relative;\n  min-width: 400px;\n  background-color: rgba(255, 255, 255, 0.01);\n  border-radius: 10px;\n  backdrop-filter: blur(5px);\n  box-shadow: 0px 25px 45px rgba(0, 0, 0, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  border-right: 1px solid rgba(255, 255, 255, 0.2);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  z-index: 2;\n  /* background: ; */\n"])));

exports.FeatureContainer = FeatureContainer;

var Input = _styledComponents.default.input(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  margin-top: 20px;\n  width: 100%;\n  border-radius: 35px;\n  background: rgba(255, 255, 255, 0.2);\n  border: none;\n  outline: none;\n  padding: 10px 20px;\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  border-right: 1px solid rgba(255, 255, 255, 0.2);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  font-size: 16px;\n  letter-spacing: 1px;\n  color: #fff;\n  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.05);\n"])));

exports.Input = Input;

var Button = _styledComponents.default.input(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  margin-top: 20px;\n  transition:  transform 1s;\n  &:hover {\n    border: 1px solid rgba(255, 255, 255, 0.5);\n    color: rgba(255, 255, 255, 0.5);\n    background: #666;\n    transform: scale(1.1);\n  }\n  cursor: pointer;\n  font-weight: 600;\n  margin-bottom: 20px;\n  max-width: 100px;\n  width: 100%;\n  border-radius: 35px;\n  background: rgba(255, 255, 255, 0.2);\n  border: none;\n  outline: none;\n  padding: 10px 20px;\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  border-right: 1px solid rgba(255, 255, 255, 0.2);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  font-size: 16px;\n  letter-spacing: 1px;\n  color: #666;\n  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.05);\n"])));

exports.Button = Button;

var StyledLink = _styledComponents.default.a(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  font-weight: 600;\n  color: #333;\n"])));

exports.StyledLink = StyledLink;

var Forget = _styledComponents.default.p(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  color: #fff;\n  margin-top: 5px;\n  margin-bottom: 10px;\n"])));

exports.Forget = Forget;
var animate = (0, _styledComponents.keyframes)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  0% {\n    transform: translateY(-40px);\n  }\n  50% {\n    transform: translateX(40px);\n  }\n  100% {\n    transform: translateY(-40px);\n  }\n  "])));
var rotate = (0, _styledComponents.keyframes)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n"])));

var Square1 = _styledComponents.default.p(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  position: absolute;\n  border-radius: 10px;\n  backdrop-filter: blur(5px);\n  box-shadow: 0px 25px 45px rgba(0, 0, 0, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  border-right: 1px solid rgba(255, 255, 255, 0.2);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  top: -50px;\n  right: -60px;\n  height: 100px;\n  width: 100px;\n  z-index: 1;\n  animation: ", " 10s linear infinite;\n"])), rotate);

exports.Square1 = Square1;
var Square2 = (0, _styledComponents.default)(Square1)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  top: 150px;\n  left: -100px;\n  height: 120px;\n  width: 120px;\n  z-index: 3;\n"])));
exports.Square2 = Square2;
var Square3 = (0, _styledComponents.default)(Square1)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  top: 340px;\n  right: -60px;\n  height: 80px;\n  width: 80px;\n  z-index: 3;\n"])));
exports.Square3 = Square3;
var Square4 = (0, _styledComponents.default)(Square1)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  top: 400px;\n  left: 60px;\n  height: 50px;\n  width: 50px;\n  z-index: 3;\n"])));
exports.Square4 = Square4;
var Square5 = (0, _styledComponents.default)(Square1)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  top: -100px;\n  right: 220px;\n  height: 50px;\n  width: 50px;\n  z-index: 3;\n"])));
exports.Square5 = Square5;

//# sourceMappingURL=index.js.map