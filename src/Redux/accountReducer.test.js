import accountPageReducer, {addPostActionCreater} from "./accountPageReducer";


test('new post shold be added', () => {
	// 1. test data

	let state = {
		posts: [
			{id:1, message:'Hi this is new web frog', likesCount: 15},
			{id:2, message:'This is messenger made in react', likesCount: 11},
			{id:3, message:'Take it', likesCount: 2},
			{id:4, message:'Thanks', likesCount: 333333}
		]
	}

	// 2. action

	let action = addPostActionCreater("hey hey")

	let newState = accountPageReducer(state, action)

	// 3. expectation

	expect (newState.posts.length).toBe(5)

});


