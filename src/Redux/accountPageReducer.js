import { accountAPI } from "../api/api"


const ADD_POST = 'frog/account/ADD_POST'
const SET_USERS_ACCOUNT = 'frog/account/SET_USERS_ACCOUNT'
const SET_USERS_STATUS = 'frog/account/SET_USERS_STATUS'

let initialState = {
	posts: [
		{id:1, message:'Hi this is new web frog', likesCount: 15},
		{id:2, message:'This is messenger made in react', likesCount: 11},
		{id:3, message:'Take it', likesCount: 2},
		{id:4, message:'Thanks', likesCount: 333333}
	],
	newPostText: "",
	account: null,
	status: ""
}

const accountPageReducer = (state = initialState, action) => {

	switch (action.type) {
		case ADD_POST: 

			return {
				...state,
				posts: [...state.posts, {id: 5, message: action.newPost, likesCount: 0}]
			}

		case SET_USERS_ACCOUNT: 
			return {
				...state,
				account: action.account
		}

		case SET_USERS_STATUS: 
			return {
				...state,
				status: action.status
		}

		default:
			return state
	}

}

export const addPostActionCreater = (newPost) => ({ type: ADD_POST, newPost })
export const setUserAccount = (account) => ({type: SET_USERS_ACCOUNT, account })
export const setUserStatus = (status) => ({type: SET_USERS_STATUS, status})


export const getAccount = (userId) => async (dispatch) => {
	const data = await accountAPI.getAccount(userId)
		dispatch(setUserAccount(data))
}

export const getStatus = (userId) => async (dispatch) => {
	const data = await accountAPI.getStatus(userId)
		dispatch(setUserStatus(data))
}

export const updateStatus = (status) => async (dispatch) => {
	const data = await accountAPI.updateStatus(status)
		if (data.resultCode === 0) {
			dispatch(setUserStatus(status))
		}
		
}


export default accountPageReducer