import React from 'react';

function Recruitment() {
  return (
    <div class="container" style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>Try hosting</h2>
      <div style={{ position: 'relative' }}>
        <img
          style={{position: 'relative', maxWidth: '100%', borderRadius: '10px' }}
          src='https://a0.muscache.com/im/pictures/5b4dc94a-0b4c-4c27-b50f-9c5a5b93c775.jpg?im_w=1440'
          alt='a host on her couch'
        />
        <p
          style={{
            position: 'absolute',
            bottom: 110,
            maxWidth: '44%',
            left: 12,
            textShadow: '1px 0 black',
            paddingBottom: '22px',
            color: 'white',
            fontWeight: 'bolder',
            flexWrap: 'wrap',
            justifyContent: 'center',
            justifySelf: 'center' }}
        >Earn extra income and unlock new opportunities by sharing your space.</p>
      </div>
    </div>
  );
}

export default Recruitment;
