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
    const person = expenses[i] // iterujemy po obiektach
    const balance = person.amount - averageAmount // ile każdy jest dłużny

    if (balance > 0) {
      //dodajemy obiekt do tablicy
      aboveAverageAmount.push({ person: person.person, balance: balance })
    } else if (balance < 0) {
      underAverageAmount.push({ person: person.person, balance: balance })
    }
  }
  console.log("Above average amount: ", aboveAverageAmount)
  
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
        // aktualizacja finansów, jkaby jeden zyskuje to, co mu oddał typ, a typ traci to , co oddał ;)
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


