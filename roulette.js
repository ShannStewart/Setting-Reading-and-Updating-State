import React from 'react';

class Pistol extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            chamber: null,
            spinningTheChamber: false,
            timer: 0,
            message: '',
        }
        this.timeOut = this.timeOut.bind(this);
        this.timerTime = this.timerTime.bind(this);
    }
    static defaultProps = {
        bulletInChamber: 8,
    }

    timeOut = () => {
        this.setState({
            spinningTheChamber: true,
            timer: 2,
            message: 'spinning the chamber and pulling the trigger! ....',
        });

        this.interval = window.setInterval(this.timerTime, 1000);
    }

    timerTime = () =>{
        this.setState({
          timer: this.state.timer - 1,  
        })

        const randomChamber = Math.ceil(Math.random() * this.props.bulletInChamber);

        if (this.state.timer === 0){
            clearInterval(this.interval);
            this.setState({
                spinningTheChamber: false,
                chamber: randomChamber,
            });

            if (this.state.chamber === this.props.bulletInChamber){
                this.setState({
                    message: 'BANG!!!!!',
                })
            }
            else{
                this.setState({
                    message: "You're Safe!",
                })
            }
        }
    }

    render(){
        return (
            <div>
                <p>{this.state.message}</p>
                <button onClick={this.timeOut}>Pull the Trigger!</button>
            </div>
        )
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }
}

export default Pistol