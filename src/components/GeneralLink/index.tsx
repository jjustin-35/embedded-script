import React from 'react';
import { Arrow } from './styled';
import data from './data';

const Link = () => (
  <Arrow>
    <img {...data['arrow-link']} />
  </Arrow>
);

export default Link;
