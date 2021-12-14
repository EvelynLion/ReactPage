import React, { Component } from "react"

class City extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isCelsius: true,
            temperature: '',
        }

        this.fetchData = this.fetchData.bind(this);
        this.Celsius2Fahrenheit = this.Celsius2Fahrenheit.bind(this);
    
    }

    fetchData() {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=Glasgow&appid=533e77d023b90ef6292d355df18a9345')
            .then(response => {
                return response.json()
            })
            .then(response => (response.main.temp - 273.15).toFixed(1))
            .then(response => {
                // console.log(response);
                this.setState({temperature: response})
            });
    }

    componentDidMount() {
        this.fetchData()
    }

    Celsius2Fahrenheit(tempCel) {
        return (tempCel * 9 / 5 - 32).toFixed(1);
    }

    render() {
        return (
            <div className="city-container" key={this.props.name}>
                <h1>{this.props.header}</h1>
                <div></div>
                <img alt={`${this.props.name}'s picture`} width={600} src={this.props.imageUrl} />
                <div>
                    <h3>{this.props.desp}</h3>

                    {this.state.temperature <= 10.0 ? <img width={100} src={require('../data/cold.png').default} />
                    : this.state.temperature > 20.0 ? <img width={100} src={require('../data/sunny.png').default} />
                    : <img width={100} src={require('../data/mild.png').default} /> }

                    {this.state.isCelsius ? <p><b>Current Temperature: {this.state.temperature} ℃</b></p> 
                    : <p><b>Current Temperature: {this.Celsius2Fahrenheit(this.state.temperature)} ℉</b></p>}
                
                <button
                    onClick={() => this.setState({ isCelsius: !this.state.isCelsius })}
                    className={this.state.isCelsius ? "btn-temp-convert" : "btn-temp-convert"}
                >
                    {this.state.isCelsius ? "Change to °F" : "Change to °C"}
                </button>
                </div>
            </div>
        )
    }
}

export default City;
