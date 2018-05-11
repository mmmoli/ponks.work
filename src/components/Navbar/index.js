import React from 'react'
import PropTypes from 'prop-types'
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from 'reactstrap'

const MyNav = ({ restricted }) => (
  <Navbar color="light" light expand="md">
    <Container>
      <NavbarBrand href={!restricted ? '/' : null}>Ponks.work logo</NavbarBrand>
      {!restricted ? (
        <Nav navbar>
          <NavItem>
            <NavLink href="/projects/">Projects</NavLink>
          </NavItem>
        </Nav>
      ) : null}
    </Container>
  </Navbar>
)

MyNav.displayName = 'Navbar'

MyNav.propTypes = {
  restricted: PropTypes.bool.isRequired,
}

MyNav.defaultProps = {
  restricted: false,
}

export default MyNav
