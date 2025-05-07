import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: 'task',
    initialState: [],
    reducers: {
        fetchTodos: (_, action) => {
            return action.payload;
        },
        addTaskItem: (state, action) => {
            state.unshift(action.payload)
        },
        deleteTask: (state, action) => {
            const index = state.findIndex(task => task._id === action.payload.deleteTaskId);
            if (index !== -1) {
                state.splice(index, 1);
            }
        },
        update: (state, action) => {
            const index = state.findIndex(task => task._id === action.payload._id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
        patch: (state, action) => {
            const index = state.findIndex(task => task._id === action.payload._id);
            if (index !== -1) {
                state[index].completed = action.payload.completed;
            }
        },
        clearAllTasks: (state, action) => {
            return action.payload
        }

    }
})

export const { fetchTodos, addTaskItem, deleteTask, update, patch, clearAllTasks } = taskSlice.actions
export default taskSlice.reducer