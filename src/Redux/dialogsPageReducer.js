const ADD_MESSAGE = 'frog/dialogs/ADD_MESSAGE'

let initialState = {
	dialogs: [
			
		{id:1, name:'Nock Nock'},
		{id:2, name:'Frog Knock'},
		{id:3, name:'Tech Nology'},
		{id:4, name:'Team Lid'},
		{id:5, name:'H R'}
	],

	messages: [
		{id:1, message:'Hi, i love Lamashtu'},
		{id:2, message:'Frog take it'},
		{id:3, message:'New path for react'},
		{id:4, message:'Where my project bitch'},
		{id:5, message:'Good job my little boy'}
	]
}

const dialogsPageReducer = (state = initialState, action) => {


	switch (action.type) {
		
		case ADD_MESSAGE:{
			return {
				...state,
				messages: [...state.messages, {id: 6, message: action.newMessage}]
			}
		}
			
		default:
			return state
	}

}

export const addMessageActionCreater = (newMessage) => ({ type: ADD_MESSAGE, newMessage })

export default dialogsPageReducer