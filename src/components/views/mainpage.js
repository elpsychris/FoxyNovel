import React from 'react'
import WidgetLatestPJ from '../widgets/latestPJ'


export default class MainPage extends React.Component {
    render() {
        return [
            <div className="main-banner"></div>,

            <div className="main-content container-fluid">
                <div className="row">
                    {< WidgetLatestPJ />}
                    {< WidgetLatestPJ />}
                    {< WidgetLatestPJ />}
                </div>
            </div>
        ]
    }
}