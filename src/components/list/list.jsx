import React from "react";
import Cards from "../cards/cards";
import AddNew from "../AddNew/addNew";
import { useSelector } from "react-redux";
import { Draggable, Droppable } from "react-beautiful-dnd";



function List() {
  const list = useSelector((state) => {
    return state.Todo.list;
  });

  return (
    <>
      {list.length > 0 &&
        list.map((e) => (
          <Droppable droppableId={e.id}>
            {(provided) => (
              <div
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
                  <div key={e.id}>
                    <h3 style={{ textAlign: "center" }}>{e.title}</h3>
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
                           
                              {" "}
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
