import React, { Component } from 'react'

export default class ImageInfoBox extends Component {
    
    render() {
        return (
            <div className={ this.props.class }>
                <img src={ this.props.imgUrl }/>
                {/* <div className="content">
                    <li><b>Views: </b>1000</li>
                    <li><b>Rating: </b>4.0</li>
                </div> */}
            </div>
        )
    }
}