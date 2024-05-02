<script>
export default {
  name: "inventory",
  data() {
    return {
      products: [
        { id: 'IK01', name: 'Inca Kola', category: 'Bebidas', remainingQuantity: 100, turnOver: 350, profitIncreasePercentage: 0.10 },
        { id: 'CM02', name: 'Chicha Morada', category: 'Bebidas', remainingQuantity: 150, turnOver: 375, profitIncreasePercentage: 0.15 },
        { id: 'P03', name: 'Pisco', category: 'Bebidas', remainingQuantity: 200, turnOver: 6000, profitIncreasePercentage: 0.20 },
        { id: 'C04', name: 'Cusqueña', category: 'Bebidas', remainingQuantity: 250, turnOver: 1000, profitIncreasePercentage: 1.25 },
        { id: 'S05', name: 'Sublime', category: 'Snacks', remainingQuantity: 300, turnOver: 300, profitIncreasePercentage: 0.30 },
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
            <h3>Overview</h3>
            <img class="chart1" src="../../assets/images/overview.png"/>
          </div>

          <div class="boxS">
            <h3>Best selling category</h3>
            <img class="chart1" src="../../assets/images/bestSellingCategory.png"/>
          </div>
        </div>

        <div class="containerS2">
          <div class="boxS">
            <h3>Profit & Revenue</h3>
            <img class="chart1" src="../../assets/images/profit.png"/>
          </div>
        </div>
        <div class="containerS2">
          <div class="boxS">
            <h3>Best Selling Stock</h3>
            <div class="table">
              <table>
                <thead>
                <tr>
                  <th>Name</th>
                  <th>ID</th>
                  <th>Category</th>
                  <th>Remaining Quantity</th>
                  <th>Generated</th>
                  <th>Profit Increase</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="product in products" :key="product.id">
                  <td>{{ product.name }}</td>
                  <td>{{ product.id }}</td>
                  <td>{{ product.category }}</td>
                  <td>{{ product.remainingQuantity }}</td>
                  <td>S/.{{ product.turnOver }}</td>
                  <td :style="{color: product.profitIncreasePercentage > 0 ? '#17bc6e' : '#DA3E33'}">{{ product.profitIncreasePercentage }}%</td>
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
  grid-template-columns: repeat(auto-fit,minmax(18rem,1fr));
  grid-gap: 2rem;
  padding: 1rem 0;

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
.chart1{
  padding-top: 0.5rem;
  padding-left: 2rem;
  width: 95%;
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