<script>
export default {
  name: "suppliers",
  data() {
    return {
      suppliers: [
        { id: 'S01', supplierName: 'Proveedor 1', product: 'Inca Kola', contactNumber: '+51 123456789', email: 'proveedor1@example.com', type: 'Taking Return', onTheWay: 5 },
        { id: 'S02', supplierName: 'Proveedor 2', product: 'Chicha Morada', contactNumber: '+51 987657321', email: 'proveedor2@example.com', type: 'Not Taking Return', onTheWay: 0 },
        { id: 'S03', supplierName: 'Proveedor 3', product: 'Pisco', contactNumber: '+51 123456789', email: 'proveedor3@example.com', type: 'Taking Return', onTheWay: 3 },
        { id: 'S04', supplierName: 'Proveedor 4', product: 'Cusqueña', contactNumber: '+51 987654321', email: 'proveedor4@example.com', type: 'Not Taking Return', onTheWay: 7 },
        { id: 'S05', supplierName: 'Proveedor 5', product: 'Sublime', contactNumber: '+51 123486789', email: 'proveedor5@example.com', type: 'Taking Return', onTheWay: 15 },
        { id: 'S06', supplierName: 'Proveedor 6', product: 'Donofrio', contactNumber: '+51 987334321', email: 'proveedor6@example.com', type: 'Not Taking Return', onTheWay: 20 },
        { id: 'S07', supplierName: 'Proveedor 7', product: 'Gloria', contactNumber: '+51 123456789', email: 'proveedor7@example.com', type: 'Taking Return', onTheWay: 8 },
        { id: 'S08', supplierName: 'Proveedor 8', product: 'Detergente Bolívar', contactNumber: '+51 987654321', email: 'proveedor8@example.com', type: 'Not Taking Return', onTheWay: 0 },
        { id: 'S09', supplierName: 'Proveedor 9', product: 'Arroz Costeño', contactNumber: '+51 123456789', email: 'proveedor9@example.com', type: 'Taking Return', onTheWay: 3 },
        { id: 'S10', supplierName: 'Proveedor 10', product: 'Aceite Primor', contactNumber: '+51 987454321', email: 'proveedor10@example.com', type: 'Not Taking Return', onTheWay: 2 },
        { id: 'S11', supplierName: 'Proveedor 11', product: 'Atún Primor', contactNumber: '+51 123456789', email: 'proveedor11@example.com', type: 'Taking Return', onTheWay: 5 },
        { id: 'S12', supplierName: 'Proveedor 12', product: 'Galleta Morocha', contactNumber: '+51 985654821', email: 'proveedor12@example.com', type: 'Not Taking Return', onTheWay: 11 },
        { id: 'S13', supplierName: 'Proveedor 13', product: 'Leche Gloria', contactNumber: '+51 123456789', email: 'proveedor13@example.com', type: 'Taking Return', onTheWay: 6 },
        { id: 'S14', supplierName: 'Proveedor 14', product: 'Yogurt Gloria', contactNumber: '+51 987654321', email: 'proveedor14@example.com', type: 'Not Taking Return', onTheWay: 9 },
        { id: 'S15', supplierName: 'Proveedor 15', product: 'Azúcar Rubia', contactNumber: '+51 123456789', email: 'proveedor15@example.com', type: 'Taking Return', onTheWay: 4 }
      ]
    }
  }
}
</script>

<template>
  <div class="contenido-principal">
    <div>
      <div class="containerS2">
        <div class="boxS">
          <h3>Suppliers</h3>
          <div class="table">
            <table>
              <thead>
              <tr>
                <th>Supplier Name</th>
                <th>Product</th>
                <th>Contact Number</th>
                <th>Email</th>
                <th>Type</th>
                <th>On the Way</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="supplier in suppliers" :key="supplier.id">
                <td>{{ supplier.supplierName }}</td>
                <td>{{ supplier.product }}</td>
                <td>{{ supplier.contactNumber }}</td>
                <td>{{ supplier.email }}</td>
                <td :style="{color: supplier.type === 'Taking Return' ? '#17bc6e' : '#DA3E33'}">{{ supplier.type }}</td>
                <td>{{ supplier.onTheWay > 0 ? supplier.onTheWay + ' days' : '-' }}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contenido-principal {
  margin-left: 250px;
}

.containerS2{
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 2rem;
  padding: 1rem 0;

}
.boxS{

  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 10px;
  border: white 1px solid;

}

.table table {
  width: 100%;
}
.table {
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  padding: 2em 0; /* Ajusta el padding en la parte inferior */
}
.table thead th {
  padding: 0.5em 2em;
}
.table tr {
  border-bottom: 1px solid #F0F1F3;
}
.table tbody tr:last-child {
  border-bottom: none; /* Quita la línea del último elemento de Name */
}
.table tbody tr td {
  font-size: 1.2em; /* Aumenta el tamaño de la fuente */
  word-spacing: 0.2em; /* Agrega espacio entre las palabras */
  text-align: center; /* Centra el texto */
  padding: 1em 0;
}

.table tbody tr td:first-child {
  text-align: left; /* Alinea a la izquierda el texto de la primera celda (Name) */
  padding-left: 1em; /* Ajusta el padding a la izquierda */
}
h3{
  color: #000000;
  font-size: 1.5rem;
  padding: 2rem 0 1rem 2rem;
  text-align: left;
}

.boxS p{
  text-align: center;
  color: #000000;
}
</style>