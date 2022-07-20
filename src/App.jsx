import './App.css';
import React from 'react';

class Students extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      input:'1',
      count:0
    }
  }
    render() {
    return (
      <div>
        <input type="number" onChange={(e)=> this.setState({input: e.target.value})}/>

        <h1>Jami: {this.state.count}</h1>
        <p>Son: {this.state.input}</p>
        <button onClick={()=> this.setState({count: this.state.count + +this.state.input})}>➕</button>
        <button onClick={()=> this.setState({count: this.state.count - this.state.input})}>➖</button>
      </div>
    );
  }
}

export default Students


