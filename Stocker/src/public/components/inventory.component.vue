<script>
export default {
  name: "inventory",
  data() {
    return {
      products: [
        { name: 'Inca Kola', price: 3.50, quantity: 100, threshold: 20, expiryDate: '2023-12-31', available: true },
        { name: 'Chicha Morada', price: 2.50, quantity: 150, threshold: 30, expiryDate: '2024-01-31', available: true },
        { name: 'Pisco', price: 30.00, quantity: 200, threshold: 40, expiryDate: '2024-02-28', available: false },
        { name: 'Cusqueña', price: 4.00, quantity: 250, threshold: 50, expiryDate: '2024-03-31', available: true },
        { name: 'Sublime', price: 1.00, quantity: 300, threshold: 60, expiryDate: '2024-04-30', available: false },
        { name: 'Donofrio', price: 1.50, quantity: 350, threshold: 70, expiryDate: '2024-05-31', available: true },
        { name: 'Gloria', price: 2.80, quantity: 400, threshold: 80, expiryDate: '2024-06-30', available: false },
        { name: 'Detergente Bolívar', price: 10.00, quantity: 450, threshold: 90, expiryDate: '2024-07-31', available: true },
        { name: 'Arroz Costeño', price: 2.20, quantity: 500, threshold: 100, expiryDate: '2024-08-31', available: false },
        { name: 'Aceite Primor', price: 6.00, quantity: 550, threshold: 110, expiryDate: '2024-09-30', available: true },
      ]
    }
  }
}
</script>

<template>
  <div class="contenido-principal">
    <div>
      <section class="services">
        <div class="containerS">
          <div class="boxS">
            <h3>Overall Inventory</h3>
            <img style="width: 90%; height: auto" src="../../assets/images/overallInventory.png"/>
          </div>
        </div>
        <div class="containerS">
          <div class="boxS">
            <h3>Top Selling Stock</h3>
            <div class="table">
              <table>
                <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Threshold</th>
                  <th>Expiry Date</th>
                  <th>Available</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="product in products" :key="product.name">
                  <td>{{ product.name }}</td>
                  <td>S/.{{ product.price }}</td>
                  <td>{{ product.quantity }}</td>
                  <td>{{ product.threshold }}</td>
                  <td>{{ product.expiryDate }}</td>
                  <td :style="{color: product.available ? '#17bc6e' : '#DA3E33'}">{{ product.available ? 'In-stock' : 'Out of Stock' }}</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </section>
    </div>
  </div>
</template>

<style scoped>
.contenido-principal {
  margin-left: 250px;
}
.services{
  padding: 3rem 0;
}

.containerS{
  width: 90%;
  margin: 0 auto;
  display: grid;
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
.boxS img{
  margin: 0 auto;
  padding: 2rem 0;
  display: block;

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