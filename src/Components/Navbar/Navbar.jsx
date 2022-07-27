import React, { Component } from 'react'
import { ButtonAnd, Button, NavbarStart, NavbarWrapper } from './NavbarStyle'

export default class Navbar extends Component {
  render() {
    return (
      <NavbarWrapper>
        <NavbarStart>Planet</NavbarStart>
        <NavbarCenter>
            <ul>
                <li>Home</li>
                <li>Service</li>
                <li>About Us</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
        </NavbarCenter>
        <div>
            <Button>Login</Button>
            <ButtonAnd>Sign Up</ButtonAnd>
        </div>
      </NavbarWrapper>
    )
  }
}
