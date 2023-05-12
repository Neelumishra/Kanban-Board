import { configureStore, createSlice } from "@reduxjs/toolkit";

export const todolist = createSlice({
  initialState:{
    list: []
  },
  name: "Todo",
  reducers: {
    onlist: (state, action) => {
        state.list.push(action.payload)
     
         console.log(action);
  
    },
    addCard:(state,action)=>{
      console.log(action)
      state.list.forEach((item)=>{
        if(item.id===action.payload.parentId){
          if(Object.hasOwn(item,"children")){
            item.children.push(action.payload)
          }else{
            item.children=[]
              item.children.push(action.payload);
          }
        }
      })
    }
 
  },
});
export const store = configureStore({
  reducer: {
    Todo: todolist.reducer,
  
  },
});