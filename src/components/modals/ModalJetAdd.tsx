import React, { useState } from 'react';
import { Toast } from "flowbite-react";
import { HiCheck } from "react-icons/hi";
import { addAirship } from "../../../lib/actions/airships/actions"


const AddJetModal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleToggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };
  
  const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault()
		const formElement = event.target as HTMLFormElement
		const formData = new FormData(formElement)
		const jetData = Object.fromEntries(formData.entries())

		const transformedJetData = {
			title: jetData.jetName,
			status: jetData.status,
			pricepermile: jetData.pricepermile,
			seats: jetData.seats,
			size: jetData.size,
		}

		try {
			const response = await addAirship(transformedJetData)
			setShowToast(true)
			setTimeout(() => {
				setShowToast(false)
				window.location.reload()
			}, 2000)
			setIsModalOpen(false)
		} catch (err) {
			console.error("Error adding client:", err)
		}
  }

  return (
		<>
			<button
				id="addJetButton"
				className="block text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
				type="button"
				onClick={handleToggleModal}
			>
				Add Airship
			</button>

			{isModalOpen && (
				<div
					id="addJetModal"
					tabIndex={-1}
					aria-hidden="true"
					className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-x-hidden overflow-y-auto backdrop-filter backdrop-blur-sm bg-opacity-50"
				>
					<div className="relative w-full max-w-2xl max-h-full">
						<div className="relative bg-white rounded-lg shadow dark:bg-gray-800">
							<div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
								<h3 className="text-xl font-semibold text-gray-900 dark:text-white">
									Add New Airship
								</h3>
								<button
									type="button"
									className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
									onClick={handleToggleModal}
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
								<form id="addJetForm" onSubmit={handleSubmit}>
									<div className="h-fit mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
										<div>
											<label
												htmlFor="jetName"
												className="block text-sm font-medium text-gray-900 dark:text-gray-200"
											>
												Jet Name
											</label>
											<input
												type="text"
												id="jetName"
												name="jetName"
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
											Add Jet
										</button>
										<button
											type="button"
											className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
											onClick={handleToggleModal}
										>
											Cancel
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			)}

			{showToast && (
				<div className="fixed top-4 left-1/2 transform -translate-x-1/2">
					<Toast>
						<div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
							<HiCheck className="h-5 w-5" />
						</div>
						<div className="ml-3 text-sm font-normal">
							Jet added successfully.
						</div>
						<Toast.Toggle onClick={() => setShowToast(false)} />
					</Toast>
				</div>
			)}
		</>
  )
};

export default AddJetModal;