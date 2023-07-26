import React from 'react'

export class Counter extends React.Component {
    constructor() {
        super()

        this.state = {
            counter1: 0,
            counter2: 0,
            counter3: 0,
        }

        this.onButtonClickBound1 = this.onButtonClick1.bind(this);
        this.onButtonClickBound2 = this.onButtonClick2.bind(this);
        this.onButtonClickBound3 = this.onButtonClick3.bind(this);
    }

    onButtonClick1() {
        this.setState({
            counter1: ++this.state.counter1
        })
    }

    onButtonClick2() {
        this.setState({
            counter2: ++this.state.counter2
        })
    }

    onButtonClick3() {
        this.setState({
            counter3: ++this.state.counter3
        })
    }

    render() {
        return (
            <div>
                <p>smile 1, votes: {this.state.counter1}</p>
                <p>smile 2, votes: {this.state.counter2}</p>
                <p>smile 3, votes: {this.state.counter3}</p>

                <button onClick={this.onButtonClickBound1}>Vote №1</button>
                <button onClick={this.onButtonClickBound2}>Vote №2</button>
                <button onClick={this.onButtonClickBound3}>Vote №3</button>
                <button>result</button>
            </div>
        )
    }
}