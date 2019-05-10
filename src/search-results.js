import React from 'react';

class DarkSky extends React.Component {

  render() {
    let header;
    let weatherData;
    if (this.props.weather) {
      header = <h3>Results from the Dark Sky API</h3>
      weatherData = this.props.weather.map((ele, idx) => (
        <li key={idx}>{ele.time} {ele.forecast}</li>
      ));
    }
    
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
    let header;
    let yelpData;
    if (this.props.yelp) {
      header = <h3>Results from the Yelp API</h3>
      yelpData = this.props.yelp.map((ele, idx) => (
        <li key={idx}>{ele.name} {ele.image_url} {ele.price} {ele.rating} {ele.url}</li>
      ));
    }
    
    return (
      <section>
        {header}
      < ul>{yelpData}</ul>
    </section>
    )
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
    console.log(this.props.movie)
    let header;
    let movieData;
    if (this.props.movie) {
      header = <h3>Results from The Movie DB API</h3>
      movieData = this.props.movie.map((ele, idx) => (
        <li key={idx}>{ele.title} {ele.released_on} {ele.total_votes} {ele.image_url} {ele.average_votes} {ele.popularity} {ele.overview}</li> 
      ));
    }

    return (
      <section>
        {header}
      < ul>{movieData}</ul>
    </section>
    )
  }
}

class SearchResults extends React.Component {

  render() {
    return (
      <React.Fragment>
        <DarkSky location={this.props.location} weather={this.props.weather}/>
        <Yelp location={this.props.location} yelp={this.props.yelp}/>
        <Eventbrite />
        <MovieDB location={this.props.location} movie={this.props.movie}/>
      </React.Fragment>
    )
  }
}

export default SearchResults;
