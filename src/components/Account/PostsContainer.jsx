import Posts from "./Posts"
import { addPostActionCreater, onPostChangeActionCreater } from '../../Redux/accountPageReducer';
import { connect } from "react-redux";


let mapStateToProps = (state) => {
	return {
		posts: state.accountPage.posts
	}
}

let mapDispatchToProps = (dispatch) => {
	
	return {
		addPost: (newPost) => {
			dispatch(addPostActionCreater(newPost))
		}
	}
}

let PostsContainer = connect (mapStateToProps, mapDispatchToProps) (Posts)

export default PostsContainer