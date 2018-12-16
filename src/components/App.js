import React, { Component } from 'react';
import War from './War'
import Home from './Home'

class App extends Component {

  constructor() {
    super()
    this.state = {
      allDragons: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/dragons')
      .then(resp => resp.json())
      .then(data => this.setState({ allDragons: data }))
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
    
  findDragonIndexById = (id) => {
    return this.state.allDragons.findIndex((item) => item.id === id)
  }
  findDragonById = (id) => {
    return this.state.allDragons.find((item) => item.id === id)
  }

  warToggle = (id) => {
  
    this.setState(state => {
      const dragonIndex= this.findDragonIndexById(id)
      const array = state.allDragons.map((dragon, index) => {
        if (index === dragonIndex) {
          dragon.atWar = !dragon.atWar
          this.saveDragon(dragon)
          return dragon
        } else {
          return dragon
        }
      })
      return {array}
    })
  }

  saveDragon = (dragon) => {
    fetch(`http://localhost:3001/dragons/${dragon.id}`,{
      method: 'PATCH',
      headers: {
        'Content-Type':'application/json'
      },
      body: {dragon}
    } )
  }

  render() {
    return (
      <div>
        <Home dragons = { this.state.allDragons.filter(dragon => !dragon.atWar) } goToWar = {this.warToggle} />
        <War dragons={this.state.allDragons.filter(dragon => dragon.atWar)  } goToHome={this.warToggle} />
      </div>
    );
  }
}

export default App;
