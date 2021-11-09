import Frends_item_style from './Frends_item_style/Frends_item.module.css'

const Frends_item = (props) => {
	return (
		<li className={Frends_item_style.el}>
			<img className={Frends_item_style.avatar} src={props.avatar} alt="" />
			<p className={Frends_item_style.name}>{props.name}</p>
		</li>
	)
}

export default Frends_item