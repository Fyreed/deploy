
import Post_style from '../Account_style/Post_style/Post.module.css'

const Post = (props) => {
	return (
		<div className={Post_style.box}>
			<img src="" alt="" className={Post_style.avatar} />
			<p className={Post_style.text}>{props.message}</p>
			<span><h2>Likes</h2>{props.likesCount}</span>
		</div>
	);
}

export default Post