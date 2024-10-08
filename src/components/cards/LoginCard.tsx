export const LoginCard = () => {
	return (
		<div className="flex flex-col w-full">
			<h1 className="text-4xl font-bold">Login</h1>
			<div className="flex flex-col w-full">
				<p className="text-lg  text-gray-200">Email</p>
				<input placeholder="Enter Email" />
				<p className="text-lg text-gray-200">Password</p>
				<input placeholder="Enter Password" />
			</div>
		</div>
	)
}
