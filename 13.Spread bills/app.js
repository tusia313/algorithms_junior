//A group of friends went on a trip. Each person paid individually for various things on the trip; some people paid more, some people paid less. After they came back, they wanted to split the costs evenly.Implement a solution to calculate a list of payment transactions to clear the outstanding debts.

const expenses = [
  {
    person: 'Alice',
    amount: 20,
  },
  {
    person: 'Bob',
    amount: 30,
  },
  {
    person: 'Mike',
    amount: 10,
  }
]
// console.log(expenses[1].amount)

const divideExpenses = (expenses) => {
  const howManyPersons = expenses.length
  let wholeAmount = 0
  for (let i = 0; i < howManyPersons; i++) {
    wholeAmount += expenses[i].amount
  }
  const averageAmount = wholeAmount / howManyPersons

  let underAverageAmount = []
  let aboveAverageAmount = []
for (let i =0; i < howManyPersons; i++) {
  if (expenses[i].amount < averageAmount) {
    underAverageAmount.push(expenses[i])
  } else {
    aboveAverageAmount.push(expenses[i])
  }
}

let transactions = []

for (let i = 0; i < aboveAverageAmount.length; i++) {
  
  let balance = aboveAverageAmount[i].amount - averageAmount
  console.log(balance)
}

  // return transactions = [
  //   {
  //     from: ,
  //     to: ,
  //     amount:
  //   }
  // ]
}

console.log(divideExpenses(expenses))



// {
//   from: 'Mike',
//   to: 'Bob',
//   amount: 10,
// }