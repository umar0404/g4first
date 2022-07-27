// import './style.js'
import  React, { Component } from 'react'
import Navbar from './Navbar/Navbar.jsx'
import {Container} from './style.js'

class App extends Component {
  render() {
    return (
      <Container>
        <Navbar/>
        <div className='growing'>
        <h1>Growing Beautiful Plants at Home</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor, accumsan sit amet nunc cursus. Nec tristique at in erat lectus mas sa diam. Lectus elit, nulla elementum fringilla at.</p>
        </div>
      </Container>
    )
  }
}


export default App