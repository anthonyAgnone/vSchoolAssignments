import React, { Component, createContext } from 'react'

const { Consumer, Provider } = createContext()

export default class GameProvider extends Component {
  constructor(props) {
    super(props)
    //this nis where I can get my array from the db to get psoitions of pieces
    this.state = {
      pieces: []
    }
    this.moveTo = this.moveTo.bind(this)
    this.findMissing = this.findMissing.bind(this)
    this.handleAddPiece = this.handleAddPiece.bind(this)
    // this.handleChangeMaterial = this.handleChangeMaterial.bind(this);
  }

  findMissing(A) {
    const set = new Set(A)
    let i = 0
    while (set.has(i)) {
      i++
    }
    return i
  }

  // handleChangeMaterial(id, material) {
  // 	this.setState({
  // 		pieces: [id - 1]

  // 	});
  // }

  //I had an idea that I could make a representation of the state map
  // by loopsing through and places an x in an 8 x 8 grid if the piece position
  // matched the current position when making map. That sounds silly long
  // I took this solution off the internet for now
  handleAddPiece(type, material, wall) {
    const piecePositions = []
    this.state.pieces.map(piece => {
      piecePositions.push(piece.position[0] * 8 + piece.position[1])
    })

    piecePositions.sort(function(a, b) {
      return a - b
    })

    const missingPosition = this.findMissing(piecePositions)

    const posX = Math.floor(missingPosition / 8)
    const posY = missingPosition % 8
    const newPosition = [posX, posY]

    const id = this.state.pieces.length + 1
    const position = newPosition
    const newObject = {
      id: id,
      type: type,
      position: position,
      material: material,
      wall: wall
    }

    const newArray = this.state.pieces.slice()
    newArray.push(newObject)
    this.setState({ pieces: newArray })
  }

  moveTo(x, y, id) {
    this.setState(prevState => ({
      pieces: prevState.pieces.map(piece => {
        if (piece.id === id) {
          return { ...piece, position: [x, y] }
        } else {
          return piece
        }
      })
    }))
  }

  render() {
    const value = {
      ...this.state,
      moveTo: this.moveTo,
      handleAddPiece: this.handleAddPiece
    }
    return <Provider value={value}>{this.props.children}</Provider>
  }
}
export const withGameContext = C => props => <Consumer>{value => <C {...value} {...props} />}</Consumer>
