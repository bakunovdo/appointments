import {createStore} from "redux";
import { combineReducers } from 'redux'
import {appointmentsReducer} from './appointReducer'

const persistedState = localStorage.getItem('reduxState')
    ? JSON.parse(localStorage.getItem('reduxState'))
    : {}


const reducers = combineReducers({
    appointments: appointmentsReducer
})

export const store = createStore(reducers, persistedState)

store.subscribe(()=>{
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})