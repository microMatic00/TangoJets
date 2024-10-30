interface editProps {
	caseType: string
	data: Record<string, any>
}

export async function editAction({ caseType, data }: editProps) {
	try {
		const url = `${import.meta.env.PUBLIC_BACKEND_URL}/${caseType}`
		const response = await fetch(url, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`)
		}

		return response
	} catch (err) {
		console.error("Error editing element:", err)
		throw err
	}
}
