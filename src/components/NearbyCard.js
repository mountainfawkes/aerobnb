import React from 'react';
import PropTypes from 'prop-types';

function NearbyCard(props) {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '7px' }}>
      <div>
        <img style={{ maxWidth: '100px', borderRadius: '15%' }} src={props.imgUrl} alt={props.city} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={{ padding: '0 10px' }}>{props.city}</span>
        <span style={{ padding: '0 10px', color: 'gray' }}>{props.distance}</span>
      </div>
    </div>
  )
}

NearbyCard.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  distance: PropTypes.string.isRequired
}

export default NearbyCard;
