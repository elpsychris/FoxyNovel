import React from 'react'
import WidgetLatestPJ from '../widgets/latestPJ'


export default class MainContent extends React.Component {
    render() {
        return (
            <div className="main-content container-fluid">
                <div className="row">
                    {< WidgetLatestPJ />}
                    {< WidgetLatestPJ />}
                    {< WidgetLatestPJ />}
                </div>
            </div>
        )
    }
}