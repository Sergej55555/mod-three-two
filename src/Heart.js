import { Component } from "react";
import heartOne from './heartOne.jpg';
import heartTwo from './heartTwo.jpg';

export class Heart extends Component {

    state = {
        LS: 'Like Us!',
        image: heartOne 
    }

    heartClicked = () => {
        this.setState({
            LS: 'Thank you for love!',
            image: heartTwo 
        })
    }

    render() {
        return <div>
            <div className="container">
            <h1>{this.state.LS}</h1>
            </div>
            <div className="container">
            <img onClick={this.heartClicked} src={this.state.image} width='120px' alt="heart"/>
            </div>
        </div>
    }
}
