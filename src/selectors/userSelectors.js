import {createSelector} from 'reselect'

const getUsersSelector = (state) => {
	return state.usersPage.users
}

export const getUsersSuperSelector = createSelector(getUsersSelector, (users) => {
	return users.filter(u => true)
})