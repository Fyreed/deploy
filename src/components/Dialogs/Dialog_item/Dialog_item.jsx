
import { NavLink } from 'react-router-dom';

const Dialog = (props) => {

	let path = "/dialogs/" + props.id

	return (
		<ul>
			<li>
				<NavLink to={path}>{props.name}</NavLink>
			</li>
		</ul>
	)
}

export default Dialog