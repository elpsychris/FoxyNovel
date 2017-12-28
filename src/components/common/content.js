import React from 'react'
import WidgetLatestPJ from '../widgets/LatestPJ'
import SideWidget from '../common/SideWidget'

import * as Views from '../views/index'

import { Switch, Route } from 'react-router-dom'


export default class MainContent extends React.Component {
    render() {
        return (
            <div className="body-content">
                <Switch>
                    <Route exact path='/' component={ Views.MainPage }></Route>
                    <Route path='/Projects' component= { Views.ProjectInfo}></Route>
                </Switch>
                <SideWidget/>
            </div>
        )
    }
}