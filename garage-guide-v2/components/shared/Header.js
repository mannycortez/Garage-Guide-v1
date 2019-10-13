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

import auth0 from '../../services/auth0'

const RsNavLink = (props) => {
  const { route, title } = props;
  return (
    <Link href={ route }>
        <a className="nav-link port-navbar-link"> { title } </a>
    </Link>
  )
}

const Login = () => {
  return (
    <span onClick={ auth0.login } className="nav-link port-navbar-link clickable"> Login </span>
  )
}

const Logout = () => {
  return (
    <span onClick={ auth0.logout } className="nav-link port-navbar-link clickable"> Logout </span>
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
    const { className } = this.props;
    return (
      <div>
        <Navbar className={`port-navbar port-nav-base absolute ${ className }`} color="transparent" dark expand="md">
          <NavbarBrand className="port-navbar-brand" href="/">Manny Cortez Studios</NavbarBrand>
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
                <RsNavLink  route="/portfolio" title='portfolio' />
              </NavItem>

              <NavItem className="port-navbar-item">
                <RsNavLink  route="/blog" title='blog' />
              </NavItem>

              <NavItem className="port-navbar-item">
                <RsNavLink  route="/thechopshop" title='the chop shop' />
              </NavItem>
            { !auth0.isAuthenticated() &&
              <NavItem className="port-navbar-item">
                <Login />
              </NavItem>
            }
            { auth0.isAuthenticated() &&
              <NavItem className="port-navbar-item">
                <Logout />
              </NavItem>
            }
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}