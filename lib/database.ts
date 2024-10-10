// lib/database.js
export async function getClients() {
    return [
      { id: 1, nombre: "Juan", apellido: "Pérez", telefono: "123456789", email: "juan.perez@example.com", idPasaporte: "A12345678" },
      { id: 2, nombre: "María", apellido: "González", telefono: "987654321", email: "maria.gonzalez@example.com", idPasaporte: "B87654321" },
      // Agrega más clientes ficticios según sea necesario
    ];
  }