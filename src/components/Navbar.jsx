import React from 'react'
import style from './Navbar.module.css'


function Navbar() {
    return (
        <div className={style.Nav} >
            <ul className={style.mainNav} >
                <h1>Kanban Board</h1>
    
            </ul>
        </div>
    )
}

export default Navbar
