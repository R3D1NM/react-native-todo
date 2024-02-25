import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name:"todo",
    initialState:{
        currentId: 0,
        todos: []
    },
    reducers:{
        addTodo: (state,action) =>{
            state.todos.push({
                id: state.currentId++,
                text: action.payload.trim(),
                state: 'todo'
            })
        },
        updateTodo: (state,action) =>{
            const idx = state.todos.findIndex((item)=> item.id === action.payload)
            state.todos[idx].state = state.todos[idx].state === 'todo'?'done':'todo'
            state.todos.push(state.todos.splice(idx,1)[0])
        },
        deleteTodo: (state,action) =>{
            const idx = state.todos.findIndex((item)=>item.id === action.payload)
            if(idx > -1) { // if found
                state.todos.splice(idx,1)
            }
        }
    }
})

export const {addTodo,updateTodo,deleteTodo} = todoSlice.actions
export default todoSlice.reducer