import React from 'react'

export default class ProjectMiniPanel extends React.Component {
    render() {
        return (
            <div className="project-mini-panel">
                <div className="panel-header">Re: Zero</div>
                <div className="panel-small">
                    <div className="panel-small-header">Translators</div>
                    <table className="panel-small-content">
                        <tr>
                            <td>Chapter 1</td>
                            <td>8 hours ago</td>
                        </tr>
                        <tr>
                            <td>Prologue</td>
                            <td>2 days ago</td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}