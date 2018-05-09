import React from 'react'
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'

const MyNav = () => (
  <Navbar color="light" light expand="md">
    <NavbarBrand href="/">Ponks.work</NavbarBrand>
    <Nav className="ml-auto" navbar>
      <NavItem>
        <NavLink href="/components/">Components</NavLink>
      </NavItem>
    </Nav>
  </Navbar>
)

MyNav.displayName = 'Navbar'

export default MyNav
