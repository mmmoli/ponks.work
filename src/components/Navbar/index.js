import React from 'react'
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from 'reactstrap'

const MyNav = () => (
  <Navbar color="light" light expand="md">
    <Container>
      <NavbarBrand href="/">Ponks.work</NavbarBrand>
      <Nav navbar>
        <NavItem>
          <NavLink href="/projects/">Projects</NavLink>
        </NavItem>
      </Nav>
    </Container>
  </Navbar>
)

MyNav.displayName = 'Navbar'

export default MyNav
