import React from 'react';
import Fetcher from '../fetcher/index'
import './style.css'

export default class Displayer extends Fetcher {
    
    handleButtonClick() {
        this.getNewColor()
    }

    render() {
        return (
            <>
                <p>{ this.state.color }</p>
                <button onClick={ this.handleButtonClick }>Shuffle</button>
            </>
        )
    }
}