import React from 'react';

class SearchForm extends React.Component {

  render() {
    return (
      <section className="header">
        <label>Search for a location</label>
        <input type="text" placeholder="Enter a location here" />
        <button type="submit">Explore!</button>
      </section>
    );
  }
}

export default SearchForm;
