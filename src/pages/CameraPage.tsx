import React, { FC } from "react"
import Webcam from "react-webcam"

import styles from "../style/pages/cameraPage.module.sass"

const CameraPage: FC = () => {
	return <Webcam className={styles.camera} audio={false} />
}

export default CameraPage
