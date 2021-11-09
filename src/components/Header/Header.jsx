import { NavLink } from 'react-router-dom';
import Header_style from './Header_style/Header.module.css'
import { Redirect } from "react-router"

const Header = (props) => {
	return (
		<header className={Header_style.box}>
        <img src="https://i.pinimg.com/474x/67/98/d0/6798d01efd794ba5b8919f72f2513383.jpg" alt="" className={Header_style.logotype} />
		  <div className={Header_style.loginBlock}>
		  {props.isAuth 
		   ?<div className={Header_style.login} >{props.login} - <NavLink onClick={props.logout} className={Header_style.login} to='#' >- Logout</NavLink> </div>
			:<NavLink className={Header_style.login} to={'/login'} >Login</NavLink>}
		  </div>
      </header>
	);
}

export default Header;