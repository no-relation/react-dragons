import React, { Component } from 'react'
import { Search } from './Search'

class Home extends Component{

    constructor(props) {
        super(props)
        this.state = {
            query: ''
        }
    }

    searchFilter = (query) => {
        this.setState(state => {
            state.query = query
            return state
        })
    }

    render(){
        let filteredDragons = this.props.dragons.filter(dragon => {
            const result = dragon.name.toLowerCase().search(this.state.query.toLowerCase())
            if (result === -1) {
                return false
            } else {
                return true
            }
        })    
        // Note how style attributes are now passed as object instead of a string!!!
        return (
        <div style={{float:'left',width:'40%', padding:'5%', backgroundColor:'#00ffd8'}}>
            <h1>Home</h1>
            <Search searchFilter = {this.searchFilter} />
            {filteredDragons.map((dragon) => {
                return(
                    <div key={dragon.id} >
                        <h2 onClick={() => this.props.goToWar(dragon.id, dragon.atWar)} >{dragon.name}</h2>
                        <h4>{dragon.description} </h4>
                        <img src={dragon.image} width='250' alt={dragon.name} />
                    </div>
                )
            })}
        </div>
        )
    }

}

export default Home