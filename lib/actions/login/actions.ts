interface Login {
	username: string
	password: string
	token: string
}

export async function loginScheduler({ username, password, token }: Login) {
	const response = await fetch(
		`${import.meta.env.ASTRO_BACKEND_URL}/scheduler/login`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({ username, password }),
		}
	)

	try {
		const data = await response.json()
		const token = data.token

		localStorage.setItem("authToken", token)

		return response.status
	} catch (err) {
		console.error(err)
	}
}
