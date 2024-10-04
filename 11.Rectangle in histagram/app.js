//Masz posortowaną tablicę liczb całkowitych nums oraz liczbę docelową target. Twoim zadaniem jest znaleźć dwie różne liczby z tablicy, których suma jest mniejsza od target, ale jest możliwie najbliższa tej wartości. Zwróć parę liczb.
//Każdy element z tablicy może być użyty tylko raz. Musisz znaleźć największą możliwą sumę dwóch liczb, która jest mniejsza niż target.

const findClosestPair = (nums, target) => {
    let left = 0
    let right = nums.length - 1
    let bestPairs = [] //to by nam było potrzebne, gdyby trzeba było przypisać ta parę ( jeżeli warunek z === 1 by był inny)

    while (left < right) {
        const sum = nums[left] + nums[right]
        if (target - sum === 1) {
            return [nums[left], nums[right]]
        }
        if (target <= sum) {
            right--
        } else {
            left++
            }
    }
}



const nums = [2, 4, 7, 11, 15];
const target = 10;

console.log(findClosestPair(nums, target)) // Oczekiwane: [2, 7]
