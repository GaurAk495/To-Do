import { configureStore } from '@reduxjs/toolkit';
import logReducer from './logSlice'
import taskReducer from './taskSlice'

const store = configureStore({
    reducer: {
        logStatus: logReducer,
        tasksStore: taskReducer,
    },
});

export default store