<script>
export default {
  name: "dashboard",
  data() {
    return {
      products: [
        { name: 'Detergente Bolívar', soldQuantity: 450, remainingQuantity: 50, price: 10.00 },
        { name: 'Arroz Costeño', soldQuantity: 500, remainingQuantity: 75, price: 2.20 },
        { name: 'Aceite Primor', soldQuantity: 550, remainingQuantity: 100, price: 6.00 },
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
            <h3>Sales Overview</h3>
            <img class="chart1" src="../../assets/images/salesOverview.png"/>
          </div>

          <div class="boxS">
            <h3>Inventory Summary</h3>
            <img class="chart1" src="../../assets/images/inventorySummary.png"/>
          </div>
        </div>

        <div class="containerS">
          <div class="boxS">
            <h3>Purchase Overview</h3>
            <img class="chart1" src="../../assets/images/purchaseOverview.png"/>
          </div>

          <div class="boxS">
            <h3>Product Summary</h3>
            <img class="chart1" src="../../assets/images/productSummary.png"/>
          </div>
        </div>
        <div class="containerS">
          <div class="boxS">
            <h3>Sales & Purchase</h3>
            <img class="chart1" src="../../assets/images/chart.png"/>
          </div>

          <div class="boxS">
            <h3>Order Summary</h3>
            <img class="chart2" src="../../assets/images/chart2.png"/>
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
                  <th>Sold Quantity</th>
                  <th>Remaining Quantity</th>
                  <th>Price</th>
                </tr>
               </thead>
                <tbody>
                <tr v-for="product in products" :key="product.name">
                  <td>{{ product.name }}</td>
                  <td>{{ product.soldQuantity }}</td>
                  <td>{{ product.remainingQuantity }}</td>
                  <td>S/.{{ product.price }}</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="boxS">
            <h3>Low Quantity Stock</h3>
            <img class="chart2" src="../../assets/images/LowQuantityStock.png"/>
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
  grid-template-columns: 70% 30%;
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
.chart1{
  padding-top: 0.5rem;
  padding-left: 2rem;
  width: 95%;
  height: auto;
}
.chart2{
  padding-top: 0.5rem;
  width: 100%;
  height: auto;
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