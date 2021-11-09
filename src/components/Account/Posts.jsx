import Posts_style from './Account_style/Posts.module.css'
import Post from './Post/Post';
import React from 'react';
import {Field, reduxForm} from 'redux-form'
import { required, maxLength } from '../../utils/valodators/validators';
import { Textarea } from '../FormControl/FormControl';

const Posts = (props) => {

	console.log('hey hey')
	
	let postsElements = props.posts.map( p => <Post key={p.id} message={p.message} likesCount={p.likesCount}></Post> )



	const newPost = (value) => {
		props.addPost(value.newPost)
	}
	return (
		<div>
			<div className={Posts_style.box}>
			<p className={Posts_style.header}>My posts</p>
			<NewPostForm onSubmit={newPost} />
		</div>
			{postsElements}
		</div>
		
	);
}

const maxLength255 = maxLength(255)

const newPost = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<Field className={Posts_style.input} placeholder='Enter new post' name='newPost' component={Textarea} validate={[required, maxLength255]} />
			<button className={Posts_style.add}>send</button>
		</form>
	)
}

const NewPostForm = reduxForm ({ form: 'accountNewPostForm'}) (newPost)


export default Posts