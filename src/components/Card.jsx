import React, { Component } from 'react'

export default class Card extends Component {
    constructor(props){
        console.log('Card class constructed')
        super(props);
        this.state = {
            peers: []


        }
    }


    componentDidMount(){
        console.log('Component mounted')
        fetch(`https://kekambas-bs.herokuapp.com/kekambas`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                let peerNames = data
                this.setState({peers:peerNames});
            })
}

    componentDidUpdate(prevProps, prevState){
        console.log(prevState, this.state)
        if (prevState.peers != this.state.peers){
            fetch(`https://kekambas-bs.herokuapp.com/kekambas`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    let peerNames = data
                    // this.setState({peers:peerNames});
            })
        }
    };

    handlePeersSubmit = (e) => {
        e.preventDefault();
        console.log('clicked')
        console.log(e.target)
    }

    render() {
        console.log(this);
        console.log('render method executed')
        return (
            <div>
                <div className="row d-flex" name='allPeers'>
                    <div class="btn-group-vertical w-25" role="group" aria-label="Basic example">
                        {/* <button type="button" class="btn btn-danger">Off</button>
                        <button type="button" class="btn btn-outline-danger">On</button> */}
                    </div>
                    {this.state.peers.map((p, i) => <div className="card w-25"><div className="card-body" onClick={this.handlePeersSubmit}>{p.first_name} {p.last_name}</div></div>)}
                </div>
            </div>
        )
    }
}
