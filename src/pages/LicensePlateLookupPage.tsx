import React, { FC, useState } from "react"
import InputField from "../components/InputField"
import Button from "../components/Button"
import Modal from "../components/Modal"
import { API_ADDRESS } from "../config"

import styles from "../style/pages/licensePlateLookupPage.module.sass"


const LicensePlateLookupPage: FC = () => {
	const [value, setValue] = useState("")
	const [isLoading, setLoading] = useState(false)
	const [modal, setModal] = useState<{ title: string, description: string } | undefined>(undefined)

	const submit = async () => {
		if (value.trim() === "")
			return
		setLoading(true)
		const response = await fetch(`${API_ADDRESS}/license-plate/${value.trim()}`)
		const data = await response.json()
		setModal({
			title: value,
			description: `Is Police: ${data.isPolice ? "Yes" : "No"}`,
		})
		setLoading(false)
	}

	return <div className={styles.licensePlateLookupPage}>
		{modal &&
			<Modal
				title={modal?.title}
				description={modal?.description}
				onClose={() => setModal(undefined)}
			/>
		}
		<h1>License Plate Lookup</h1>
		<InputField
			type="text"
			value={value}
			onTextChange={text => setValue(text.toUpperCase())}
			placeholder="Enter License Plate..."
		/>
		<Button onClick={submit} disabled={isLoading}>Lookup</Button>
	</div>
}

export default LicensePlateLookupPage
