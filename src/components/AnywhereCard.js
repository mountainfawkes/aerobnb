import React from 'react';
import PropTypes from 'prop-types';

function AnywhereCard(props) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '7px' }}>
      <div>
        <img src={props.imgUrl} alt={props.city} style={{ maxWidth: '200px', borderRadius: '5%' }} />
      </div>
      <div>
        <h4>{props.title}</h4>
      </div>
    </div>
  )
}

AnywhereCard.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default AnywhereCard;