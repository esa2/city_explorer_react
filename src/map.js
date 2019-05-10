import React from 'react';
require('dotenv').config();

class Map extends React.Component {

  render() {
    const haveQuery = this.props.location.search_query

    let mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${this.props.location.latitude}%2c%20${this.props.location.longitude}&zoom=13&size=600x300&maptype=roadmap&key=${process.env.REACT_APP_GEOCODE_API_KEY}`;

    let mapImg;
    if (haveQuery) {
      mapImg = <img src={mapUrl} alt="google map" />;
    }

    return (
      <section className="map">
      {mapImg}
      </section>
    );
  }
}

export default Map;
