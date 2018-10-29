import React, { Component } from 'react'
import { withGameContext } from './GameProvider'
import HamburgerMenu from 'react-hamburger-menu'

import '../assets/css/createForm.css'

class PieceManip extends Component {
  constructor() {
    super()

    this.state = {
      type: '',
      material: '',
      walls: null,
      open: true
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleOpen = this.handleOpen.bind(this)
  }

  handleChange(event) {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  handleOpen() {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    const style = {
      manipWrapper: {
        right: this.state.open ? '0' : '-20vw'
      }
    }
    const handleMaterialForm = () => {
      if (this.state.type !== 'room') {
        return null
      } else {
        return (
          <select name="material" value={this.state.material} onChange={this.handleChange}>
            <option value="">Choose Material</option>
            <option value="wood">Wood</option>
            <option value="tile">Tile</option>
          </select>
        )
      }
    }
    return (
      <div className="form-wrapper" style={style.manipWrapper}>
        <HamburgerMenu
          isOpen={this.state.open}
          menuClicked={this.handleOpen}
          width={30}
          height={30}
          strokeWidth={3}
          animationDuration={0.5}
        />
        <div className="form-wrap">
          <h2>Create Piece</h2>
          <form onSubmit={this.handleSubmit}>
            <select name="type" value={this.state.type} onChange={this.handleChange}>
              <option value="null">Type of Piece</option>
              <option value="room">Room</option>
              <option value="garden">Garden</option>
            </select>
            {handleMaterialForm()}
          </form>
          <button
            className="button"
            onClick={() => this.props.handleAddPiece(this.state.type, this.state.material, this.state.walls)}>
            <span>Make Room</span>
          </button>
        </div>
      </div>
    )
  }
}

export default withGameContext(PieceManip)
