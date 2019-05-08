import React from 'react'
import './app.css';

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section className="header">
        <h1>City Explorer</h1>
        <p>
          Enter a location below to learn about the weather, events,
          restaurants, movies filmed there, and more!
        </p>
      </section>
    );
  }
}

class Search extends React.Component {
  constructor(props) {
    super(props)
  }

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

class Map extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <img src="map.png" alt="google map" />
    );
  }
}

class Result extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section>
      <h3>{this.props.title}</h3>
      <p>
        loremTempor pariatur duis ea tempor ipsum dolor anim ipsum anim
        enim. Incididunt exercitation officia qui cillum non sint do.
        Voluptate exercitation excepteur velit velit occaecat amet elit sunt
        amet ad. Irure consectetur culpa duis amet proident adipisicing id.
        Est ullamco voluptate sunt aliquip aliqua non quis cillum veniam non
        elit magna eu. Esse id nisi Lorem et elit. Cupidatat duis magna id
        aute non voluptate incididunt exercitation sit do nulla culpa amet.
      </p>
    </section>
    );
  }
}

class Main extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <React.Fragment>
        <Search />
        <Map />
        <Result title="Results from the Dark Sky API"/>
        <Result title="Results from the Yelp API"/>
        <Result title="Results from the Eventbrite API"/>
        <Result title="Results from The Movie DB API"/>
        <Result title="Results from the Hiking Project API"/>
        </React.Fragment>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Main />
      </React.Fragment>
    )
  }
}

export default App
