import React from 'react';
const ava = require('../images/chiba_dog.jpg')

const TEST_GUESS_INFO = {
    username: "You",
    ava: ava,
    status: 1
}

const FRIENDLIST = [
    {
        username: "Guest",
        ava: ava,
        status: 1
    },
    {
        username: "Guest Two",
        ava: ava,
        status: 1
    },
    {
        username: "Test Guest",
        ava: ava,
        status: 1
    },
    {
        username: "Guest",
        ava: ava,
        status: 0
    },
    {
        username: "Guest Two",
        ava: ava,
        status: 1
    },
    {
        username: "Test Guest",
        ava: ava,
        status: 0
    },
    {
        username: "Guest",
        ava: ava,
        status: 1
    },
    {
        username: "Guest Two",
        ava: ava,
        status: 0
    },
    {
        username: "Test Guest",
        ava: ava,
        status: 1
    }
]

export default class SideWidget extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isHidden: false
        }
    }

    componentWillReceiveProps(nextProps) {
        
    }


    render() {
        return (
            <div ref={el => this.sideWidget = el } className="side-widget">
                <div className="friend-list sub-widget">
                    <span>Friends</span>
                    {FRIENDLIST.map(friend => {
                        return this.renderUserComp(friend, friend.id)
                    })}
                </div>
            </div>
        )
    }

    renderUserComp(userInfo, key) {
        let userStatus = userInfo.status==1?"online":"offline"
        return (
            <li key={key} className={"user-chat-info " + userStatus}>
                <img className="user-ava" src={userInfo.ava}/>
                <div className="user-name">{userInfo.username}</div>
            </li>
        )
    }

    // Event handlers
    onHide() {
        this.sideWidget.style.right = "-300px";
    }
}