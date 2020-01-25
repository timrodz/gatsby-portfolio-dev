import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {Wrapper} from './styles';

const NavbarLinks = ({desktop}) => (
  <Wrapper desktop={desktop}>
    <AnchorLink href="#portfolio">Portfolio</AnchorLink>
    <AnchorLink href="#projects">Open Source</AnchorLink>
    <AnchorLink href="#posts">Blog Posts</AnchorLink>
    <AnchorLink href="#about">About</AnchorLink>
  </Wrapper>
);

export default NavbarLinks;
