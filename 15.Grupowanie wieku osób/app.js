const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 15 },
    { name: "Charlie", age: 70 },
    { name: "David", age: 40 },
    { name: "Eve", age: 12 }
]

const checkAge = (people) => {

    let ageCategory = {

    }
    console.log("Age category object: ", ageCategory)
    const youth = 17
    const adults = 64
    const senior = 65

    people.forEach(person => {
        if (person.age <= youth)
            ageCategory.push({ youth: person.name })
        else if (person.age > youth && person.age <= adults)
            ageCategory.push({ adults: person.name })
        else {
            ageCategory.push({ senior: person.name })
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

