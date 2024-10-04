//Napisz funkcję findUniqueElements, która przyjmuje tablicę liczb całkowitych i zwraca nową tablicę zawierającą tylko te liczby, które występują w niej dokładnie jeden raz.

const findUniqueElements = (arr) => {
    if (arr.length === 0) {
        return [] 
    }
    const elementCount = {

    }
    arr.forEach(el => {
        elementCount[el] = elementCount[el] ? elementCount[el] + 1 : 1;
    })
    // Tworzenie tablicy z unikalnymi elementami
    const oneAppearance = []
    // !!! KEY
    for (const key in elementCount) {
        if (elementCount[key] === 1) {
            oneAppearance.push(parseInt(key)) // parseInt zamienia nam string na liczbę
        }
    }
    return oneAppearance // Zwróć tablicę z unikalnymi elementami, jest na samym końcu
}

const arr = [4, 5, 9, 11, 4, 9, 8, 5];
console.log(findUniqueElements(arr)); // Output: [11, 8]
