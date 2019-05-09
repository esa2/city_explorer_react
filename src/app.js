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
      location: {},
      query: ''
    };
  }

  handleQuery = e => {
    e.preventDefault();
    console.log(e.target.value)
    // this.setState({ query })
  }

  searchGetResult = (searchResult) => {
    console.log('searhResult', searchResult)
    this.setState({ location: searchResult })
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <SearchForm getQuery={this.handleQuery} searchResult={this.searchGetResult}/>
        <Map location={this.state.location}/>
        <SearchResults />
      </React.Fragment>
    )
  }
}

export default App;
