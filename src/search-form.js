import React from 'react';
import superagent from 'superagent';

class SearchForm extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      query: '',
      body: {}
    };
  }

  handleChange = e => {
    let query = e.target.value;
    this.setState({ query });
  };

  fetchCityData = e => {
    e.preventDefault();
    superagent.get(`https://city-lab9.herokuapp.com/location`)
    .query({data: this.state.query})
    .then( response => {
        this.setState({ body: response.body });
        this.props.searchResult(response.body)
    })
    .catch(error => {
        console.log(error);
    })
  };

  render() {
    return (
      <section className="header">
        <form id="search-form">
          <label>Search for a location</label>
          <input type="text" placeholder="Enter a location here" onChange={this.handleChange}/>
          <button type="submit" onClick={this.fetchCityData}>Explore!</button>
        </form>
      </section>
    )
  }
}

export default SearchForm
