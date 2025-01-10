import { configureStore } from '@reduxjs/toolkit'
// import todosReducer from '../features/todos/todosSlice'
// import filtersReducer from '../features/filters/filtersSlice'
import customerReducer from './redux/slices/customerSlice'

export const store = configureStore({
  reducer: {
    // todos: todosReducer,
    // filters: filtersReducer,
     customer : customerReducer
  },
})