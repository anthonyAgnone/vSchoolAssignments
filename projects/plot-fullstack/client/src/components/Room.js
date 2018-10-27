import React from 'react'
import { DragSource } from 'react-dnd'

import { Types } from '../lib/constants'

import wood from '../assets/wood2.png'
import tile from '../assets/tile.png'

const spec = {
  beginDrag({ id }) {
    console.log(id)
    return { id }
  }
}

const collect = (connect, monitor) => {
  return {
    dragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

function Room({ dragSource, isDragging, type, material, wall }) {
  const materialBackground = () => {
    if (material === 'wood') {
      return wood
    } else if (material === 'tile') {
      return tile
    }
  }

  const calcWall = () => {
    if (wall === 'east') return '0 10px 0 0'
    else if (wall === 'south') return '0 0 10px 0'
    else if (wall === 'west') return '0 0 0 10px'
    else if (wall === 'north') return '10px 0 0 0'
    else if (wall === 'northWest') return '10px 0 0 10px'
    else if (wall === 'northEast') return '10px 10px 0 0'
    else if (wall === 'southWest') return '0 0 10px 10px'
    else if (wall === 'southEast') return '0 10px 10px 0'
    else if (wall === 'northSouthEast') return '10px 10px 10px 0'
    else if (wall === 'northSouthWest') return '0 10px 10px 0'
    else if (wall === 'southEastWest') return '0 10px 10px 10px'
    else if (wall === 'northEastWest') return '10px 10px 0 10px'
    else return '0'
  }
  const style = {
    room: {
      boxSizing: 'border-box',
      backgroundImage: `url(${materialBackground()})`,
      backgroundSize: 'cover',
      overflow: 'hidden',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      width: '100%',
      height: '100%',
      opacity: isDragging ? 0 : 1,
      cursor: 'pointer',
      borderColor: '#000',
      borderStyle: 'solid',
      borderWidth: calcWall()
    },
    garden: {
      backgroundColor: 'green',
      width: '80%',
      height: '80%',
      margin: '10% auto',
      opacity: isDragging ? 0 : 1,
      cursor: 'pointer',
      // transform: 'scale(2)',
      transformOrigin: '100% 100%'
    }
    //test the transform origin. make it to where you can not place on edge
    //this will be usefull for special pieces.
    //make different jobs
    //different jobs have different pay rates
    //different jobs have special pieces that you can purchase
    //different jobs pieces give you more money based on some kind of balance
  }
  return dragSource(<div style={style[type]} className="piece" />)
}

export default DragSource(Types.PIECE, spec, collect)(Room)
