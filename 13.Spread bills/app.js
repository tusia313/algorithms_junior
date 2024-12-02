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

  //tablice przechowujace obiekty {person:, balance:}
  const underAverageAmount = []
  const aboveAverageAmount = []

  for (let i = 0; i < howManyPersons; i++) {
    const person = expenses[i]
    const balance = person.amount - averageAmount

    if (balance > 0) {
      //dodajemy obiekt do tablicy
      aboveAverageAmount.push({ person: person.person, balance })
    } else if (balance < 0) {
      underAverageAmount.push({ person: person.person, balance })
    }
  }
  console.log(aboveAverageAmount)
  console.log(underAverageAmount)
  let transaction = []

  for (let i = 0; i < underAverageAmount.length; i++) {
    let debtor = underAverageAmount[i]
    for (let j = 0; j < aboveAverageAmount.length; j++) {
      let creditor = aboveAverageAmount[i]

      let payment = creditor.balance - debtor.balance
      console.log(payment)
      if (creditor.balance > 0 && debtor.balance < 0) {
        //dodanie transakcji
        transaction.push([
          {
            from: debtor.person,
            to: creditor.person,
            amount: creditor.balance
          }
        ])
        // aktualizacja finansów, bo naczej będziemy przypisywać to do tego samegi
        creditor.balance =- payment
        debtor.balance =+ payment
      }
      // jeśli dłuznik spłaci wszystko, przejdź do następnego
      if (payment === 0){
        break;
      }
    }
  }
return transaction

}

console.log(divideExpenses(expenses))



// {
//   from: 'Mike',
//   to: 'Bob',
//   amount: 10,
// }