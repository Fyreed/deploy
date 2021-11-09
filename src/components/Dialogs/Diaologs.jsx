import React from 'react';
import {Field, reduxForm} from 'redux-form'
import { maxLength, required } from '../../utils/valodators/validators';
import { Textarea } from '../FormControl/FormControl';
import Dialogs_style from './Dialogs_style/Dialogs.module.css'
import Dialog from './Dialog_item/Dialog_item';
import Message from './Message_item/Message_item';

const Dialogs = (props) => {


	let dialogsElements = props.dialogs.map( d =>  <Dialog name={d.name} key={d.id} id={d.id}></Dialog>)

	let messagesElements = props.messages.map( m =>  <Message message={m.message} key={m.id} id={m.id}></Message>)
	
	const addNewMessage = (values) => {
		props.addMessage(values.newMessage)
		}
	
	return (
		<div className={Dialogs_style.box}>
			<div className={Dialogs_style.dialogs}>
				{dialogsElements}
			</div>
			<div className={Dialogs_style.messages}>
				{messagesElements}
				<NewMessageReduxForm onSubmit={addNewMessage} />
			</div>

		</div>
	)
}
const maxLength255 = maxLength(255)
const NewMessageForm = (props) => {

	

	return (
		<form onSubmit={props.handleSubmit} >
			<Field placeholder='Enter you message' name='newMessage' component={Textarea} validate={[required, maxLength255]} />
			<button>Send</button>
		</form>
	)
}
const NewMessageReduxForm = reduxForm ({

	form: 'dialogNewMessageForm'
}) (NewMessageForm)

export default Dialogs