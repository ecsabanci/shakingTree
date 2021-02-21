import React, { Component } from 'react'

import basket from '../svg/basket.svg';


class AppleBasket extends Component {
    render() {
        return (
            <div className="Basket">
                <img className="Basket-image" src={basket} alt=""/>

            </div>
        )
    }
}

export default AppleBasket;