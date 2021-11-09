import Frends_item from './Frends_item/Frends_item'
import Frends_style from './Frends_style/Frends.module.css'

const Frends = (props) => {

	let frendsElements = props.sidebar.frends.map( f => <Frends_item key={f.id} id={f.id} name={f.name} avatar={f.avatar} ></Frends_item>)
	
	return (
		<div className={Frends_style.box}>
			<h1 className={Frends_style.header}>Frends</h1>
			<ul className={Frends_style.list}>
				{frendsElements}
			</ul>
		</div>
	)
}

export default Frends