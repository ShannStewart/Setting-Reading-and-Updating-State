import React from 'react';

class Bomb extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            className: 'Drill',
            count: 0,
            word: 'Tick',
        }
        this.tickTimer = this.tickTimer.bind(this); 
    }
        tickTimer = () => {
            this.setState({
                count: this.state.count + 1,
            });

            const remainder = this.state.count % 2;
            
            if (this.state.count >= 8){
                clearInterval(this.interval);
                this.setState({
                    word: 'BOOM!',
                });
            }
                else if (remainder === 0){
                    this.setState({
                        word: 'Tick',
                    });
                } 
                else {
                    this.setState({
                        word: 'Tock',
                    });
                }
        }

    render(){
        return(
            <div className={this.state.className}>
                <p>{this.state.word}</p>
            </div>
        )
    }
    componentDidMount(){
        this.interval = window.setInterval(this.tickTimer, 1000);
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }
}

export default Bomb;