import { Formik } from "formik";
import React from "react";
import { GlassmorphForm } from "../components/GlassComp";
import {
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
  // Square4,
} from "../components/styles";
import { FormContainer } from "./../components/styles/index";

const glassmorphform = () => {
  return (
    <div>
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
              <Formik>
                <FormContainer>
                  <FormTitle>Login form</FormTitle>
                  <Input
                    type="text"
                    placeholder="enter email"
                    autocomplete="off"
                  />
                  <Input
                    type="password"
                    placeholder="enter password"
                    autocomplete="off"
                  />
                  <Button type="submit" value="Login" />
                  <Forget>
                    Forgot Password ? <StyledLink>Click Here</StyledLink>
                  </Forget>
                  <Forget>
                    Don`t have an account ? <StyledLink>Sign Up</StyledLink>
                  </Forget>
                </FormContainer>
              </Formik>
            </FeatureContainer>
          </div>
        </GlassmorphForm.Section>
      </GlassmorphForm>
    </div>
  );
};

export default glassmorphform;
