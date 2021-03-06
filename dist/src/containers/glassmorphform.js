"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _formik = require("formik");

var _react = _interopRequireDefault(require("react"));

var _GlassComp = require("../components/glassForm/GlassComp");

var _styles = require("../components/glassForm/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handleClick = function handleClick(e) {
  e.preventDefault();
  return alert("It`a another story!");
};

var validateUtil = function validateUtil(values) {
  var errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (!values.password) {
    errors.password = "Required";
  }

  return errors;
};

var glassmorphform = function glassmorphform() {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_GlassComp.GlassmorphForm, null, /*#__PURE__*/_react.default.createElement(_GlassComp.GlassmorphForm.Section, null, /*#__PURE__*/_react.default.createElement(_styles.Color, null), /*#__PURE__*/_react.default.createElement(_styles.Color2, null), /*#__PURE__*/_react.default.createElement(_styles.Color3, null), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.Square1, null), /*#__PURE__*/_react.default.createElement(_styles.Square2, null), /*#__PURE__*/_react.default.createElement(_styles.Square3, null), /*#__PURE__*/_react.default.createElement(_styles.Square4, null), /*#__PURE__*/_react.default.createElement(_styles.Square5, null), /*#__PURE__*/_react.default.createElement(_styles.FeatureContainer, null, /*#__PURE__*/_react.default.createElement(_formik.Formik, {
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: function onSubmit(values, _ref) {
      var setSubmitting = _ref.setSubmitting;
      setTimeout(function () {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    },
    validate: validateUtil
  }, function (_ref2) {
    var values = _ref2.values,
        errors = _ref2.errors,
        touched = _ref2.touched,
        handleChange = _ref2.handleChange,
        handleBlur = _ref2.handleBlur,
        handleSubmit = _ref2.handleSubmit,
        isSubmitting = _ref2.isSubmitting;
    return /*#__PURE__*/_react.default.createElement(_styles.FormContainer, {
      onSubmit: handleSubmit
    }, /*#__PURE__*/_react.default.createElement(_styles.FormTitle, null, "Login form"), /*#__PURE__*/_react.default.createElement(_styles.Input, {
      type: "email",
      name: "email",
      value: values.email,
      onChange: handleChange,
      onBlur: handleBlur,
      placeholder: "enter email",
      autocomplete: "off"
    }), errors.email && touched.email && errors.email, /*#__PURE__*/_react.default.createElement(_styles.Input, {
      type: "password",
      name: "password",
      value: values.password,
      onChange: handleChange,
      onBlur: handleBlur,
      placeholder: "enter password",
      autocomplete: "off"
    }), errors.password && touched.password && errors.password, /*#__PURE__*/_react.default.createElement(_styles.Button, {
      type: "submit",
      value: "Login",
      disabled: isSubmitting
    }), /*#__PURE__*/_react.default.createElement(_styles.Forget, null, "Forgot Password ?", " ", /*#__PURE__*/_react.default.createElement(_styles.StyledLink, {
      onClick: handleClick,
      to: "/"
    }, "Click Here")), /*#__PURE__*/_react.default.createElement(_styles.Forget, null, "Don`t have an account ?", " ", /*#__PURE__*/_react.default.createElement(_styles.StyledLink, {
      onClick: handleClick,
      to: "/"
    }, "Sign Up")));
  }))))));
};

var _default = glassmorphform;
exports.default = _default;

//# sourceMappingURL=glassmorphform.js.map