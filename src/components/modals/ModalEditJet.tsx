import React from "react"
import type { Airship } from "../table/TableModal"

interface Props {
	formData: Airship
	handleChange: (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => void
	handleEdit: (event: React.FormEvent<HTMLFormElement>) => void
	setOpenModal: (open: boolean) => void
}

const ModalEditJet = ({
	formData,
	handleChange,
	handleEdit,
	setOpenModal,
}: Props) => {
	return (
		<div
			id="editJetModal"
			tabIndex={-1}
			aria-hidden="true"
			className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-x-hidden overflow-y-auto backdrop-filter backdrop-blur-sm bg-opacity-50"
		>
			<div className="relative w-full max-w-2xl max-h-full">
				<div className="relative bg-white rounded-lg shadow dark:bg-gray-800">
					<div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
						<h3 className="text-xl font-semibold text-gray-900 dark:text-white">
							Edit Jet
						</h3>
						<button
							type="button"
							className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
							onClick={() => setOpenModal(false)}
						>
							<svg
								aria-hidden="true"
								className="w-5 h-5"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
									clipRule="evenodd"
								></path>
							</svg>
							<span className="sr-only">Close modal</span>
						</button>
					</div>
					<div className="p-6 space-y-6">
						<form id="addJetForm" onSubmit={handleEdit}>
							<div className="h-fit mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
								<div>
									<label
										htmlFor="title"
										className="block text-sm font-medium text-gray-900 dark:text-gray-200"
									>
										Jet Title
									</label>
									<input
										type="text"
										id="title"
										name="title"
										value={formData.title}
										onChange={handleChange}
										className="block w-full px-4 py-2 mt-1 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										required
									/>
								</div>
								<div>
									<label
										htmlFor="status"
										className="block text-sm font-medium text-gray-900 dark:text-gray-200"
									>
										Status
									</label>
									<input
										type="text"
										id="status"
										name="status"
										value={formData.status}
										onChange={handleChange}
										className="block w-full px-4 py-2 mt-1 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										required
									/>
								</div>
								<div>
									<label
										htmlFor="pricepermile"
										className="block text-sm font-medium text-gray-900 dark:text-gray-200"
									>
										Price per Mile
									</label>
									<input
										type="number"
										id="pricepermile"
										name="pricepermile"
										value={formData.pricepermile}
										onChange={handleChange}
										className="block w-full px-4 py-2 mt-1 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
										required
									/>
								</div>
								<div>
									<label
										htmlFor="seats"
										className="block text-sm font-medium text-gray-900 dark:text-gray-200"
									>
										Seats
									</label>
									<input
										type="number"
										id="seats"
										name="seats"
										value={formData.seats}
										onChange={handleChange}
										className="block w-full px-4 py-2 mt-1 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
										required
									/>
								</div>
								<div>
									<label
										htmlFor="size"
										className="block text-sm font-medium text-gray-900 dark:text-gray-200"
									>
										Size
									</label>
									<input
										type="text"
										id="size"
										name="size"
										value={formData.size}
										onChange={handleChange}
										className="block w-full px-4 py-2 mt-1 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										required
									/>
								</div>
								<div>
									<label
										htmlFor="images"
										className="block text-sm font-medium text-gray-900 dark:text-gray-200"
									>
										Images
									</label>
									<input
										type="file"
										id="images"
										name="images"
										multiple
										className="block w-full px-4 py-2 mt-1 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										required
									/>
								</div>
							</div>
							<div className="flex justify-start items-center py-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
								<button
									id="submitJet"
									type="submit"
									className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
								>
									Edit Airship
								</button>
								<button
									type="button"
									className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
									onClick={() => setOpenModal(false)}
								>
									Cancel
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ModalEditJet
