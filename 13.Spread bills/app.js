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
  expenses.forEach(exp => {
    totalAmount += exp.amount
  })
  const oneAmount = totalAmount / totalPerson
  console.log("one amount: ", oneAmount)
  let underAmount = []
  let overAmount = []

  for (let i = 0; i < totalPerson; i++) {

    if (expenses[i].amount >= oneAmount) {
      overAmount.push(expenses[i])
    }
    else {
      underAmount.push(expenses[i])
    }
    expenses[i]++
  }

  console.log("under: ", underAmount)
  console.log("over: ", overAmount)
}
let transaction = {

}
for (let i = 0; i < underAmount.length; i++) {
  let debtor = underAmount[i]
  for (let j = 0; j < overAmount.length; j++) {
    let creditor = overAmount[j]
    let payment = creditor.amount - debtor.amount
  }
}

console.log(divideExpenses(expenses))

// {
//   from: 'Mike',
//   to: 'Bob',
//   amount: 10,
// }