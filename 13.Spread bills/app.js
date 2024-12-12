//A group of friends went on a trip. Each person paid individually for various things on the trip; some people paid more, some people paid less. After they came back, they wanted to split the costs evenly.Implement a solution to calculate a list of payment transactions to clear the outstanding debts.

const expenses = [
  { person: 'Alice', amount: 25 },
  { person: 'Bob', amount: 15 },
  { person: 'Mike', amount: 10 },
  { person: 'Eve', amount: 50 }
]
console.log("amount: ", expenses.amount)

const divideExpenses = (expenses) => {
  const totalPerson = expenses.length
  let totalAmount = 0
  expenses.forEach(exp => 
    {totalAmount += exp.amount
})
const oneAmount = totalAmount / totalPerson
  let underAmount = []
  let overAmount = []
}

console.log(divideExpenses(expenses))

// {
//   from: 'Mike',
//   to: 'Bob',
//   amount: 10,
// }