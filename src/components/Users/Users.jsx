import usersStyle from './usersStyle/usersStyle.module.css'
import nonPhoto from '../../assets/image/nonPhoto.png'
import { NavLink } from 'react-router-dom'
import Pagination from '../Common/Pagination/Pagination'

const Users = (props) => {

	return (
		<div className={usersStyle.box}>
			<Pagination pageCount={props.pageCount} currentPage={props.currentPage} onPageChange={props.onPageChange} />

			{
				props.users.map(u => <div className={usersStyle.userBox} key={u.id}>
					<div className={usersStyle.leftColumn}>
						<NavLink to={'/profile/' + u.id}>
							<img src={u.photos.small != null ? u.photos.small : nonPhoto} className={usersStyle.avatar}></img>
						</NavLink>
						<div className={usersStyle.followSuccess}>{u.followed
							? <button disabled={props.followingIsProgress.some(id => id === u.id)} onClick={() => {
								props.unfollow(u.id)
							}}>Unfollow</button>
							: <button disabled={props.followingIsProgress.some(id => id === u.id)} onClick={() => {
								props.follow(u.id)
							}}>Follow</button>}
						</div>
					</div>
					<div className={usersStyle.info}>
						<div className={usersStyle.userInfo}>
							<div className={usersStyle.name}>{u.name}</div>
							<div className={usersStyle.status}>{u.status}</div>
						</div>
						<div className={usersStyle.location}>
							<div className={usersStyle.country}>{"u.location.country"}</div>
							<div className={usersStyle.city}>{"u.location.city"}</div>
						</div>
					</div>
				</div>)
			}
		</div>
	)
}

export default Users