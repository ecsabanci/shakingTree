import React, { Component } from 'react'

import tree from '../svg/tree.svg';

import Apple from "./Apples";


class Tree extends Component {

    state = {
        isShaked: this.props.apples.isShaked
    }


    shakeTree(){

        setTimeout(() => {
            this.props.changeState();
        }, 6000);

        this.setState({
            isShaked: !this.state.isShaked
        })

    }

    componentDidUpdate(){

        if(this.state.isShaked){

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
        
        return (
        
            <div className={this.state.isShaked ? "Tree Tree-shake" : "Tree"}>
                <button onClick={this.shakeTree.bind(this)}>Shake tree</button>

                
                
                <img className="Tree-image" src={tree} alt=""/>

                <div id="APPLE">
                    {   
                        apples.isShaked ?
                        
                        ""
                        :

                        apples.apples.map((apple,index) => {
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