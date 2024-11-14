interface editProps {
	caseType: string
	data: FormData
}

export async function editAction({ caseType, data }: editProps) {
	try {
		const url = `${import.meta.env.PUBLIC_BACKEND_URL}/${caseType}`
		const response = await fetch(url, {
			method: "PUT",
			body: data,
		})

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`)
		}

		const responseText = await response.text()
		const responseData = responseText ? JSON.parse(responseText) : {}

		return responseData
	} catch (err) {
		console.error("Error editing element:", err)
		throw err
	}
}
