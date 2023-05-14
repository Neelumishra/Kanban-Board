import React from 'react'
import List from "../list/list"
import { DragDropContext } from 'react-beautiful-dnd';
import { todolist } from "../../store/store";
import {  useSelector } from "react-redux";
import { useDispatch } from "react-redux";
function Body() {
 const dispatch = useDispatch();
  const list = useSelector((state) => {
    return state.Todo.list;
  });

  function handleDragEnd(result){
    console.log(result);
    // Extract source and destination id from result
    const sourceId = result.source.droppableId;
    const destinationId = result.destination.droppableId;

    //find source id in list
    //---source.children extract the index object
    // delet the child from object of list(surce)
    let holder1 = {}
    list.map((e) => {
      if (e.id == sourceId) {
        holder1 = e.children[result.source.index];
        dispatch(
          todolist.actions.removechild({
            childIndex: result.source.index,
            parentId: e.id,
          })
        );
        dispatch(
          todolist.actions.reassign({
            destination: destinationId,
            add: holder1,
            insertIndex: result.destination.index
          })
        );
      }
    });

    

    // push the holder to destination's childen inside



  }
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div style={{ width: "100%", padding: "3px" }}>
        <div style={{ display: "flex", gap: "3rem", flexWrap: "wrap" }}>
          <List />
        </div>
      </div>
    </DragDropContext>
  );
}

export default Body