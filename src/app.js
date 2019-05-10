import React from 'react';
import superagent from 'superagent';
import Header from './header.js';
import SearchForm from './search-form.js';
import Map from './map.js';
import SearchResults from './search-results.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      location: {},
    };
  }

  searchGetResult = (searchResult) => {
    this.setState({ location: searchResult })
  }

  getResource = (resource) => {
    superagent.get(`https://city-lab9.herokuapp.com/${resource}`)
    .query({data: this.state.location})
    .then( data => {
      this.setState({ [resource]: data.body });
    })
  }

  render() {
    
    return (
      <>
        <Header />
        <SearchForm searchResult={this.searchGetResult} getResource={this.getResource}/>
        <Map location={this.state.location}/>
        <SearchResults location={this.state.location} weather={this.state.weather} yelp={this.state.yelp} movie={this.state.movies}/>
      </>
    )
  }
}

export default App;
