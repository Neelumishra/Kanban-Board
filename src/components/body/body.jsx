import React from 'react'
import List from "../list/list"
function Body() {
  return (
    <div style={{width:"100%", padding:"3px"}}>
      <div style={{display:"flex",gap:"3px", flexWrap: "wrap"}}>
       <List />
      </div>
    </div>
  );
}

export default Body