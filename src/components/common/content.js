import React from 'react'
import WidgetLatestPJ from '../widgets/latestPJ'
import * as Views from '../views/index'
import { Switch, Route } from 'react-router-dom'


export default class MainContent extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={ Views.MainPage }></Route>
            </Switch>
        )
    }
}