import React , { Component } from 'react'
import SearchBar from './searchbar'

export default class Header extends Component {
    constructor() {
        super()
    }



    render() {
        const MENUS = [
            "Projects",
            "Publish",
            "Membership" 
        ]

        const AUTHS = [
            "Login",
            "Signup"
        ]

        const MENU_DOM = MENUS.map(menu=>{
            return <div className="nav-menu">{menu}</div>
        } )

        const AUTH_DOM = AUTHS.map(auth=>{
            return <div className="auth-menu">{auth}</div>
        } )

        return ([
            <div id="header">
                <div id="header-wrapper">
                    <div id="logo-wrapper">
                        <div id="logo"/>
                        <span>Foxy.io</span>
                    </div>
                    {MENU_DOM}
                    <SearchBar />
                    <div className="auth-wrapper">
                        {AUTH_DOM}
                    </div>
                </div>
            </div>,
            <div className="main-banner"></div>
        ])

    }
}