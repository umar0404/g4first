// import React from 'react';


// export default class App extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             number1: '',
//             number2: '',
//             selected: '',
//             result: '',
//         }
//     }
//     render(){
//         const {number1, number2, selected, result} =this.state
//         console.log(number1, number2, selected, result);
//         return(
//             <div>
//                 <input type="number" onChange={(e) => this.setState({number1: e.target.value})}/>
//                 <select onChange={(e) => this.setState({selected: e.target.value})}>
//                     <option value="+" >+</option>
//                     <option value="-" >-</option>
//                     <option value="*" >*</option>
//                     <option value="/" >/</option>
//                 </select>
//                 <input type="number" onChange={(e) => this.setState({number2: e.target.value})}/>
//                 <button onClick={() => this.setState({result: selected === '+' && +number1 + +number2 || 
//                 selected === '+' && +number1 + +number2 ||
//                 selected === '-' && +number1 - +number2 ||
//                 selected === '*' && +number1 * +number2 ||
//                 selected === '/' && +number1 / +number2 })}>=</button>
//                 <p>javobi:{result}</p>
//             </div>
//         )
//     }
// }

import React, { Component } from 'react'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            addTextbox: [{}]
        }
    }
    addControls() {
        this.setState((
            {
                addTextbox: [...this.state.addTextbox, {}]
            }
        ))
    }

    delControls(i) {
        this.state.addTextbox.splice(i, 1)
        this.setState({})
    }
    render() {
        return (
            <div>

                <center> <div>Name:
                    {this.state.addTextbox.map((index) => (<div> <input type="text" placeholder=' Enter Name' />
                        {
                            index ?
                                <button onClick={() => this.delControls(index)}><strong>❌</strong></button>
                                : null
                        }
                    </div>))}

                    <h1></h1> </div>
                    <button onClick={() => this.addControls()}  >  add Constrols</button>
                </center> </div>
        )
    }
}