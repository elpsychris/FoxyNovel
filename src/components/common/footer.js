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
                <div className="row footer-page-info">

                </div>
                <div className="row footer-page-nav">
                    <div id="left-footer-menu" className="col-sm-8">
                        <p>Contributors:</p>
                        <div className="contributor-list">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div id="right-footer-menu" className="col-sm-4">
                        <div className="middle-wrapper">
                            {menuDOM}
                            <br/>
                            <p>
                                2017 © Foxy.io, Ltd. All Rights FoxyTeam Reserved.</p>
                            <p>
                                Hosted by VPSPro
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}