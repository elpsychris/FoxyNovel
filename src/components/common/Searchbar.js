import React, { Component } from 'react'

export default class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchType: "1"
        }
    } 

    render() {
        return (<div className="search-bar-wrapper">
            <div className="search-type" onClick={e=>this.onShowSearchType(e)}>
                <span>type 1</span>
                <ul ref={el=>this.dropbox=el}>
                    <li 
                        onClick={e=>this.onChooseSearchType(e)} key="1">All</li>
                    <li onClick={e=>this.onChooseSearchType(e)} key="2">Project</li>
                    <li onClick={e=>this.onChooseSearchType(e)} key="3">Translator</li>
                    <li onClick={e=>this.onChooseSearchType(e)} key="4">Artist</li>
                    <li onClick={e=>this.onChooseSearchType(e)} key="5">Editor</li>
                    <li onClick={e=>this.onChooseSearchType(e)} key="6">Publisher</li>
                    <li onClick={e=>this.onChooseSearchType(e)} key="7">Team</li>
                </ul>
            </div>
            <input placeholder="Search" type="text" className="search-bar"/>
        </div>)
    }

    onShowSearchType(e) {
        if (this.dropbox.style != "none") {
            console.log("parent")
            this.dropbox.style.display = "block";
        }
    }

    onChooseSearchType(e) {
        console.log("child")
        this.dropbox.style.display = "none";
        e.stopPropagation();        
    }
}