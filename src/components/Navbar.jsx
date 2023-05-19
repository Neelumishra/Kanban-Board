import React from 'react'
import style from './Navbar.module.css';



function Navbar(props) {

 
    
    
    // const images =[
    //     {
    //         "id":"1"
    //         "url":"https://cdn.pixabay.com/photo/2023/05/13/16/40/landscape-7990899_1280.jpg"
    //     },
    //     {
    //         "id":"2"
    //         "url":"https://cdn.https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg.com/photo/2023/05/13/16/40/landscape-7990899_1280.jpg" 
    //     },
    // ]
  
    
    return (
      <div>
        <div className={style.Nav}>
          <div className={style.mainNav}>
            <h2>Kanban Board</h2>
            <button onClick={props.handleBgChange}>Change Background</button>
           
          </div>
        </div>
      </div>
    );
}

export default Navbar
