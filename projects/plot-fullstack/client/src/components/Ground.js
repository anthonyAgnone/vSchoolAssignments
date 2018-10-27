import React from 'react'

import Room from './Room'
import Grid from './Grid'

import bg from '../assets/grass3.png'

import { withGameContext } from './GameProvider'

function Ground({ n, position, timestamp, pieces }) {
  const groundColors = ['#1f2b0e', '#8ec63f', '#edc672', '#783938']
  const style = {
    ground: {
      backgroundImage: `url(${bg})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundColor: groundColors[timestamp],
      height: '100vh',
      width: '100vh',
      position: 'absolute',
      top: '5vh',
      left: '50%',
      transform: 'translateX(-50%) rotateX(60deg) rotateY(0deg) rotateZ(-45deg)',
      transition: 'all 2s ease',
      display: 'flex',
      flexWrap: 'wrap',
      border: '10px solid black'
    }
  }
  // const [x, y] = position;
  const genGrid = n => {
    const grid = []
    for (let i = 0; i < n * n; i++) {
      const squareX = i % n
      const squareY = Math.floor(i / n)
      const piece = pieces.reduce((acc, p) => {
        if (squareX === p.position[0] && squareY === p.position[1]) {
          return <Room wall={p.wall} material={p.material} id={p.id} type={p.type} />
        } else {
          return acc
        }
      }, null)

      grid.push(
        <Grid x={squareX} y={squareY} key={i}>
          {piece}
        </Grid>
      )
    }
    return grid
  }
  return (
    <div style={style.ground} className="board-wrapper">
      {genGrid(n)}
    </div>
  )
}

export default withGameContext(Ground)