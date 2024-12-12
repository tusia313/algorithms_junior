// Masz tablicę obiektów reprezentujących produkty. Twoim zadaniem jest napisać funkcję, która zwróci obiekt, w którym klucze to nazwy kategorii produktów, a wartości to liczba wystąpień tych kategorii.
const products = [
    { name: "Laptop", category: "Electronics" },
    { name: "Phone", category: "Electronics" },
    { name: "Shirt", category: "Clothing" },
    { name: "Pants", category: "Clothing" },
    { name: "Keyboard", category: "Electronics" },
    { name: "Shoes", category: "Clothing" }
]

const numberOfProductsCalculation = (products) => {
    let numOfProduct = {

    }

    products.forEach(product => {
            numOfProduct[product.category] = numOfProduct[product.category] ? numOfProduct[product.category] + 1 : 1
        }
    )
    return numOfProduct

}
console.log("Wynik końcowy: ", numberOfProductsCalculation(products))
// {
//     Electronics: 3,
//     Clothing: 3
// }

