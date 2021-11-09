import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import { addMessageActionCreater } from '../../Redux/dialogsPageReducer';
import Dialogs from './Diaologs';

let mapStateToProps = (state) => {
	return {
		messages: state.dialogsPage.messages,
		dialogs: state.dialogsPage.dialogs
	}
}
let mapDispatchToProps = (dispatch) => {
	
	return {
		addMessage: (newMessage) => {
			dispatch(addMessageActionCreater(newMessage))
		}
	}
}

export default compose (
	connect (mapStateToProps,mapDispatchToProps),
	withAuthRedirect
) (Dialogs)
