import React, { Component } from 'react'

import apple from '../svg/apple.svg';

class Apples extends Component {

    render() {
        
        return (
            <div className="Apple">
                <img className="Apple-image" src={apple} alt=""/>
            </div>
        )

    }
}

export default Apples;