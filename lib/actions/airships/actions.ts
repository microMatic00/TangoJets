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
export async function deleteAirship(id: number) {
    try {
        const response = await fetch(`${import.meta.env.PUBLIC_BACKEND_URL}/airship/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        console.log(`Airship with ID ${id} deleted successfully.`);
        return response;
    } catch (err) {
        console.error("Error deleting airship:", err);
        throw err;
    }
}
