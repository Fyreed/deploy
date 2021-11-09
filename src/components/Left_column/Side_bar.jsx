import FrendsConteiner from './Frends/FrendsContainer';
import Site_bar_style from './Left_column_style/Side_bar.module.css'
import Menu from './Menu/Menu';

const Side_bar = (props) => {
	
	return (
		<nav className={Site_bar_style.box}>
      <Menu></Menu>
		<FrendsConteiner />
    </nav>
	);
}

export default Side_bar;