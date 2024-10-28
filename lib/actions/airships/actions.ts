interface deleteProps {
	id: number
	caseType: string
}

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

export async function deleteAction({ caseType, id }: deleteProps) {
	try {
		console.log("caseType", caseType)
		const response = await fetch(
			`${import.meta.env.PUBLIC_BACKEND_URL}/${caseType}/${id}`,
			{
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
				},
			}
		)

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`)
		}

		console.log(`Airship with ID ${id} deleted successfully.`)
		return response
	} catch (err) {
		console.error("Error deleting element:", err)
		throw err
	}
}
