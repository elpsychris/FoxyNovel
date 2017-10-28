import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (<div className="search-bar-wrapper">
            <input placeholder="Search by title, author, etc." type="text" className="search-bar"/>
        </div>)
    }
}