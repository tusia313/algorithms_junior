//Napisz funkcję findUniqueElements, która przyjmuje tablicę liczb całkowitych i zwraca nową tablicę zawierającą tylko te liczby, które występują w niej dokładnie jeden raz.
//const arr = [4, 5, 9, 11, 4, 9, 8, 5]
// console.log(findUniqueElements(arr)) 
// Output: [11, 8]

// 1. Czy tablica może być pusta? I co wtedy zwracamy
// 2. Czy w tablicy wszystkie liczby będa takie same? I co wtedy zwracamy
// 3. Czy liczby będa dodtanie czy ujemne

const findUniqueElements = (arr) => {
    // Sprawdzenie, czy tablica jest pusta
    if (arr.length === 0) {
        return [] // Zwróć pustą tablicę
    }

    const elementCount = {};
    
    // Zliczanie wystąpień elementów
    arr.forEach(el => {
        elementCount[el] = elementCount[el] ? elementCount[el] + 1 : 1;
    });

    // Tworzenie tablicy z unikalnymi elementami
    const oneAppearance = []
    // !!! KEY
    for (const key in elementCount) {
        if (elementCount[key] === 1) {
            oneAppearance.push(parseInt(key)); // parseInt zamienia nam string na liczbę
        }
    }

    return oneAppearance; // Zwróć tablicę z unikalnymi elementami
}

const arr = [4, 5, 9, 11, 4, 9, 8, 5];
console.log(findUniqueElements(arr)); // Output: [11, 8]
