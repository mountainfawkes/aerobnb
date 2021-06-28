import React, { Component } from 'react';
import AnywhereCard from './AnywhereCard';

class Anywhere extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anywhereCards: [
        {
          imgUrl: 'https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=720',
          title: 'Unique stays'
        },
        {
          imgUrl: 'https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=720',
          title: 'Entire homes'
        },
        {
          imgUrl: 'https://a0.muscache.com/im/pictures/10a638e1-6aff-4313-8033-1275cec83987.jpg?im_w=720',
          title: 'Pets allowed'
        },
        {
          imgUrl: 'https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=720',
          title: 'Outdoor getaways'
        }
      ]
    }
  }

  render() {
    return (
      <div className="container">
        <h2 style={{ textAlign: 'left', margin: '15px' }}>Live anywhere</h2>
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
          { this.state.anywhereCards.map(card => {
            return (
              <AnywhereCard
                imgUrl = {card.imgUrl}
                title = {card.title}
              />
            )
          })}
        </div>
      </div>
    )
  }
}

export default Anywhere;