/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k%nums.length;
    for(let i =0; i<Math.floor(nums.length/2);i++){
        let temp = nums[i];
        nums[i] = nums[nums.length-i-1];
        nums[nums.length-i-1] = temp;
    }

    for(let i =0; i<Math.floor((k) / 2);i++){
        let temp = nums[i];
        nums[i] = nums[k-i-1];
        nums[k-i-1] = temp;
    }
    let j = k;
    for(let i =0; i<Math.floor((nums.length-k)/2);i++){
        let temp = nums[j];
        nums[j] = nums[nums.length-i-1];
        nums[nums.length-i-1] = temp;
        j++;
    }

    return nums
};
