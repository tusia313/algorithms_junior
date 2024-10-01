// Masz daną tablicę liczb całkowitych nums oraz liczbę całkowitą target. Twoim zadaniem jest znalezienie dwóch indeksów liczb w tablicy, które sumują się do target.
// Każdy zestaw liczb w tablicy nums będzie miał dokładnie jedno rozwiązanie.
// Możesz założyć, że ten sam element nie może być użyty więcej niż raz.
// Zadanie: Napisz funkcję twoSum(nums, target), która zwróci tablicę z dwoma indeksami liczb, które sumują się do target.

const twoSum = (nums, target) => {
    const searchedNums = {} //obiekt do przechowywanie liczb z indeksami
    for (let i = 0; i < nums.length; i++) {
        const firstNumber = nums[i]
        const secondNumber = target - firstNumber
       if (secondNumber in searchedNums) {
        //WAŻNE : zwraca INDEKS drugiej liczby (zwroc uwage na zapis!) i indeks pierwszej, czyli tej, po ktorej iterujemy
            return [searchedNums[secondNumber], i]
       }
       // WAŻNE dwa: zobacz, jak dodajemy liczbe do obiektu
       searchedNums[firstNumber] = i
    }
}

const nums = [2, 7, 11, 15]
const target = 9
console.log(twoSum(nums, target))

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


