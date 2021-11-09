import { getAuthMe } from "./authReducer"

const SET_INITIALIZATION = 'frog/app/SET_INITIALIZATION'

let initialState = {
	initialization: false
}

const appReducer = (state = initialState, action) => {


	switch (action.type) {
		
		case SET_INITIALIZATION:{
			return {
				...state,
				initialization: true
			}
		}
			
			
		default:
			return state
	}

}

export const isInitialization = () => ({ type: SET_INITIALIZATION})

export const initializeApp = () => async (dispatch) => {
	await dispatch(getAuthMe())
		dispatch(isInitialization())
	
}


export default appReducer