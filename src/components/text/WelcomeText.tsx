import { useEffect, useState } from "react"

export const WelcomeText = () => {
	const [employeeName, setEmployeeName] = useState("")

	useEffect(() => {
		const name = localStorage.getItem("authToken")
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
