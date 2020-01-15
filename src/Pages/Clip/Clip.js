import React from 'react';
import { withRouter } from 'react-router-dom';

import './Clip.scss';

const clip = [
  '3f9f7330-f0f0-48b1-adea-5a0348795093',
  'a6e1cb6a-c68d-450c-beb3-810d1fdbaeb9',
]

export default withRouter(({ match: { params: { id } } }) => (
  <div id="clip-page">
    <iframe
      title={ `Clip ${ id }`}
      seamless="seamless"
      src={ `https://getyarn.io/yarn-clip/embed/${ clip[ id ] }?autoplay=true` }
    />
  </div>
));
