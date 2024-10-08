export const LoginCard = () => {
	return (
		<div className="flex flex-col w-full items-center">
			<h1 className="text-4xl font-bold mb-6">Welcome!</h1>
			<div className="flex flex-col gap-4 w-full">
				<input
					className="w-full rounded-full px-4 py-2 text-black"
					placeholder="Enter Email"
				/>
				<input
					className="w-full rounded-full px-4 py-2 text-black"
					placeholder="Enter Password"
				/>
			</div>
			<button className="mt-6 border-2 border-gray-200 border-solid w-fit rounded-full px-4 py-2">
				Login
			</button>
		</div>
	)
}
