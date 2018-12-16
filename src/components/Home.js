import React, { Component } from 'react'

class Home extends Component{

    render(){
        // Note how style attributes are now passed as object instead of a string!!!
        return (
        <div style={{float:'left',width:'40%', padding:'5%', backgroundColor:'#00ffd8'}}>
            <h1>Home</h1>
            {this.props.dragons.map((dragon) => {
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