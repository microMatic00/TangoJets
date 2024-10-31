import React, { useState } from "react"
import { editAction } from "../../../lib/actions/edit/actions"

import ModalEditCli from "../modals/ModalEditCli"
import ModalEditJet from "../modals/ModalEditJet"

interface Props {
	id: number
	caseType: string
	data: Record<string, any>
}

const Edit = ({ id, caseType, data }: Props) => {
	const [openModal, setOpenModal] = useState(false)
	const [formData, setFormData] = useState(data)

	const handleEdit = async (event: React.FormEvent) => {
		event.preventDefault()
		window.location.reload()
		try {
			await editAction({ caseType, data: formData })
		} catch (error) {
			console.error("Error:", error)
		}
		setOpenModal(false)
	}

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name, value } = e.target
		setFormData((prevData) => ({ ...prevData, [name]: value, id: id }))
	}

	return (
		<>
			<button
				className="bg-transparent p-2"
				onClick={() => setOpenModal(true)}
			>
				<svg
					className="w-6 h-6 text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-500"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
					/>
				</svg>
			</button>

			{openModal &&
				(caseType === "airship" ? (
					<ModalEditJet
						formData={formData}
						handleChange={handleChange}
						handleEdit={handleEdit}
						setOpenModal={setOpenModal}
					/>
				) : (
					<ModalEditCli
						formData={formData}
						handleChange={handleChange}
						handleEdit={handleEdit}
						setOpenModal={setOpenModal}
					/>
				))}
		</>
	)
}

export default Edit
