import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

import axios from 'axios';
function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

export default class India extends Component {

    constructor(props) {
        super(props);
        this.state = {
            "TotalConfirmed": 0,
            "TotalDeaths": 0,
            "TotalRecovered": 0
        };
    }

    componentDidMount() {
        axios.get('https://api.covid19api.com/total/dayone/country/india')
            .then(response => {
                var lastItem = response.data.pop();
                this.setState({
                    "TotalConfirmed": lastItem.Confirmed,
                    "TotalDeaths": lastItem.Deaths,
                    "TotalRecovered": lastItem.Recovered
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
                        <h1> {formatNumber(this.state.TotalConfirmed)}</h1>

                    </Container>
                </Jumbotron>

                <Jumbotron  >
                    <Container >
                        <h4> Total Deaths</h4>
                        <h1> {formatNumber(this.state.TotalDeaths)}</h1>

                    </Container>
                </Jumbotron>

                <Jumbotron >
                    <Container>
                        <h4> Total Recovered</h4>
                        <h1> {formatNumber(this.state.TotalRecovered)}</h1>

                    </Container>
                </Jumbotron>
                </Container>

            </div>


        );
    }
}