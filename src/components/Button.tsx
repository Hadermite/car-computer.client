import React, { FC } from "react"

import style from "../style/components/button.module.sass"


interface ButtonProps {
	onClick?: () => void
	disabled?: boolean
}

const Button: FC<ButtonProps> = ({ onClick, disabled, children }) => {
	return <button
		className={style.button}
		onClick={onClick}
		disabled={disabled}
		children={children}
	/>
}

export default Button
