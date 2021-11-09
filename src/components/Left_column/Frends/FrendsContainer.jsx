import { connect } from "react-redux"
import Frends from "./Frends"

let mapStateToProps = (state) => {
	return {
		sidebar: state.sidebar
	}
}

let FrendsConteiner = connect (mapStateToProps) (Frends)

export default FrendsConteiner