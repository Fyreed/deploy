import Menu_style from './Menu_style/Menu.module.css'
import { NavLink } from 'react-router-dom'

const Menu = (props) => {
      return (
            <ul className={Menu_style.list}>
                  <li className={Menu_style.item}><NavLink to="/profile" activeClassName={Menu_style.active}>Profile</NavLink></li>
                  <li className={Menu_style.item}><NavLink to="/dialogs" activeClassName={Menu_style.active}>Messages</NavLink></li>
                  <li className={Menu_style.item}><NavLink to="/news" activeClassName={Menu_style.active}>News</NavLink></li>
                  <li className={Menu_style.item}><NavLink to="/music" activeClassName={Menu_style.active}>Music</NavLink></li>
                  <li className={Menu_style.item}><NavLink to="/settings" activeClassName={Menu_style.active}>Settings</NavLink></li>
                  <br />
                  <li className={Menu_style.item}><NavLink to="/users" activeClassName={Menu_style.active}>Users</NavLink></li>
            </ul>
      )
}

export default Menu