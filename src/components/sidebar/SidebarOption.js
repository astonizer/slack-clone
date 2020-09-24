import React from 'react'
import '../styles/SidebarOption.css'
import { useHistory } from 'react-router-dom'
import db from '../../fbConfig'

function SidebarOption({ Icon, title, id, addChannelOption }) {
    const history = useHistory()

    const selectChannel = () => {
        if(id) {
            history.push(`/channels/${id}`)
        } else {
            history.push(title)
        }
    }

    const addChannel = () => {
        let channelName = prompt("Please enter new channel name")
        if(channelName) {
            db.collection('channels').add({
                name: channelName
            })
        }
    }
    return (
        <div className="sidebarOption" onClick={addChannelOption ? addChannel : selectChannel} >
            { Icon && <Icon className="sidebarOption_icon"/> }
            { Icon ? (
                <h3>
                    {title}     {/* Thread component */}
                </h3>
            ) : (
                <h3 className="sidebarOption_channel">
                    <span className="sidebarOption_hash">#</span>{title}   {/* Channel component */}
                </h3>
            ) }
        </div>
    )
}

export default SidebarOption
