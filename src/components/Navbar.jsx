import React from 'react'
import style from './Navbar.module.css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function Navbar() {
    return (
        <div className={style.Nav} >
            <ul className={style.mainNav} >
                <h2>Home Task Management</h2>
                <li>Workplace Visible</li>
                <button>Board</button>
                <li> power ups</li>
                <li>Automation</li>
                <li>Filter</li>
                <li>Share</li>
                <li><MoreHorizIcon/></li>
            </ul>
        </div>
    )
}

export default Navbar
