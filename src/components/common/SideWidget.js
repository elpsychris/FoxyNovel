import React from 'react';

const TEST_GUESS_INFO = {
    username: "You",
    ava: "./images/chiba_dog.jpg",
    status: 1
}

const FRIENDLIST = [
    {
        username: "Guest",
        ava: "../images/chiba_dog.jpg",
        status: 1
    },
    {
        username: "Guest Two",
        ava: "../images/chiba_dog.jpg",
        status: 1
    },
    {
        username: "Test Guest",
        ava: "../images/chiba_dog.jpg",
        status: 1
    },
    {
        username: "Guest",
        ava: "../images/chiba_dog.jpg",
        status: 0
    },
    {
        username: "Guest Two",
        ava: "../images/chiba_dog.jpg",
        status: 1
    },
    {
        username: "Test Guest",
        ava: "../images/chiba_dog.jpg",
        status: 0
    },
    {
        username: "Guest",
        ava: "../images/chiba_dog.jpg",
        status: 1
    },
    {
        username: "Guest Two",
        ava: "../images/chiba_dog.jpg",
        status: 0
    },
    {
        username: "Test Guest",
        ava: "../images/chiba_dog.jpg",
        status: 1
    }
]

export default class SideWidget extends React.Component {
    render() {
        return (
            <div className="side-widget">
                <div className="cur-user">
                    {this.renderUserComp(TEST_GUESS_INFO)}
                </div>
                <div className="friend-list">
                    {FRIENDLIST.map(friend => {
                        this.renderUserComp(friend)
                    })}
                </div>
            </div>
        )
    }

    renderUserComp(userInfo) {
        let userStatus = userInfo.status==1?"online":"offline"
        return (
            <div className="user-chat-info">
                <img className={"user-ava " + userStatus} src={userInfo.ava}/>
                <div className="user-name">{userInfo.username}</div>
            </div>
        )
    }
}