import React from 'react';
import Related from './Related';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPinterest, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

import image1 from '../assets/img/skin1.jpg';
import image2 from '../assets/img/skin6.jpg';
import image3 from '../assets/img/skin8.jpg';
import image4 from '../assets/img/skin2.jpg';

import '../assets/css/article.css';

const twitter = <FontAwesomeIcon icon={faTwitter} />;
const pinterest = <FontAwesomeIcon icon={faPinterest} />;
const facebook = <FontAwesomeIcon icon={faFacebook} />;

const relatedImages = {
  img1: image1,
  img2: image2,
  img3: image3,
  img4: image4
};

export default ({ date, title, category, img, imgDesc, body }) => {
  return (
    <div className="article">
      <div className="articleContent">
        <p className="date">{date}</p>
        <a className="title" href="#">
          {title}
        </a>
        <p className="category">{category}</p>
        <img src={img} className="img" alt="" />
        <p className="imgDesc">{imgDesc}</p>
        <p className="body">{body}</p>
        <button>READ MORE</button>
      </div>
      <div className="socialBar">
        <button>{twitter}</button>
        <button>{pinterest}</button>
        <button>{facebook}</button>
        <p>0 Comments</p>
      </div>
      <Related images={relatedImages} />
    </div>
  );
};
