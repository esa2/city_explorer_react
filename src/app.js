import React from 'react'

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section>
        <h1>City Explorer</h1>
        <p>
          Enter a location below to learn about the weather, events,
          restaurants, movies filmed there, and more!
        </p>
      </section>
    )
  }
}

class Search extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section>
        <label>Search for a location</label>
        <input type="text" placeholder="Enter a location here"/>
        <button type="submit">Explore!</button>
      </section>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
      <Header />
      {/* <Main /> */}
       <Search />
      {/* // <Map />
      // <Result /> */}
      </React.Fragment>
    )
  }
}

export default App
