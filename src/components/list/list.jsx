import React from "react";
import Cards from "../cards/cards";
import AddNew from "../AddNew/addNew";
import { useSelector } from "react-redux";
function List() {
  const list = useSelector((state) => {
    return state.Todo.list;
  });

  return (
    
    <>
      {list.length > 0 &&
        list.map((e) => (
          <div style={{ width: "20%", padding: "5px" }}>
            <div
              style={{
                padding: "1rem",

                color: "black",
                backgroundColor: "#f1f2f4",
              }}
            >
              <div key={e.id}>
                <h3 style={{ textAlign: "center" }}>{e.title}</h3>
              </div>
              {e?.children?.length > 0 &&
                e.children.map((children) => (
                  <Cards key={children.id} cardInfo={children} />
                ))}
              <div>
                <AddNew type="card" parentId={e.id} />
              </div>
            </div>
          </div>
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
