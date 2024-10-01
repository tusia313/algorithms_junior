//Napisz funkcję, która przyjmuje tablicę liczb i zwraca nową tablicę, w której każda liczba jest podniesiona do kwadratu.
// Zidentyfikuj i obsłuż potencjalne błędy (np. co zrobić, jeśli tablica zawiera wartości niebędące liczbami).
// ! (operator negacji): Operator negacji ! zmienia wynik metody every(). Jeśli every() zwraca true (co oznacza, że wszystkie elementy są liczbami), to !true daje false. Jeśli natomiast every() zwraca false (co oznacza, że przynajmniej jeden element nie jest liczbą), to !false daje true.
// !numbers.every(num => typeof num === 'number'): To wyrażenie zwraca true, jeśli co najmniej jeden element w tablicy numbers nie jest liczbą, a false, jeśli wszystkie są liczbami.

const ourFunction = (numbers) => {
    if (numbers.length === 0 || !numbers.every(num => typeof num === 'number'))
        return "Sorry, it must be a number in here"
    return numbers.map(number =>  number*number)
}

const numbers = [1,2,3,4,5,6,7]

console.log(ourFunction(numbers))