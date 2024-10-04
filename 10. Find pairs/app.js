//You are given a sorted array of integers and a target sum. Your task is to find all pairs of numbers from the array that add up to the target sum. Use a two-pointer approach to find these pairs efficiently.
//If the sum of the two numbers at the pointers is less than the target, move the left pointer to the right to increase the sum.
//If the sum is greater than the target, move the right pointer to the left to decrease the sum.
//If the sum is equal to the target, add the pair to the result and move both pointers.
const findPairs = (nums, target) => {
    let right = nums.length - 1
    let left = 0
    const results = []

    while (left < right) {
        const sum = nums[right] + nums[left]

        if (sum === target) {
            results.push([nums[right], nums[left]])
            left++
            right--
        }
        else if (sum < target) {
            left++
        }
        else {
            right--
        }
    }
    return results
}
const nums = [1, 2, 3, 4, 5, 6, 7]
const target = 8 //[[2,4]]
console.log(findPairs(nums, target))
//const nums = [1, 2, 3, 4, 5, 6, 7]
//const target = 8
//[[1, 7], [2, 6], [3, 5]]