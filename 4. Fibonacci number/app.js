// Napisz funkcję fibonacci, która przyjmuje liczbę całkowitą n jako argument i zwraca n-tą liczbę Fibonacciego.
// Liczby Fibonacciego są zdefiniowane w następujący sposób:
// f(0) = 0
// f(1) = 1
// f(n) = f(n-1) + f(n-2) dla n > 1
// Warunki brzegowe:
// Jeśli n jest mniejsze niż 0, funkcja powinna zwrócić null lub inny komunikat o błędzie.


const fibonacci = (number) => {

    if (!Number.isInteger(number)) {
        return "Błąd: liczba musi być liczbą całkowitą." // komunikat o błędzie
    }
    if (number < 0) {
        return "Bład. Liczba musi być mniejsza lub równa 0"
    }

    if (number === 0) return 0
    if (number === 1) return 1

    const fibonacciObject = {
        0: 0,
        1: 1
    }

    // granica to NUMBER
    for (let i = 2; i <= number; i++) {
        fibonacciObject[i] = fibonacciObject[i - 1] + fibonacciObject[i - 2]
    }

    return fibonacciObject[number]
}



console.log(fibonacci(0)) // 0
console.log(fibonacci(1)) // 1
console.log(fibonacci(5)) // 5
console.log(fibonacci(10)) // 55

