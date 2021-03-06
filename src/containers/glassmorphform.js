import { Formik } from "formik";
import React from "react";
import { GlassmorphForm } from "../components/glassForm/GlassComp";
import {
  FormContainer,
  FeatureContainer,
  Color,
  Color2,
  Color3,
  Input,
  StyledLink,
  FormTitle,
  Button,
  Forget,
  Square1,
  Square2,
  Square3,
  Square4,
  Square5,
} from "../components/glassForm/styles";

const handleClick = (e) => {
  e.preventDefault();
  return alert("It`a another story!");
};

const validateUtil = (values) => {
  const errors = {};
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

const glassmorphform = () => {
  return (
    <div style={{ overflow: "hidden", maxHeight: "100vh" }}>
      <GlassmorphForm>
        <GlassmorphForm.Section>
          <Color />
          <Color2 />
          <Color3 />
          <div style={{ position: "relative" }}>
            <Square1 />
            <Square2 />
            <Square3 />
            <Square4 />
            <Square5 />

            <FeatureContainer>
              <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                  }, 400);
                }}
                validate={validateUtil}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                }) => (
                  <FormContainer onSubmit={handleSubmit}>
                    <FormTitle>Login form</FormTitle>
                    <Input
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="enter email"
                      autocomplete="off"
                    />
                    {errors.email && touched.email && errors.email}
                    <Input
                      type="password"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="enter password"
                      autocomplete="off"
                    />
                    {errors.password && touched.password && errors.password}
                    <Button
                      type="submit"
                      value="Login"
                      disabled={isSubmitting}
                    />
                    <Forget>
                      Forgot Password ?{" "}
                      <StyledLink onClick={handleClick} to="/">
                        Click Here
                      </StyledLink>
                    </Forget>
                    <Forget>
                      Don`t have an account ?{" "}
                      <StyledLink onClick={handleClick} to="/">
                        Sign Up
                      </StyledLink>
                    </Forget>
                  </FormContainer>
                )}
              </Formik>
            </FeatureContainer>
          </div>
        </GlassmorphForm.Section>
      </GlassmorphForm>
    </div>
  );
};

export default glassmorphform;
