/* eslint-disable no-unused-vars */
import React from "react";
import styled, { keyframes } from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { QUERIES, WEIGHTS } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <ContentBackground aria-label="Menu">
        <Content>
          <CloseButton onClick={onDismiss}>
            <Icon id="close" />
            <VisuallyHidden>Dismiss menu</VisuallyHidden>
          </CloseButton>
          <Filler />
          <Nav>
            <NavLink href="/sale" index={1}>Sale</NavLink>
            <NavLink href="/new" index={2}>New&nbsp;Releases</NavLink>
            <NavLink href="/men" index={3}>Men</NavLink>
            <NavLink href="/women" index={4}>Women</NavLink>
            <NavLink href="/kids" index={5}>Kids</NavLink>
            <NavLink href="/collections" index={6}>Collections</NavLink>
          </Nav>
          <Footer>
            <SubLink href="/terms">Terms and Conditions</SubLink>
            <SubLink href="/privacy">Privacy Policy</SubLink>
            <SubLink href="/contact">Contact Us</SubLink>
          </Footer>
        </Content>
      </ContentBackground>
    </Overlay>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
`;

const microSlideIn = keyframes`
  from {
    transform: translateX(-10%);
    opacity: 0;
  } to {
    transform: translateX(0%);
    opacity: 1;
  }
`;

const OVERLAY_ANIMATION_DURATION = 150;
const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-backdrop);
  display: flex;
  justify-content: flex-end;
  animation: ${fadeIn} ${OVERLAY_ANIMATION_DURATION}ms;
`;

const CONTENT_BG_ANIMATION_DURATION = 250;
const ContentBackground = styled(DialogContent)`
  background: white;
  width: 300px;
  height: 100%;
  padding: 24px 32px;
  animation: ${slideIn} ${CONTENT_BG_ANIMATION_DURATION}ms;
  animation-delay: ${OVERLAY_ANIMATION_DURATION}ms;
  animation-fill-mode: backwards;
`;

const CONTENT_ANIMATION_DURATION = 500;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  animation: ${fadeIn} ${CONTENT_ANIMATION_DURATION}ms;
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const NAV_LINK_ANIMATION_DELAY =
  CONTENT_BG_ANIMATION_DURATION + OVERLAY_ANIMATION_DURATION;

const NavLink = styled.a`
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  text-decoration: none;
  font-size: 1.125rem;
  text-transform: uppercase;
  will-change: transform;

  &:first-of-type {
    color: var(--color-secondary);
  }

  animation: ${microSlideIn} 250ms;
  animation-delay: ${p => p.index * 30 + NAV_LINK_ANIMATION_DELAY + "ms" };
  animation-fill-mode: backwards;
`;

const Filler = styled.div`
  flex: 1;
`;

const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: flex-end;
`;

const SubLink = styled.a`
  color: var(--color-gray-700);
  font-size: 0.875rem;
  text-decoration: none;
`;

export default MobileMenu;
