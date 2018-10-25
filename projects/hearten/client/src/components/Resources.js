import React, { Component } from 'react';
import axios from 'axios';
import PromiseHandler from './PromiseHandler';
import { withinView } from './View';
import { withGlobalContext } from './GlobalState';

import PixaBayList from './lists/PixaBayList';
import PexelsList from './lists/PexelsList';
import AdobeColor from './lists/AdobeColor';

import DataLess from './DataLess';

import fontAwesome from '../assets/images/fontAwesome.png';
import googleFonts from '../assets/images/googleFonts.png';
import myColor from '../assets/images/myColor.png';
import coolors from '../assets/images/coolors.png';
import typeGenius from '../assets/images/typeGenius.png';
import adobeColor from '../assets/images/adobeColor.png';

// const cors = 'https://vschool-cors.herokuapp.com/?url=';

class Resources extends Component {
  constructor() {
    super();

    this.state = {
      numElements: 0,
      position: 0
    };

    this.handleLeft = this.handleLeft.bind(this);
    this.handleRight = this.handleRight.bind(this);
    this.getPixaBayData = this.getPixaBayData.bind(this);
    this.getPexelsData = this.getPexelsData.bind(this);
    this.getAdobeColorData = this.getAdobeColorData.bind(this);
    this.getFontAwesomeData = this.getFontAwesomeData.bind(this);
    this.getGoogleFontData = this.getGoogleFontData.bind(this);
    this.getMyColorData = this.getMyColorData.bind(this);
    this.getTypeGeniusData = this.getTypeGeniusData.bind(this);
    this.getCoolorsData = this.getCoolorsData.bind(this);
  }

  handleLeft() {
    this.setState(prevState => {
      if (prevState.position + 320 < 0 && prevState.position < 0) {
        return {
          position: prevState.position + 320
        };
      } else {
        return {
          position: 0
        };
      }
    });
  }

  handleRight() {
    const widthContainer = document.querySelector('.elements-wrap').offsetWidth;
    const widthElements = 0 - 320 * 8;
    const maxPosition = widthElements + widthContainer + 10;
    this.setState(prevState => {
      if (prevState.position - 340 <= maxPosition) {
        return {
          position: maxPosition
        };
      } else {
        return {
          position: prevState.position - 340
        };
      }
    });
  }

  componentDidMount() {
    const numElements = document.querySelectorAll('.inspiration-wrapper');
    this.setState({
      numElements: numElements.length
    });
  }

  getPixaBayData() {
    const api = '10350023-a254b40c7886362bee330bbcf';
    const url = 'https://pixabay.com/api/';
    const search = this.props.form.searchTerm.replace(/\s/g, '+');
    const apiQuery = `${url}?key=${api}&q=${search}&image_type=photo`;
    return axios.get(apiQuery).then(response => response.data.hits);
  }

  getPexelsData() {
    const api = '563492ad6f9170000100000123b5de241b7c49b4825074f14ea82bd4';
    const search = this.props.form.searchTerm.replace(/\s/g, '+');
    return axios
      .get(`https://api.pexels.com/v1/search?query=${search}&per_page=20&page=1`, {
        headers: {
          Authorization: api
        }
      })
      .then(response => response.data.photos);
  }

  getFontAwesomeData() {
    const url = 'http://fontawesome.com/';
    const image = fontAwesome;
    const description =
      'Get vector icons and social logos on your website with Font Awesome, the web’s most popular icon set and toolkit.';
    const title = 'Font Awesome';

    return { url, image, description, title };
  }
  getGoogleFontData() {
    const url = 'https://fonts.google.com/';
    const image = googleFonts;
    const description = "The web's leading source of free fonts to use for your websites";
    const title = 'Google Fonts';

    return { url, image, description, title };
  }
  getMyColorData() {
    const url = 'https://mycolor.space/';
    const image = myColor;
    const description =
      'Get vector icons and social logos on your website with Font Awesome, the web’s most popular icon set and toolkit.';
    const title = 'Font Awesome';

    return { url, image, description, title };
  }
  getTypeGeniusData() {
    const url = 'https://www.canva.com/font-combinations/';
    const image = typeGenius;
    const description = 'Find a font combination for your design needs';
    const title = 'Type Genius';

    return { url, image, description, title };
  }
  getCoolorsData() {
    const url = 'https://coolors.co/app';
    const image = coolors;
    const description =
      'Generate excellent font combinations with the ability to re-roll specific colors in the palette.';
    const title = 'Coolors';

    return { url, image, description, title };
  }

  getAdobeColorData() {
    const searchTerm = this.props.form.searchTerm.replace(/\s/g, '+');
    const url = 'https://color.adobe.com/explore/?q=' + searchTerm;
    const image = adobeColor;
    const searchData = {
      url,
      searchTerm,
      image
    };
    return searchData;
  }

  render() {
    const { style } = this.props;
    const elementStyle = {
      elements: {
        display: 'flex',
        width: '100%',
        transform: `translateX(${this.state.position}px)`,
        transition: 'all 0.2s ease'
      }
    };
    return (
      <div className="wrapper" style={style.wrapper}>
        <div style={style.wrapper.leftArrowDiv}>
          <button style={style.wrapper.arrow} onClick={this.handleLeft}>
            {' '}
            &#9665;{' '}
          </button>
        </div>
        <div className="leftBracket" style={style.wrapper.leftBracket} />
        <div className="elements-wrap" style={style.wrapper.elementsWrap}>
          <div className="resources" style={elementStyle.elements}>
            <PromiseHandler promise={this.getPixaBayData} render={withinView(PixaBayList)} />
            <PromiseHandler promise={this.getPexelsData} render={withinView(PexelsList)} />
            <AdobeColor data={this.getAdobeColorData()} />
            <DataLess data={this.getFontAwesomeData()} />
            <DataLess data={this.getCoolorsData()} />
            <DataLess data={this.getGoogleFontData()} />
            <DataLess data={this.getMyColorData()} />
            <DataLess data={this.getTypeGeniusData()} />
          </div>
        </div>
        <div className="rightBracket" style={style.wrapper.rightBracket} />
        <div style={style.wrapper.rightArrowDiv}>
          <button style={style.wrapper.arrow} onClick={this.handleRight}>
            {' '}
            &#9655;{' '}
          </button>
        </div>
      </div>
    );
  }
}

export default withGlobalContext(Resources);
