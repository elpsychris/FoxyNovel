import React , { Component } from 'react'

export default class Header extends Component {
    constructor() {
        super()
    }



    render() {
        const menus = [
            "Mainpage",
            "Projects",
            "Schedule",
            "Membership",
            "Join Us"  
        ]


        const menuDOM = menus.map(menu=>{
            return <div className="nav-menu">{menu}</div>
        } )

        return ([
            <div id="header">
                {menuDOM}
            </div>,
            <div className="main-banner"></div>
        ])

    }
}