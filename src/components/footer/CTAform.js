import React, { useState, useEffect } from "react";
import CTAcard from "./CTAcard";
import { SimpleButton } from "../../UI/index";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;

  @media screen and (min-width: ${({ theme }) => theme.mediaScreen.tablet640}) {
    display: grid;
    grid-template-columns: 1fr auto;
  }
`;
const Input = styled.input.attrs((props) => ({ className: props.className }))`
  padding: 0.8rem 1rem;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.mediumGray};
  border: 1px solid ${({ theme }) => theme.colors.darkerGray};
  border-radius: 0.2rem;
  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.secondaryGreen};
    outline: none;
  }
  &.error {
    border: 2px solid ${({ theme }) => theme.colors.lightRed};
    outline: none;
  }
`;
const AlertContainer = styled.div`
  margin-top: 0.5rem;
  font-family: ${({ theme }) => theme.fonts[0]};
`;
const AlertSuccess = styled.div`
  color: ${({ theme }) => theme.colors.secondaryGreen};
`;
const AlertError = styled.div`
  color: ${({ theme }) => theme.colors.lightRed};
`;
const CTAform = (props) => {
  const [formIsValid, setFormIsValid] = useState(null);
  const [formContent, setFormContent] = useState("");
  const checkEmail = (str) => {
    const isEmail = /^[a-z0-9.]{1,64}@[a-z0-9.]{1,64}$/i.test(str);
    console.log(isEmail, str);
    return isEmail;
  };
  const formHandler = (e) => {
    e.preventDefault();
    if (formContent.length < 1 || !checkEmail(formContent)) {
      setFormIsValid(false);
    }
    if (formContent.length > 1 && checkEmail(formContent)) {
      setFormIsValid(true);
      setFormContent("");
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setFormIsValid(null);
    }, 2000);
    return () => clearTimeout(timer);
  }, [formIsValid]);
  return (
    <CTAcard bg={(props) => props.theme.colors.lightGray}>
      <h3>sign up for our newsletter</h3>
      <p>
        Be the first to know when we launch a new product or when we need your
        support to rally for a cause.
      </p>

      <Form>
        <Input
          type="email"
          value={formContent}
          onChange={(e) => setFormContent(e.target.value)}
          className={formIsValid === false ? "error" : null}
        />
        <SimpleButton
          bg={(props) => props.theme.colors.secondaryGreen}
          color={(props) => props.theme.colors.lightestGray}
          type="submit"
          onClick={(e) => formHandler(e)}
        >
          Sign up
        </SimpleButton>
      </Form>
      <AlertContainer>
        {formIsValid === true && (
          <AlertSuccess>Sign up successfull!</AlertSuccess>
        )}
        {formIsValid === false && (
          <AlertError>Please enter valid email!</AlertError>
        )}
      </AlertContainer>
    </CTAcard>
  );
};

export default CTAform;
