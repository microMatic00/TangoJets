import { useEffect, useState } from "react"
import { getCookie } from "../../utils/getCookie"

export const WelcomeText = () => {
	const [employeeName, setEmployeeName] = useState("")

	useEffect(() => {
		const name = getCookie("username")
		if (name) {
			setEmployeeName(name)
		}
	}, [])
	return (
		<h1 className="text-4xl font-bold mb-4">
			Bienvenido a Tango Jet, {employeeName}
		</h1>
	)
}