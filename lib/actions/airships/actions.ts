export async function getAirships() {
	try {
		const response = await fetch(
			`${import.meta.env.PUBLIC_BACKEND_URL}/airships`
		)

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`)
		}

		const responseToken = await response.json()

		return responseToken
	} catch (err) {
		console.error("Error fetching Airships:", err)
		throw err
	}
}
