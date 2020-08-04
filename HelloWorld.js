import React, { Component } from 'react';

class Drill extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            className: 'Drill',
            who: 'world',
        }
        this.beWorld = this.beWorld.bind(this); 
        this.beFriend = this.beFriend.bind(this);
        this.beReact = this.beReact.bind(this);
    }

    beWorld = () => {
        this.setState({
            who: 'World'
        });
    }
    beFriend = () => {
        this.setState({
            who: 'Friend'
        });
    }
    beReact = () => {
        this.setState({
            who: 'React'
        });
    }
    render(){
        return(
            <div>
                <p>Hello, {this.state.who}!</p>
                <button onClick={this.beWorld}>Friend!</button>
                <button onClick={this.beFriend}>Friend!</button>
                <button onClick={this.beReact}>Friend!</button>
            </div>
        );
    }
}

export default Drill
