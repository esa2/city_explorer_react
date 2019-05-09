import React from 'react';

class DarkSky extends React.Component {

  render() {
    return (
      <section>
      <h3>Results from the Dark Sky API</h3>
      <p>
        loremTempor pariatur duis ea tempor ipsum dolor anim ipsum anim
      </p>
    </section>
    );
  }
}

class Yelp extends React.Component {

  render() {
    return (
      <section>
      <h3>Results from the Yelp API</h3>
      <p>
        loremTempor pariatur duis ea tempor ipsum dolor anim ipsum anim
      </p>
    </section>
    );
  }
}

class Eventbrite extends React.Component {

  render() {
    return (
      <section>
      <h3>Results from the Eventbrite API</h3>
      <p>
        loremTempor pariatur duis ea tempor ipsum dolor anim ipsum anim
      </p>
    </section>
    );
  }
}

class MovieDB extends React.Component {

  render() {
    return (
      <section>
      <h3>Results from The Movie DB API</h3>
      <p>
        loremTempor pariatur duis ea tempor ipsum dolor anim ipsum anim
      </p>
    </section>
    );
  }
}

class HikingProject extends React.Component {

  render() {
    return (
      <section>
      <h3>Results from the Hiking Project API</h3>
      <p>
        loremTempor pariatur duis ea tempor ipsum dolor anim ipsum anim
      </p>
    </section>
    );
  }
}

class SearchResults extends React.Component {

  render() {
    return (
      <React.Fragment>
        <DarkSky/>
        <Yelp />
        <Eventbrite />
        <MovieDB />
        <HikingProject />
        </React.Fragment>
    )
  }
}

export default SearchResults;
