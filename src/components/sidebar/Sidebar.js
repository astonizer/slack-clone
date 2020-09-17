import React from 'react'
import '../styles/Sidebar.css'
import FibreManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import CreateIcon from '@material-ui/icons/Create'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <div className="sidebar_info">
                    <h2>Ash Ketchum</h2>
                    <h3>
                        <FibreManualRecordIcon />
                        Jake Sully
                    </h3>
                </div>
                <CreateIcon />
            </div>
        </div>
    )
}

export default Sidebar
