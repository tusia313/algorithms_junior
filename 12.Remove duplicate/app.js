//You are given a sorted array nums. Your task is to remove the duplicates in-place (without using extra space for another array) so that each unique element appears only once. Return the length of the modified array.

const removeDuplicates = (nums) => {
    if (nums.length === 0) return 0 
//W zadaniu celem jest usunięcie duplikatów z posortowanej tablicy. Nie możemy tworzyć nowej tablicy — musimy nadpisywać istniejącą, zachowując unikalne elementy na początku tablicy. W tym celu używamy wskaźnika uniqueIndex, który będzie śledził pozycję, na którą należy wstawić kolejny unikalny element.
    let uniqueIndex = 0
    //iteracja zacyzna się od 1, bo 0 element zawsze jest unikalny
    for (let i=1; i<nums.length; i++) {
            if(nums[i] !=  nums[uniqueIndex]){
                uniqueIndex++
                //tak właśnie się NADPISUJE tablice, bo nie możemy stworzyć nowej!
                nums[uniqueIndex] = nums[i]
            }
    }
//return zawsze na końcu
    return uniqueIndex + 1
}
const nums = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(nums));  // Expected output: 5, modified array: [0, 1, 2, 3, 4]
