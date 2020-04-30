import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

import axios from 'axios';

export default class Usa extends Component {

    constructor(props) {
        super(props);
        this.state = {
            "TotalConfirmed": 0,
            "TotalDeaths": 0,
            "TotalRecovered": 0
        };
    }

    componentDidMount() {
        axios.get('https://covidtracking.com/api/v1/us/current.json')
            .then(response => {
                
                this.setState({
                    "TotalConfirmed": response.data[0].positive,
                    "TotalDeaths": response.data[0].death,
                    "TotalRecovered": response.data[0].recovered
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }



    render() {
        return (

            <div>
                <Container>
                <Jumbotron >
                    <Container>
                        <h4> Total Confirmed</h4>
                        <h1> {this.state.TotalConfirmed}</h1>

                    </Container>
                </Jumbotron>

                <Jumbotron  >
                    <Container >
                        <h4> Total Deaths</h4>
                        <h1> {this.state.TotalDeaths}</h1>

                    </Container>
                </Jumbotron>

                <Jumbotron >
                    <Container>
                        <h4> Total Recovered</h4>
                        <h1> {this.state.TotalRecovered}</h1>

                    </Container>
                </Jumbotron>
                </Container>

            </div>


        );
    }
}