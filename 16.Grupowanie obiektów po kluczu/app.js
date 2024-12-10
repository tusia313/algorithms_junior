//Masz tablicę obiektów reprezentujących zamówienia, np.:
const orders = [
    { orderId: 1, status: "completed" },
    { orderId: 2, status: "pending" },
    { orderId: 3, status: "completed" },
    { orderId: 4, status: "shipped" },
    { orderId: 5, status: "pending" }
]
// console.log("statusy zamowien ", orders)

const groupOrders = (orders) => {

    let tasks = {
    
    }
    // console.log("task comelted ", tasks.completed)

    orders.forEach(order => {
        if (!tasks[order.status]) {
            tasks[order.status] = []
        }
        tasks[order.status].push(order)
    })
    return tasks
}

console.log(groupOrders(orders))
//Twoim zadaniem jest napisanie funkcji, która grupuje zamówienia po ich statusie, aby wynik wyglądał tak:
//  output:
//  {
//     completed: [ { orderId: 1, status: "completed" }, { orderId: 3, status: "completed" } ],
//     pending: [ { orderId: 2, status: "pending" }, { orderId: 5, status: "pending" } ],
//     shipped: [ { orderId: 4, status: "shipped" } ]
//   }
