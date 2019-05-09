import React from 'react';
import './app.css';
import Header from './header.js';
import SearchForm from './search-form.js';
import Map from './map.js';
import SearchResults from './search-results';

class App extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      location: {}
    };
  }

  searchGetResult = (searchResult) => {
    console.log('searhResult', searchResult)
    this.setState({ location: searchResult })
  }

  render() {
    
    return (
      <>
        <Header />
        <SearchForm searchResult={this.searchGetResult}/>
        <Map location={this.state.location}/>
        <SearchResults location={this.state.location}/>
      </>
    )
  }
}

export default App;
