<script>
export default {
  name: "orders",
  data() {
    return {
      orders: [
        { orderId: 'O01', productName: 'Producto de Inventario 1', orderValue: 150, quantity: 10, expectedDelivery: '2024-05-31', status: 'Confirmed' },
        { orderId: 'O02', productName: 'Producto de Inventario 2', orderValue: 280, quantity: 20, expectedDelivery: '2024-06-30', status: 'Out for delivery' },
        { orderId: 'O03', productName: 'Producto de Inventario 3', orderValue: 150, quantity: 10, expectedDelivery: '2024-05-31', status: 'Returned' },
        { orderId: 'O04', productName: 'Producto de Inventario 4', orderValue: 280, quantity: 20, expectedDelivery: '2024-06-30', status: 'Delayed' },
        { orderId: 'O05', productName: 'Producto de Inventario 5', orderValue: 150, quantity: 10, expectedDelivery: '2024-05-31', status: 'Confirmed' },
        { orderId: 'O06', productName: 'Producto de Inventario 6', orderValue: 280, quantity: 20, expectedDelivery: '2024-06-30', status: 'Out for delivery' },
        { orderId: 'O07', productName: 'Producto de Inventario 7', orderValue: 150, quantity: 10, expectedDelivery: '2024-05-31', status: 'Delayed' },
        { orderId: 'O08', productName: 'Producto de Inventario 8', orderValue: 280, quantity: 20, expectedDelivery: '2024-06-30', status: 'Returned' },
        { orderId: 'O09', productName: 'Producto de Inventario 9', orderValue: 150, quantity: 10, expectedDelivery: '2024-05-31', status: 'Confirmed' },
        { orderId: 'O10', productName: 'Producto de Inventario 10', orderValue: 280, quantity: 20, expectedDelivery: '2024-06-30', status: 'Delayed' },
        { orderId: 'O11', productName: 'Producto de Inventario 11', orderValue: 150, quantity: 10, expectedDelivery: '2024-05-31', status: 'Confirmed' },
        { orderId: 'O12', productName: 'Producto de Inventario 12', orderValue: 280, quantity: 20, expectedDelivery: '2024-06-30', status: 'Out for delivery' },
        { orderId: 'O13', productName: 'Producto de Inventario 13', orderValue: 150, quantity: 10, expectedDelivery: '2024-05-31', status: 'Confirmed' },
        { orderId: 'O14', productName: 'Producto de Inventario 14', orderValue: 280, quantity: 20, expectedDelivery: '2024-06-30', status: 'Returned' },
        { orderId: 'O15', productName: 'Producto de Inventario 15', orderValue: 280, quantity: 20, expectedDelivery: '2024-06-30', status: 'Returned' },
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
            <h3>Overall Orders</h3>
            <img style="width: 95%; height: auto" src="../../assets/images/overallOrder.png"/>
          </div>
        </div>
        <div class="containerS">
          <div class="boxS">
            <h3>Orders</h3>
            <div class="table">
              <table>
                <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Product Name</th>
                  <th>Order Value</th>
                  <th>Quantity</th>
                  <th>Expected Delivery</th>
                  <th>Status</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="order in orders" :key="order.orderId">
                  <td>{{ order.productName }}</td>
                  <td>S/.{{ order.orderValue }}</td>
                  <td>{{ order.quantity }}</td>
                  <td>{{ order.orderId }}</td>
                  <td>{{ order.expectedDelivery }}</td>
                  <td :style="{color: order.status === 'Delayed' ? '#ffa200' : order.status === 'Confirmed' ? '#0037ff' : order.status === 'Out for delivery' ? '#17bc6e' : 'grey'}">{{ order.status }}</td>
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
  padding: 2em 0;
}
.table thead th {
  padding: 0.5em 2em;
}
.table tr {
  border-bottom: 1px solid #F0F1F3;
}
.table tbody tr:last-child {
  border-bottom: none;
}
.table tbody tr td {
  font-size: 1.2em;
  word-spacing: 0.2em;
  text-align: center;
  padding: 1em 0;
}

.table tbody tr td:first-child {
  text-align: left;
  padding-left: 1em;
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