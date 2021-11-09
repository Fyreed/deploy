import accoutPageReducer from "./accountPageReducer"
import dialogsPageReducer from "./dialogsPageReducer"
import sidebarReducer from "./sidebarReducer"



let store = {
	_state: {
		accountPage: {
			posts: [
				{id:1, message:'Hi this is new web frog', likesCount: 15},
				{id:2, message:'This is messenger made in react', likesCount: 11},
				{id:3, message:'Take it', likesCount: 2},
				{id:4, message:'Thanks', likesCount: 333333}
			],
			newPostText: ''
		},

		dialogsPage: {
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
			],
			newMessageText: ''
		},
		sidebar: {
			frends: [
				{id: 1, name: 'Nock Nock', avatar: 'https://assets.rpgsite.net/images/images/000/070/785/article/Nok-NokSmall.png'},
				{id: 2, name: 'Team Lid', avatar: 'https://assets.rpgsite.net/images/images/000/070/785/article/Nok-NokSmall.png'},
				{id: 3, name: 'H R', avatar: 'https://assets.rpgsite.net/images/images/000/070/785/article/Nok-NokSmall.png'}
			]
		}
	},

	getState () {
		return this._state
	},

	_callSubscriber () {
		console.log('this._state changed')
	},

	getCallSubscriber() {
		return this._callSubscriber
	},

	subscribe (observer) {
		this._callSubscriber = observer
	},

	dispatch (action) {

		this._state.accoutPage = accoutPageReducer ( this._state.accountPage, action)
		this._state.dialogsPage = dialogsPageReducer ( this._state.dialogsPage, action )
		this._state.sidebar = sidebarReducer ( this._state.sidebar, action )

		this._callSubscriber(this._state)

	}
}






export default store