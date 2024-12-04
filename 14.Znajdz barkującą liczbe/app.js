//Dla podanej tablicy liczb całkowitych od 1 do n, w której jedna liczba jest brakująca, znajdź tę brakującą liczbę.

const nums = [1, 2, 4, 5]

const findMissingNumb = (nums) => {
//logika: iterujemy po tablicy i sprawdzamy, po numerze "i" następna liczba jest równa i+1. jak nie - to to jest return i+1


for (let i = 0; i < nums.length - 1; i++) {
    if ((nums[i] + 1) !== nums[i+1]) {
        return nums[i] + 1
    }
   
}

}
console.log(findMissingNumb(nums))