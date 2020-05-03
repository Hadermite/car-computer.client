import React, { FC } from "react"

import styles from "../style/components/modal.module.sass"
import Button from "./Button"

interface ModalProps {
	title: string
	description: string
	onClose: () => void
}

const Modal: FC<ModalProps> = ({ title, description, onClose }) => {
	return <div className={styles.container}>
		<div className={styles.modal}>
			<h1>{title}</h1>
			<p>{description}</p>
			<Button onClick={onClose}>Close</Button>
		</div>
	</div>
}

export default Modal
