import React , { Component } from 'react'
import SearchBar from './Searchbar'
import { Link } from 'react-router-dom'

const ava = require('../images/chiba_dog.jpg')
const TEST_GUESS_INFO = {
    username: "You",
    ava: ava,
    status: 1
}

export default class Header extends Component {
    constructor() {
        super()
    }



    render() {
        const isAuthenticated = true;
        const MENUS = [
            <Link to='Projects'>{'Projects'}</Link>,
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

        const SETTING_DOM = <img className="cur-user-ava" src={TEST_GUESS_INFO.ava}/>

        return ([
            <div id="header">
                <div id="header-wrapper">
                    <div className="left-header">
                        <div id="logo-wrapper">
                        <div id="logo"/>
                            <span><Link to=''>Foxy.io</Link></span>
                        </div>
                        {MENU_DOM}
                    </div>
                    <div className="right-header">
                        <SearchBar />
                        <div className="auth-wrapper">
                                {isAuthenticated?SETTING_DOM:AUTH_DOM}
                        </div>
                    </div>
                </div>
            </div>,
        ])

    }
}