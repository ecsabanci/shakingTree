import React, { Component } from 'react'

import basket from '../svg/basket.svg';
import Apple from './Apples';

class AppleBasket extends Component {
    render() {

        const {apples} = this.props;
        
        return (
            <div className="Basket">
                <img className="Basket-image" src={basket} alt=""/>
                <div id="APPLE">
                {
                    apples.isShaked ? 

                    
                    apples.apples.map(apple => {
                        
                        return (
                            <Apple 
                                key={apple.id}
                                id={apple.id}
                                name={apple.name}
                            />
                        )
                    }) :

                    ""
                    
                }
                </div>
            </div>
        )
    }
}

export default AppleBasket;