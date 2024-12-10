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
//lub alternatywnie:
// const groupOrders = (orders) => {

//     let tasks = {
//         completed: [],
//         pending: [],
//         shipped: []
//     }
//     // console.log("task comelted ", tasks.completed)

//     orders.map((order, index) => {
//         console.log(order.status)
//         if (order.status === "completed") {
//             tasks.completed.push(order)
//         }
//         else if(order.status === "pending"){
//             tasks.pending.push(order)
//         }
//         else {
//             tasks.shipped.push(order)
//         }
//     })
//     return tasks
// }
