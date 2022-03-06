const orders= [
  {
    date: '2020-5-5',
    subtotal : 511,
    items : [
       {
         Product: {
         id : "playStation5"
         },
         quantity : 1
       }
       ,
       {
         Product: {
           id : "callOfDuty",
         },
         quantity : 1
       }
    ]
 },
]

function getAllOrders (){
  return orders;
}

module.exports = {
  getAllOrders,
}