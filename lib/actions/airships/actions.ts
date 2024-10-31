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
export async function addAirship(airshipData: Record<string, any>) {
    try {
        const response = await fetch(`${import.meta.env.PUBLIC_BACKEND_URL}/airship`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(airshipData),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Verificar si la respuesta tiene contenido antes de intentar parsear como JSON
        const responseText = await response.text();
        const responseData = responseText ? JSON.parse(responseText) : {};

        return responseData;
    } catch (err) {
        console.error("Error adding airship:", err);
        throw err;
    }
}