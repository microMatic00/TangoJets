export async function getFlights() {
	try {
		const response = await fetch(
			`${import.meta.env.PUBLIC_BACKEND_URL}/flights`
		)

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`)
		}

		const responseToken = await response.json()

		return responseToken
	} catch (err) {
		console.error("Error fetching flights:", err)
		throw err
	}
}
export async function deleteFlight(id : number) {
    try {
        const response = await fetch(`${import.meta.env.PUBLIC_BACKEND_URL}/flight/${id}`, {
        method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        return response;
    } catch (err) {
        console.error("Error adding client:", err);
        throw err;
    }
}
