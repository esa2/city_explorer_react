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
      <section className="weather">
        {header}
      < ul>{weatherData}</ul>
    </section>
    )
  }
}

class MovieDB extends React.Component {

  render() {
    let header;
    let movieData;
    if (this.props.movie) {
      header = <h3>Results from The Movie DB API</h3>
      movieData = this.props.movie.map((ele, idx) => (
        <li key={idx}>
        
             
        
        <p><span>{ele.title}</span> was relased on {ele.released_on}. Out of {ele.total_votes} total votes, {ele.title} has an average vote of {ele.average_votes} and a popularity score of {ele.popularity}.</p>


        <img src={ele.image_url} alt="movie"></img>
        <p>{ele.overview}</p>
        
        </li> 
      ));
    }

    return (
      <section className="movies">
        {header}
      < ul>{movieData}</ul>
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
        <li key={idx}>
          <a href={ele.url}>{ele.name}</a>
          <p>The average rating is {ele.rating} out of 5 and the average cost is {ele.price} out of 4</p>
          <img src={ele.image_url} alt="yelp"></img>
        </li> 
      ));
    }
    
    return (
      <section className="yelp">
        {header}
      < ul>{yelpData}</ul>
    </section>
    )
  }
}

class SearchResults extends React.Component {

  render() {
    let title;
    if (this.props.weather) {
      title = `Here are the results for ${this.props.location.formatted_query}`
      }
    return (
      <div>
      <h2>{title}</h2>
      <div className="column-container">
        <DarkSky location={this.props.location} weather={this.props.weather}/>
        <MovieDB movie={this.props.movie}/>
        <Yelp yelp={this.props.yelp}/>
      </div>
      </div>
    )
  }
}

export default SearchResults;
