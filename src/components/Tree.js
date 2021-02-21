import React, { Component } from 'react'

import tree from '../svg/tree.svg';

import Apple from "./Apples";


class Tree extends Component {

    constructor(props){
        super(props);

        this.state = {
            isShaked: false
        }
    }

    shakeTree(){
        
        this.setState({
            isShaked: !this.state.isShaked
        })

        console.log(this.state.isShaked)

        if(this.state.isShaked){
            document.querySelector(".Tree").classList.add("Tree-shake");
    
            setTimeout(() => {
              document.querySelector(".Tree").classList.remove("Tree-shake")
              
            }, 3000);
        }

    }

    componentDidUpdate(){
        if(!this.state.isShaked){

           const treeAppleImage = document.querySelector("#APPLE");
           const individualApples = treeAppleImage.childNodes;

           individualApples.forEach((apple,index) => {
            setTimeout(() => {
                apple.classList.add("Tree-Apple-images");
            }, 1000*(index+1));
           });

        }
    }
    
    render() {
        
        let {apples} = this.props;
        // const apples = document.querySelector(".Tree").childNodes
        // const [head, ...tail] = apples

        
        return (
        
            <div className="Tree">
                <button onClick={this.shakeTree.bind(this)}>Shake tree</button>
                <img className="Tree-image" src={tree} alt=""/>

                <div id="APPLE">
                {
                    apples.map(apple => {
                        return (
                            <Apple 
                                key={apple.id}
                                id={apple.id}
                                name={apple.name}
                            />
                        )
                    })
                }
                </div>
            </div>
            
        )
        

    }
}

export default Tree;