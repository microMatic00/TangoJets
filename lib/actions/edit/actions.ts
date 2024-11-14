interface editProps {
	caseType: string
	data: FormData
	id: number
}

export async function editAction({ caseType, data, id }: editProps) {
	try {
		data.append("id", id.toString())
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
