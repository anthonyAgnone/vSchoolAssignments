import React from 'react';

import '../assets/css/related.css';

export default ({ images: { img1, img2, img3, img4 } }) => {
  return (
    <div className="relatedWrap">
      <p className="relatedTitle">RELATED</p>
      <div className="relatedImg">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
      </div>
    </div>
  );
};
