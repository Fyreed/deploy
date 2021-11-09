let initialState = {
	frends: [
		{id: 1, name: 'Nock Nock', avatar: 'https://assets.rpgsite.net/images/images/000/070/785/article/Nok-NokSmall.png'},
		{id: 2, name: 'Team Lid', avatar: 'https://assets.rpgsite.net/images/images/000/070/785/article/Nok-NokSmall.png'},
		{id: 3, name: 'H R', avatar: 'https://assets.rpgsite.net/images/images/000/070/785/article/Nok-NokSmall.png'}
	]
}


const sidebarReducer = (state = initialState, action) => {

	let stateCopy = {...state}

	return stateCopy
}

export default sidebarReducer