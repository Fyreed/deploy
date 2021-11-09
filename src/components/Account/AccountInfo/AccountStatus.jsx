import React, { useEffect, useState } from "react"


const AccountStatus = (props) => {

	// state = {
	// 	editMode: false,
	// 	status: props.status
	// }
	// activeEditMode = () => {
	// 	setState({
	// 		editMode: true
	// 	})
	// }

	// disableEditMode = () => {
	// 	setState({
	// 		editMode: false
	// 	})
	// 	props.updateStatus(state.status)
	// }



	// onStatusChange = (e) => {
	// 	setState({
	// 		status: e.currentTarget.value
	// 	})

	// }

	// componentDidUpdate(prevProps, prevState) {
	// 	if (prevProps.status !== props.status) {
	// 		setState({
	// 			status: props.status
	// 		})
	// 	}
	// }

	const [editMode, setEditMode] = useState(false)
	const [status, setStatus] = useState()

	useEffect(() => {
		setStatus(props.status)
	}, [props.status])

	const activeEditMode = () => {
		setEditMode(true)
	}

	const disableEditMode = () => {
		setEditMode(false)
		props.updateStatus(status)
	}

	const onStatusChange = (e) => {
		setStatus(e.currentTarget.value)
	}

	return (
		<>
			{!editMode &&
				<div>
					<span onClick={activeEditMode} >{status || 'Enter new status'}</span>
				</div>
			}
			{editMode &&
				<div>
					<input onChange={onStatusChange} onBlur={disableEditMode} autoFocus={true} type="text" value={status}  />
				</div>
			}


		</>
	)
}


export default AccountStatus