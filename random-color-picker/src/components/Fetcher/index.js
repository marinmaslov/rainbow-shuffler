import React from 'react';
import axios from 'axios';

export default class Fetcher extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            color: "",
            colorHistory: []
        };
        
        this.setNewColor = this.setNewColor.bind(this);
        this.getNewColor = this.getNewColor.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    setNewColor(color) {
        this.setState( prevState => ({
            color: color,
            colorHistory: [...prevState.colorHistory, color]
        }))

        console.log("STATE COLOR: " + this.state.color)
        console.log("STATE HISTORY: " + this.state.colorHistory)
    }

    getNewColor() {
        axios.get(`https://www.colr.org/json/color/random?${new Date().getTime()}`)
        .then(res => {
          if(res.data.new_color !== "") {
            console.log(res.data)
            this.setNewColor(res.data.new_color)
          }
        })
        .catch(error => {
          console.log(error)
        })
    }

    handleButtonClick() {
        this.getNewColor()
    }

    render() {
        return (
            <>
            </>
        )
    }
}