export async function getFlights() {
	try {
		const response = await fetch(
			`${import.meta.env.PUBLIC_BACKEND_URL}/flights`
		)

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`)
		}

		const responseToken = await response.json()
		console.log("dentro de actions", responseToken)
		return responseToken
	} catch (err) {
		console.error("Error fetching flights:", err)
		throw err
	}
}
