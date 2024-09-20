// Given an array of integers nums and an integer target, return indices(wskaźnik) of the two numbers such that they add up to target.You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// - liczby są NIESORTOWANE
// - optymalnym rozwiązaniem jest wykorzystanie haszowania do śledzenia wcześniej napotkanych liczb i ich indeksów

const twoSum = (nums, target) => {
    // Tworzymy obiekt do przechowywania wcześniej napotkanych liczb i ich indeksów. Liczba to klucz, index to wartośc
    const usedNum = {};

    for (let i = 0; i < nums.length; i++) {
        const missedNumber = target - nums[i];
        // Sprawdzamy, czy complement jest już w obiekcie numToIndex
        if (missedNumber in usedNum) {
            return [usedNum[missedNumber], i];
        }
        // Dodajemy bieżącą liczbę i jej indeks do obiektu
        usedNum[nums[i]] = i;
    }

    return [];
}

// Przykłady użycia:
console.log(twoSum([3, 2, 4], 6)); // Output: [1, 2]
console.log(twoSum([3, 3], 6));    // Output: [0, 1]
// Dlaczego brak else?:

// Gdy znajdziemy komplement (warunek w if jest spełniony), funkcja kończy się dzięki return.
// Gdy komplement nie zostanie znaleziony, kod automatycznie przechodzi do następnej linii (dodanie bieżącej liczby do obiektu), a pętla kontynuuje swoje działanie.

// Sprawdzamy, czy missedNumber znajduje się w obiekcie usedNum.Jeśli tak, oznacza to, że wcześniej napotkaliśmy liczbę, która w połączeniu z obecną liczbą daje target.
// Jeśli nie, dodajemy bieżącą liczbę i jej indeks do obiektu usedNum.
// Haszowanie pozwala na szybkie sprawdzenie, czy liczba została już napotkana, co przyspiesza wyszukiwanie w porównaniu do podejścia z dwoma pętlami(które ma złożoność O(n²)).
// Złożoność czasowa tego rozwiązania to O(n), ponieważ każdy element jest przetwarzany w czasie stałym.
// To podejście działa dobrze zarówno dla posortowanych, jak i nieposortowanych tablic

//TYLKO wynik to liczby:
const twoSumValues = (nums, target) => {
    const seenNums = [];  // Tablica przechowująca już odwiedzone liczby
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (seenNums.includes(complement)) {
            // Zamiast indeksów, zwracamy wartości
            return [complement, nums[i]];
        }
        seenNums.push(nums[i]);  // Dodajemy aktualną liczbę do tablicy "seenNums"
    }
    return [];
};


