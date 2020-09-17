import React from 'react'
import './Header.css'
import { Avatar } from '@material-ui/core'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SearchIcon from '@material-ui/icons/Search'

function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <Avatar className="header_avatar" alt='Ash Ketchum' src='' />
                <AccessTimeIcon />
            </div>
            <div className="header_center">
                <SearchIcon />
                <input placeholder="Search on slack" />
            </div>
            <div className="header_right">
                <HelpOutlineIcon />
            </div>
        </div>
    )
}

export default Header
