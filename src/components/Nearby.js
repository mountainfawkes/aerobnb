import React, { Component } from 'react';
import NearbyCard from './NearbyCard';

class Nearby extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nearbyCards: [
        {
          imgUrl: 'https://a0.muscache.com/im/pictures/a7fe39da-3e57-44df-a744-9a73e482802d.jpg?im_q=medq&im_w=720',
          city: 'Bend',
          distance: '4.0 hour drive'
        },
        {
          imgUrl: 'https://a0.muscache.com/im/pictures/73ab906b-eea1-425d-9fea-bf2c79d86556.jpg?im_q=medq&im_w=720',
          city: 'Eugene',
          distance: '2.5 hour drive'
        },
        {
          imgUrl: 'https://a0.muscache.com/im/pictures/9ff017f4-1a62-4727-b83e-4087336f8c4a.jpg?im_q=medq&im_w=720',
          city: 'Spokane',
          distance: '7.0 hour drive'
        },
        {
          imgUrl: 'https://a0.muscache.com/im/pictures/0445ba36-5684-4cca-9cb1-418a0ffdcd2f.jpg?im_q=medq&im_w=720',
          city: 'Seaside',
          distance: '2.5 hour drive'
        },
        {
          imgUrl: 'https://a0.muscache.com/im/pictures/71ae2609-6082-4f31-aa20-8629d7fab7d7.jpg?im_q=medq&im_w=720',
          city: 'Portland',
          distance: '15 minute drive'
        }
      ]
    }
  }

  render() {
    return (
      <div className="container">
        <h2 style={{ textAlign: 'left', margin: '15px' }}>Explore nearby</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          { this.state.nearbyCards.map(card => {
            return (
              <NearbyCard
                imgUrl = {card.imgUrl}
                city = {card.city}
                distance = {card.distance}
                style={{ flex: '0 0 33.3333%' }}
              />
            )
          })}
        </div>
      </div>
    );
  }
}

export default Nearby;
