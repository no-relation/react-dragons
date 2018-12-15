import React, { Component } from 'react';
import War from './War'
import Home from './Home'

class App extends Component {

  constructor() {
    this.state = {
      homeDragons: [],
      warDragons: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/dragons')
      .then(resp => resp.json())
      .then(data => this.dragonSort(data))
    }
    
  dragonSort = (array) => {
    array.forEach((dragon)=>{
      if (dragon.atWar) { 
        this.setState(state => {
          state.warDragons = [...this.state.warDragons,dragon]
          return state
        })
      } else {
        this.setState(state => {
          state.homeDragons = [...this.state.homeDragons,dragon]
          return state
        })
      }
    })
  }
    
  findDragonById = (id, array) => {
    return array.find((item) => item.id == id)
  }

  warToggle = (id, atWar) => {
    let dragonArray;
    let otherArray;
    
    if (atWar) {
      dragonArray = this.state.warDragons
      otherArray = this.state.homeDragons
    } else {
      dragonArray = this.state.homeDragons
      otherArray = this.state.warDragons
    }
    dragon = this.findDragonById(id, dragonArray)

    const deleteIndex = dragonArray.findIndex(dragon)

    dragonArray.splice(deleteIndex,1)
    otherArray.push(dragon)
  }

  render() {
    return (
      <div>
        <Home dragons = {this.state.homeDragons} goToWar = {this.warToggle} />
        <War dragons={this.state.warDragons} goToWar={this.warToggle} />
      </div>
    );
  }
}

export default App;
