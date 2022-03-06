const ordersModule = require('./order.model');

module.exports = {
  Query : {
    orders: () =>{
      return ordersModule.getAllOrders();
    }
  }
}