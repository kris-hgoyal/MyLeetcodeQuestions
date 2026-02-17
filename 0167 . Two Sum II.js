/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
        i = 0;
        j = numbers.length-1;
        while(i<j){
            sum = numbers[j]+numbers[i];
            if(sum===target) return [i+1,j+1];
            if(sum>target) j--;
            if(sum<target) i++;
        }
};
