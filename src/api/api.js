import axios from "axios"

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: { 
		"API-KEY": "4589b469-6aad-44d7-bbc4-292bcf69b16e"
	}

})

export const usersAPI = {
	getUsers (currentPage, pageSize) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => response.data)
	},
	followSuccess (userId) {
		return instance.post(`follow/${userId}`)
			.then(response => response.data)
	},

	unfollowSuccess (userId) {
		return instance.delete(`follow/${userId}`)
			.then(response => response.data)
	}
}

export const accountAPI = {
	getAccount (userId) {
		return instance.get(`profile/${userId}`)
			.then(response => response.data)
	},
	getStatus (userId) {
		return instance.get(`profile/status/${userId}`)
		.then(response => response.data)
	},
	updateStatus (status) {
		return instance.put(`profile/status`, {status})
		.then(response => response.data)
	}
}

export const authAPI = {
	authMe () {
		return instance.get(`auth/me`)
			.then(response => response.data)
	},
	login (email, password, rememberMe = false) {
		return instance.post(`auth/login`, {email, password, rememberMe})
			.then(response => response.data)
	},
	logout () {
		return instance.delete(`auth/login`)
			.then(response => response.data)
	}
} 

