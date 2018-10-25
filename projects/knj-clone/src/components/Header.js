import React from 'react';

import '../assets/css/header.css';
import slideOne from '../assets/img/slideShow1.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const email = <FontAwesomeIcon icon={faEnvelope} />;

export default () => {
  return (
    <div className="headerWrap">
      <div className="slideShow">
        <img src={slideOne} alt="" />
      </div>
      <div className="email">
        <input type="text" placeholder="EMAIL ADDRESS" />
        <button>{email}</button>
      </div>
    </div>
  );
};
