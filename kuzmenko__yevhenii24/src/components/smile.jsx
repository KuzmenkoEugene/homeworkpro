import React from 'react'

export class TheBestSmile extends React.Component {
    constructor() {
        super()
        this.onButtonClickBound1 = this.onButtonClick1.bind(this);
        this.onButtonClickBound2 = this.onButtonClick2.bind(this);
        this.onButtonClickBound3 = this.onButtonClick3.bind(this);
        this.showMaxVotesBond = this.showMaxVotes.bind(this);
        this.maxVoteSmileInfo = ''

        this.state = {
            showResult: false
        }

        this.smile1 = {
            name: ':)',
            vote1: 0
        }

        this.smile2 = {
            name: ':(',
            vote2: 0
        }

        this.smile3 = {
            name: ':|',
            vote3: 0
        }
    }

    onButtonClick1() {
        this.setState({
            vote1: ++this.smile1.vote1
        })
    }

    onButtonClick2() {
        this.setState({
            vote2: ++this.smile2.vote2
        })
    }

    onButtonClick3() {
        this.setState({
            vote3: ++this.smile3.vote3
        })
    }

    showMaxVotes() {
        let maxVote = Math.max(this.smile1.vote1, this.smile2.vote2, this.smile3.vote3)

        this.maxVoteSmileInfo = '';

        if (this.smile3.vote3 === 0 && this.smile2.vote2 === 0 && this.smile1.vote1 === 0) {
            this.maxVoteSmileInfo += `The smiles have no votes.`;
        } else {

            if(maxVote ===  this.smile1.vote1) {
                this.maxVoteSmileInfo += `${this.smile1.name} votes: ${maxVote} `;
            } 
            
            if (maxVote ===  this.smile2.vote2) {
                this.maxVoteSmileInfo += `${this.smile2.name} votes: ${maxVote} `;
            }
    
            if (maxVote ===  this.smile3.vote3) {
                this.maxVoteSmileInfo += `${this.smile3.name} votes: ${maxVote} `;
            }
    
        }

        this.setState({
            showResult: true
        })

    }

    render() {
        return (
            <div>
                <div>
                    <div>
                        <p>{this.smile1.name} votes: {this.smile1.vote1}</p>
                    </div>

                    <div>
                        <p>{this.smile2.name} votes: {this.smile2.vote2}</p>
                    </div>

                    <div>
                        <p>{this.smile3.name} votes: {this.smile3.vote3}</p>
                    </div>
                </div>

                {this.state.showResult && (
                    <div>
                        <p>
                            {`The best smile: ${this.maxVoteSmileInfo}`}
                        </p>
                    </div>
                )}
                
                <button onClick={this.onButtonClickBound1}>Vote №1</button>
                <button onClick={this.onButtonClickBound2}>Vote №2</button>
                <button onClick={this.onButtonClickBound3}>Vote №3</button>
                <button onClick={this.showMaxVotesBond}>Show Results</button>
            </div>
        )
    }
}