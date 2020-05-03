import React, { FC } from "react"

import style from "../style/components/inputField.module.sass"


interface InputFieldProps {
	type: "text"
	value?: string
	onTextChange?: (text: string) => void
	placeholder?: string
}

const InputField: FC<InputFieldProps> = ({ type, value, onTextChange, placeholder }) => {
	return <input
		className={style.inputField}
		type={type}
		value={value}
		placeholder={placeholder}
		onChange={event => onTextChange && onTextChange(event.target.value)}
	/>
}

export default InputField
