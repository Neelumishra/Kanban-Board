import React from 'react'
import style from './Navbar.module.css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import BoltIcon from '@mui/icons-material/Bolt';

import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import FilterListIcon from '@mui/icons-material/FilterList'; 
import ShareIcon from '@mui/icons-material/Share';
import GroupIcon from '@mui/icons-material/Group';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

function Navbar() {
    return (
        <div className={style.Nav} >
            <ul className={style.mainNav} >
                <h2>Home Task Management</h2>
                <li> <GroupIcon /> Workplace Visible</li>
                <button><SportsEsportsIcon/>  Board</button>
                <li> <TrendingUpIcon /> power ups</li>
                <li><BoltIcon />Automation</li>
                <li> <FilterListIcon /> Filter</li>
                <li><ShareIcon /> Share</li>
                <li><MoreHorizIcon /></li>
            </ul>
        </div>
    )
}

export default Navbar
