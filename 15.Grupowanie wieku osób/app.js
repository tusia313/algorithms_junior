const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 15 },
    { name: "Charlie", age: 70 },
    { name: "David", age: 40 },
    { name: "Eve", age: 12 }
]

const checkAge = (people) => {

    let ageCategory = {
        //ważne! te przypisania
        youth: [],
        adults: [],
        senior: []
    }
    console.log("Age category object: ", ageCategory)
    const youth = 17
    const adults = 64
//bardzo ważne! zobacz sobie, jak się dodaje do obeiktu
    people.forEach(person => {
        if (person.age <= youth) {
            ageCategory.youth.push(person.name) }
        else if (person.age > youth && person.age <= adults) {
            ageCategory.adults.push(person.name)
        }
        else {
            ageCategory.senior.push(person.name)
        }
    })
    return ageCategory
}
console.log(checkAge(people))

// {
//     youth: ["Bob", "Eve"],
//     adults: ["Alice", "David"],
//     seniors: ["Charlie"]
//   }

