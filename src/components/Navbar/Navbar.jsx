import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {images} from '../../data';
import {Container} from '../../data/styles';
import {Btn} from './../UI/';
import {
  NavBtn,
  NavContent,
  NavItem,
  NavBarLink,
  NavList,
  NavLogo,
  NavLogoImg,
  NavWrapper,
} from './navbarStyled';

const Navbar = () => {
  return (
    <NavWrapper>
      <Container>
        <NavContent>
          <NavLogo as={Link} to="/">
            <NavLogoImg src={images.logo} alt="" />
            Artificial Intelligence
          </NavLogo>
          <NavList>
            <NavItem><NavBarLink as={NavLink} to="/">Home</NavBarLink></NavItem>
            <NavItem>
              <NavBarLink as={NavLink} to="/about">About</NavBarLink>
            </NavItem>
            <NavItem>
              <NavBarLink as={NavLink} to="/">Services</NavBarLink>
            </NavItem>
            <NavItem><NavBarLink as={NavLink} to="/">Blog</NavBarLink></NavItem>
            <NavItem>
              <NavBarLink as={NavLink} to="/">Contact</NavBarLink>
            </NavItem>
          </NavList>
          <NavBtn><Btn>Sign In</Btn></NavBtn>
        </NavContent>
      </Container>
    </NavWrapper>
  );
};

export default Navbar;
