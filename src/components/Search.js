import React, { Component } from 'react'

export class Search extends Component {

    search = (query) => {
        this.props.searchFilter(query)
    }

    render() {
        return (
            <form>
                <input placeholder="filter by name" onChange={e => this.search(e.target.value)} />
            </form>
        )
    }
}