import React from 'react'
import Link from 'next/link'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const RsNavLink = (props) => {
  const { route, title } = props;
  return (
    <Link href={ route }>
        <a className="nav-link port-navbar-link"> { title } </a>
    </Link>
  )
}

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar className="port-navbar port-default absolute" color="transparent" dark expand="md">
          <NavbarBrand className="port-navbar-brand" href="/">Garage Guide</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>

              <NavItem className="port-navbar-item">
                <RsNavLink  route="/" title='home' />
              </NavItem>

              <NavItem className="port-navbar-item">
                <RsNavLink  route="/about" title='about' />
              </NavItem>

              <NavItem className="port-navbar-item">
                <RsNavLink  route="/galleries" title='services' />
              </NavItem>

              <NavItem className="port-navbar-item">
                <RsNavLink  route="/blog" title='map' />
              </NavItem>

              <NavItem className="port-navbar-item">
                <RsNavLink  route="/art" title='sign in' />
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}