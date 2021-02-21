import './scss/styles.scss';
import React, { Component } from 'react'
import Tree  from "./components/Tree";

import AppleBasket from './components/AppleBasket';

class App extends Component {

  state = {
    isShaked: false,
    apples: [
        {
            id: 1,
            name: "apple-1"
        },
        {
            id: 2,
            name: "apple-2"
        },
        {
            id: 3,
            name: "apple-3"
        },
        {
            id: 4,
            name: "apple-4"
        }
    ]
  } 

  changeState(){
    this.setState({
      isShaked: true
    })
  }

  render(){
    return (
      <div className="container">        
        <Tree apples={this.state} changeState={this.changeState.bind(this)} />
        <AppleBasket apples={this.state} />
  
        {console.log("isShaked",this.state.isShaked)}
      </div>
    );
  }

}

export default App;
