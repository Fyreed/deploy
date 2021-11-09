import { usersAPI } from "../api/api"


const FOLLOW = 'frog/users/FOLLOW'
const UNFOLLOW = 'frog/users/UNFOLLOW'
const SET_USERS = 'frog/users/SET_USERS'
const SET_CURRENT_PAGE = 'frog/users/SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'frog/users/SET_TOTAL_USERS_COUNT'
const SET_IS_FETCHING = 'frog/users/SET_IS_FETCHING'
const TOGGLE_FOLLOWING_IS_PROGRESS = 'frog/users/TOGGLE_FOLLOWING_IS_PROGRESS'

let initialState = {
	users: [],
	pageSize: 15,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false,
	followingIsProgress: []
}


const usersReducer = (state = initialState, action) => {

	const subscription = (folowed) => {
		
		return state.users.map( u => {
			return u.id === action.userId ? {...u, followed: folowed} : u
		})
	}

	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: subscription(true)
			}

		case UNFOLLOW:
			return {
				...state,
				users: subscription(false)
			}
		case SET_USERS:
			return {
				...state,
				users: action.users
			}

		case SET_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.currentPage
			}

		case SET_TOTAL_USERS_COUNT:
			return {
				...state,
				totalUsersCount: action.totalUsersCount
			}

		case SET_IS_FETCHING:
			return {
				...state,
				isFetching: action.isFetching
			}

		case TOGGLE_FOLLOWING_IS_PROGRESS:
			return {
				...state,
				followingIsProgress: action.isFetching
					? [...state.followingIsProgress, action.userId]
					: state.followingIsProgress.filter(id => id != action.userId)
			}


		default:

			return state
	}

}

export const followSuccess = (userId) => ({ type: FOLLOW, userId })
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount })
export const setIsFetching = (isFetching) => ({ type: SET_IS_FETCHING, isFetching })
export const toggleFollowingIsProgress = (isFetching, userId) => ({ type: TOGGLE_FOLLOWING_IS_PROGRESS, isFetching, userId })


export const getUsers = (currentPage, pageSize) => async (dispatch) => {
	dispatch(setIsFetching(true))
	const data = await usersAPI.getUsers(currentPage, pageSize)
	dispatch(setIsFetching(false))
	dispatch(setCurrentPage(currentPage))
	dispatch(setUsers(data.items))
	dispatch(setTotalUsersCount(data.totalCount))
}

const follUnfollFlow = async (userId, dispatch, apiMethod, actionCreator) => {

	dispatch(toggleFollowingIsProgress(true, userId))
	const data = await apiMethod(userId)
	if (data.resultCode === 0) dispatch(actionCreator(userId))
	dispatch(toggleFollowingIsProgress(false, userId))
}

export const follow = (userId) => async (dispatch) => {
	follUnfollFlow(userId, dispatch, usersAPI.followSuccess.bind(usersAPI), followSuccess)
}

export const unfollow = (userId) => async (dispatch) => {
	follUnfollFlow(userId, dispatch, usersAPI.unfollowSuccess.bind(usersAPI), unfollowSuccess)
}

export default usersReducer