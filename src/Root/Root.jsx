import React from 'react';
import  App  from '../Components';


class Root extends React.Component {
    render() {
      return (
        <App/>
      )
    }
}

export default Root























































































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

