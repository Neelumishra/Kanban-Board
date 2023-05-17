import { configureStore, createSlice } from "@reduxjs/toolkit";

export const todolist = createSlice({
 
  initialState: JSON.parse(localStorage.getItem("list")) ||{
    list:  [],
  },
  name: "Todo",
  reducers: {
    onlist: (state, action) => {
      state.list.push(action.payload);
      localStorage.setItem("list", JSON.stringify(state));
    },
    removechild: (state, action) => {
      const { childIndex, parentId } = action.payload;
      state.list.map((e) => {
        if (e.id === parentId) {
          e.children.splice(childIndex, 1);
        }
      });
      localStorage.setItem("list", JSON.stringify(state));
    },
    onremoveList: (state, action) => {
      const { id } = action.payload;
      state?.list.map((e, index) => {
        if (e.id === id) {
          state.list.splice(index, 1);
        }
      });
      localStorage.setItem("list", JSON.stringify(state));
    },
    onremove: (state, action) => {
      const { id } = action.payload;
      state?.list?.map((e) => {
        e?.children?.map((child, index) => {
          if (child.id == id) {
            e?.children.splice(index, 1);
          }
        });
      });
      localStorage.setItem("list", JSON.stringify(state));
    },
    reassign: (state, action) => {
      const { destination, add, insertIndex } = action.payload;
      state.list.map((e) => {
        if (e.id == destination) {
          e.children.splice(insertIndex, 0, add);
        }
      });
      localStorage.setItem("list", JSON.stringify(state));
    },
    addCard: (state, action) => {
      console.log(action);
      state.list.forEach((item) => {
        if (item.id === action.payload.parentId) {
          if (Object.hasOwn(item, "children")) {
            //if (item['childen'])
            item.children.push(action.payload);
          } else {
            item.children = [];
            item.children.push(action.payload);
          }
        }
      });
      localStorage.setItem("list", JSON.stringify(state));
    },
    onUpdate: (state, action) => {
      const { childId, value } = action.payload;
      state.list.map((e) => {
        e?.children?.map((child) => {
          if (child.id === childId) {
            child.title = value;
          }
        });
      });
      localStorage.setItem("list", JSON.stringify(state));
    },
  },
});
export const store = configureStore({
  reducer: {
    Todo: todolist.reducer,
  
  },
});