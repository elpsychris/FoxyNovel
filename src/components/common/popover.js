import React from 'react'

const render = ( header, innerHTML ) => {
    <div className="popover">
        <div className="popover-header">
            {header}
        </div>
        <div className="popover-body">
            {innerHTML}
        </div>
    </div>
}