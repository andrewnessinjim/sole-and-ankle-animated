import React from "react";
import styled from "styled-components";
import { WEIGHTS } from "../../constants";

function NavLink({ children, ...delegated }) {
  return (
    <Wrapper href="/sale">
      <NavSpan data-hover={children} {...delegated}>
        {children}
      </NavSpan>
    </Wrapper>
  );
}

const Wrapper = styled.a`
  display: inline-block;
  line-height: 1;
  font-size: 1.125rem;

  /* Slide up effect */
  overflow: hidden;

  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const NavSpan = styled.span`
  display: block;
  line-height: 1;
  height: 1em;
  position: relative;

  @media (prefers-reduced-motion: no-preference) {
    transition: 250ms transform ease-in;
    &:hover {
      transform: translateY(-100%);
    }
  }

  &::after {
    content: attr(data-hover);
    position: absolute;
    top: 100%;
    left: 0;
    font-weight: bold;
    line-height: 1;
  }
`;

export default NavLink;
