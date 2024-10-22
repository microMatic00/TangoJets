import React, { useState } from 'react';
import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

const DeleteEdit = ({ id, url }: { id: number; url: string }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleDelete = async () => {
    console.log("Llamando a deleteElement con id: " + id);
    try {
      const response = await fetch(`${url}/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Error al eliminar el cliente');
      }
      console.log(`Cliente con ID ${id} eliminado`);
      // Aquí puedes agregar lógica para actualizar la UI después de eliminar el cliente

      window.location.reload();

    } catch (error) {
      console.error('Error:', error);
    }
    setOpenModal(false); // Cierra el modal después de eliminar
  };

  return (
    <div>
      <button
        className="bg-transparent p-2 ml-2"
        onClick={() => setOpenModal(true)}
      >
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white hover:text-red-500 dark:hover:text-red-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
          />
        </svg>
      </button>

      {/* Modal de confirmación tode*/}
      <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Are you sure you want to delete this id {id}? {/*  {"cambiar a nombre de la entidad"} */}
            </h3>
            <div className="flex justify-center gap-4">
              <Button className="bg-red-600" onClick={handleDelete}>
                Yes, I'm sure
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default DeleteEdit;






//anda  bien
// import React from 'react';

// export async function deleteElement(id: number) {
//   console.log("Llamando a deleteElement con id: " + id);
//   try {
//     const response = await fetch(`http://localhost:3001/client/${id}`, {
//       method: 'DELETE',
//     });
//     if (!response.ok) {
//       throw new Error('Error al eliminar el cliente');
//     }
//     // Aquí puedes agregar lógica para actualizar la UI después de eliminar el cliente
//     console.log(`Cliente con ID ${id} eliminado`);
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }

// const DeleteEdit = ({ id }: { id: number }) => {
//   console.log("Renderizando DeleteEdit con id: " + id);

//   return (
//     <div>
//       {/* <button onClick={() => {
//         console.log("Botón clickeado!"); // Esto debería dispararse al hacer clic
//       }}>
//         Haz clic aquí para eliminar
//       </button> */}

//       <button 
//       className="bg-transparent p-2 ml-2" 
//       onClick={() => deleteElement(id)}
//     >
//       <svg 
//         className="w-6 h-6 text-gray-800 dark:text-white hover:text-red-500 dark:hover:text-red-500" 
//         xmlns="http://www.w3.org/2000/svg" 
//         fill="none" 
//         viewBox="0 0 24 24" 
//         stroke="currentColor"
//       >
//         <path 
//           strokeLinecap="round" 
//           strokeLinejoin="round" 
//           strokeWidth="2" 
//           d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" 
//         />
//       </svg>
//     </button>

//     </div>

//   );
// };

// export default DeleteEdit;