import React from 'react';
import superagent from 'superagent';

class DarkSky extends React.Component {
  constructor(props) {
    super(props);
    this.state = { weather: [] };
  }

  getResource = () => {
    superagent.get(`https://city-explorer-backend.herokuapp.com/weather`)
    .query({data: this.props.location})
    .then( data => {
      this.setState({ weather: data.body });
    })
  }

  render() {
    let header;
    if (this.state.weather.length) {
      header = <h3>Results from Dark Sky API</h3>
    }
      this.getResource()
    let weatherData = this.state.weather.map((ele, idx) => (
      <li key={idx}>{ele.time} {ele.forecast}</li>
    ));

    return (
      <section>
        {header}
      < ul>{weatherData}</ul>
    </section>
    )
  }
}

class Yelp extends React.Component {

  render() {
    return (
      <section>
      {/* <h3>Results from the Yelp API</h3> */}
    </section>
    );
  }
}

class Eventbrite extends React.Component {

  render() {
    return (
      <section>
      {/* <h3>Results from the Eventbrite API</h3> */}
    </section>
    );
  }
}

class MovieDB extends React.Component {

  render() {
    return (
      <section>
      {/* <h3>Results from The Movie DB API</h3> */}
    </section>
    );
  }
}

class HikingProject extends React.Component {

  render() {
    return (
      <section>
      {/* <h3>Results from the Hiking Project API</h3> */}
    </section>
    );
  }
}

class SearchResults extends React.Component {

  render() {
    return (
      <React.Fragment>
        <DarkSky location={this.props.location}/>
        <Yelp />
        <Eventbrite />
        <MovieDB />
        <HikingProject />
      </React.Fragment>
    )
  }
}

export default SearchResults;
