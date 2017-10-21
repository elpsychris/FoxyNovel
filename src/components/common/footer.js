import React, {Component} from 'react'

export default class Footer extends Component {
    constructor() {
        super()
    }

    render() {
        const menus = ["FAQ", "Membership", "Rules", "About"]

        const menuDOM = menus.map(menu => {
            return <div className="nav-foot-menu">{menu}</div>
        })

        return (
            <div id="footer" className="container">
                <div id="left-footer-menu" className="col-sm-8">
                    
                </div>
                <div id="right-footer-menu" className="col-sm-4">
                    <div className="middle-wrapper">
                        {menuDOM}
                        <br/>
                        <span>
                            2017 © Foxy.io, Ltd. All Rights FoxyTeam Reserved.<br/>
                            Hosted by VPSPro
                        </span>
                    </div>
                </div>
            </div>
        )

    }
}