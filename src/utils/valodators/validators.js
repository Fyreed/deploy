export const required = value => {
	return value ? undefined : 'Field is require'
}

export const maxLength = (lengthSize) => value => {
	return value && value.length < lengthSize  ? undefined : `Max length is ${lengthSize} symbols`
}