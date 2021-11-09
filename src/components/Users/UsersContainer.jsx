import React from 'react'
import { connect } from "react-redux";
import {setCurrentPage} from '../../Redux/usersReducer';
import Users from './Users'
import Preloader from '../Common/Preloader/Preloader';
import { getUsers, follow, unfollow } from '../../Redux/usersReducer';
import { getUsersSuperSelector } from '../../selectors/userSelectors';

class UsersContainer extends React.Component {


	componentDidMount() {

		this.props.getUsers()
	}

	onPageChange = (pageNumber) => {
		this.props.getUsers(pageNumber, this.props.pageSize)
	}


	render() {

		let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

		return <>
			{this.props.isFetching ? <Preloader /> : null}
			<Users pageCount={pageCount}
				currentPage={this.props.currentPage}
				onPageChange={this.onPageChange}
				users={this.props.users}
				followingIsProgress={this.props.followingIsProgress}
				follow={this.props.follow}
				unfollow={this.props.unfollow} />
		</>
	}
}

let mapStateToProps = (state) => {
	return {
		users: getUsersSuperSelector(state),
		pageSize: state.usersPage.pageSize,
		currentPage: state.usersPage.currentPage,
		totalUsersCount: state.usersPage.totalUsersCount,
		isFetching: state.usersPage.isFetching,
		followingIsProgress: state.usersPage.followingIsProgress,
	}
}


export default connect(mapStateToProps, {setCurrentPage, getUsers, follow, unfollow})(UsersContainer)