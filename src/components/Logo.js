import React from 'react';
import { Image } from 'react-bootstrap';

import logo from '../logo.svg';

function Logo() {
  return <Image src={logo} className="logo" />;
}

export default Logo;
