import React, { useState ,useEffect} from "react";
import "./list.css"
import Cards from "../cards/cards";
import AddNew from "../AddNew/addNew";
import { useSelector } from "react-redux";
import { Draggable, Droppable } from "react-beautiful-dnd";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { todolist } from "../../store/store";
import { v4 as uuidv4 } from "uuid";
import { func } from "prop-types";

function List() {
  const [editableTitle, setEditableTitle] = useState(""); 
  const [focusedListId, setFocusedListId] = useState(null);
 
  const dispatch = useDispatch();
  const list = useSelector((state) => {
    return state.Todo.list;
  });

function handleTitle(listId) {
  setFocusedListId(listId);
}

  function handlelistchange(listid,event) {
    setEditableTitle(event.target.value)
     dispatch(
       todolist.actions.onUpdateList({
         id: listid,
         listInputValue: event.target.value,
       })
     );

  }
  function handleRemove(data) {
    dispatch(todolist.actions.onremoveList(data));
  }
  return (
    <>
      {list?.length > 0 &&
        list?.map((e) => (
          <Droppable droppableId={e.id} key={uuidv4()}>
            {(provided) => (
              <div
                key={uuidv4()}
                style={{ width: "20%", padding: "5px" }}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <div
                  style={{
                    padding: "1rem",
                    color: "black",
                    backgroundColor: "#e8d0bf",
                  }}
                >
                  <div
                    key={e.id}
                    style={{
                      paddingLeft: "1rem",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <input
                      onChange={(event) => handlelistchange(e.id, event)}
                      onClick={()=>handleTitle(e.id)}
                      value={e.title}
                      className="InputTitle"
                      autoFocus={focusedListId === e.id}
                      style={{
                        border: "none",
                        backgroundColor: "#e8d0bf",
                        fontWeight: "bold",
                        fontSize: "1rem",
                        width: "8rem",
                      }}
                    />

                    <span>
                      <DeleteIcon
                        sx={{ marginRight: "1.2rem" }}
                        onClick={() => handleRemove(e)}
                      />
                    </span>
                  </div>
                  {e?.children?.length > 0 &&
                    e.children.map((children, i) => (
                      <Draggable
                        key={children.id}
                        draggableId={children.id}
                        index={i}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.dragHandleProps}
                            {...provided.draggableProps}
                          >
                            <Cards key={children.id} cardInfo={children} />
                          </div>
                        )}
                      </Draggable>
                    ))}
                  <div>
                    <AddNew type="card" parentId={e.id} />
                  </div>
                </div>
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}

      <div>
        <div>
          <AddNew />
        </div>
      </div>
    </>
  );
}

export default List;
