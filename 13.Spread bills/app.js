//A group of friends went on a trip. Each person paid individually for various things on the trip; some people paid more, some people paid less. After they came back, they wanted to split the costs evenly.Implement a solution to calculate a list of payment transactions to clear the outstanding debts.

const divideExpenses = (expenses) => {
//1.Zliczyć ile jest osób
const howManyPersons = expenses.length
//2.Policzyć średnia wydatków
console.log(expenses.person)
//const wholeAmount = 
//const averageAmount = wholeAmount/howManyPersons
//3.Zobaczyć, kto jest poniżej a kto rowno lub powyżej tych wydatków
//4.Utwożyć dwie listy z tymi osobami

}


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
console.log(divideExpenses(expenses))

// Output:transactions = [
//   {
//     from: 'Mike',
//     to: 'Bob',
//     amount: 10,
//   }