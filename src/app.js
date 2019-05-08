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

class Main extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <label>Search for a location</label>
        <input type="text" placeholder="Enter a location here" />
        <button type="submit">Explore!</button>
        <img src="https://placehold.it/480x400/000" />
        <section>
          <h3>Results from the Dark Sky API</h3>
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
        <section>
          <h3>Results from the Yelp API</h3>
          <p>
            Do excepteur anim anim dolore ipsum ipsum excepteur qui do nulla
            quis fugiat. Reprehenderit excepteur do duis consectetur ea aliquip
            excepteur excepteur esse. Incididunt exercitation nostrud esse
            dolore sint culpa. Ea consectetur dolor ex eu enim cupidatat sint
            do.
          </p>
        </section>
        <section>
          <h3>Results from the Eventbrite API</h3>
          <p>
            Do excepteur anim anim dolore ipsum ipsum excepteur qui do nulla
            quis fugiat. Reprehenderit excepteur do duis consectetur ea aliquip
            excepteur excepteur esse. Incididunt exercitation nostrud esse
            dolore sint culpa. Ea consectetur dolor ex eu enim cupidatat sint
            do.
          </p>
        </section>
        <section>
          <h3>Results from The Movie DB API</h3>
          <p>
            Do excepteur anim anim dolore ipsum ipsum excepteur qui do nulla
            quis fugiat. Reprehenderit excepteur do duis consectetur ea aliquip
            excepteur excepteur esse. Incididunt exercitation nostrud esse
            dolore sint culpa. Ea consectetur dolor ex eu enim cupidatat sint
            do.
          </p>
        </section>
        <section>
          <h3>Results from the Hiking Project API</h3>
          <p>
            Do excepteur anim anim dolore ipsum ipsum excepteur qui do nulla
            quis fugiat. Reprehenderit excepteur do duis consectetur ea aliquip
            excepteur excepteur esse. Incididunt exercitation nostrud esse
            dolore sint culpa. Ea consectetur dolor ex eu enim cupidatat sint
            do.
          </p>
        </section>
      </div>
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
        <input type="text" placeholder="Enter a location here" />
        <button type="submit">Explore!</button>
      </section>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Main />
        <Search />
        {/* // <Map />
      // <Result /> */}
      </React.Fragment>
    )
  }
}

export default App
