import React from 'react';

class Map extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${this.props.location.latitude}%2c%20${this.props.location.longitude}&zoom=13&size=600x300&maptype=roadmap&key=xxx`

    return (
      <div>
      <img src={mapUrl} alt="google map" />
      </div>
    );
  }
}

export default Map;
