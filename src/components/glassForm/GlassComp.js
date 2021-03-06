import React from 'react'
import styled from "styled-components";
import { Container, Section } from './styles/index';

export function GlassmorphForm({children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

GlassmorphForm.Section = ({children, ...restProps }) => {
  return <Section {...restProps}>{children}</Section>
}    




