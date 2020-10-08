const ADD_APPOINTMENT = "ADD_APPOINTMENT"
const DELETE_APPOINTMENT = "DELETE_APPOINTMENT"
const SET_CONFIRM_VALUES = "SET_CONFIRM_VALUES"
const TOGGLE_APPOINTMENT = "TOGGLE_APPOINTMENT"


const initialState = {
    list: [],
    confirmValues: null
}

export const appointmentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_APPOINTMENT: {
            const newAppoint = {
                id: state.list?.length + 1 || 1,
                ...action.payload
            }

            return {
                ...state,
                confirmValues: null,
                completed: false,
                list: [newAppoint, ...state.list]
            }
        }
        case TOGGLE_APPOINTMENT: {
            return {
                ...state,
                list: state.list.map(i => i.id === action.payload ? { ...i, i: !i.completed } : i)
            }
        }
        case DELETE_APPOINTMENT: {
            return {...state, list: state.list.filter(item => item.id !== action.payload)}
        }
        case SET_CONFIRM_VALUES: {
            console.log(action.payload)
            return {...state, confirmValues: action.payload}
        }
        default:
            return state
    }
}


export const addAppointment = (item) => ({
    type: ADD_APPOINTMENT,
    payload: item
})

export const deleteAppointment = (id) => ({
    type: DELETE_APPOINTMENT,
    payload: id
})
export const toggleAppointment = (id) => ({
    type: TOGGLE_APPOINTMENT,
    payload: id
})

export const setConfirmValues = (values) => ({
    type: SET_CONFIRM_VALUES,
    payload: values
})

