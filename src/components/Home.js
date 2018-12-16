import React, { Component } from 'react'
import { Search } from './Search'

class Home extends Component{

    constructor(props) {
        super(props)
        console.log('inside the constructor',this.props.dragons)
        this.state = {
            filteredDragons: this.props.dragons
        }
    }

    searchFilter = (query) => {
        console.log('query is',query)
        this.setState(state => {
            console.log('filteredDragons has', this.state.filteredDragons)
            this.setState = (state => {
                state.filteredDragons = this.props.dragons.filter(dragon =>{
                    const result = dragon.name.search(query)
                    if (result === -1) {
                        return false
                    } else {
                        return true
                    }
                })
                return state
            })    
        })
    }

    render(){
        // Note how style attributes are now passed as object instead of a string!!!
        console.log('in the render', this.props.dragons)
        return (
        <div style={{float:'left',width:'40%', padding:'5%', backgroundColor:'#00ffd8'}}>
            <h1>Home</h1>
            <Search searchFilter = {this.searchFilter} />
            {this.state.filteredDragons.map((dragon) => {
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