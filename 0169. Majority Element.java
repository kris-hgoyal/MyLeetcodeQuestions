class Solution {
    public int majorityElement(int[] nums) {
        Arrays.sort(nums);
        int i =0;
        int l =0;
        for(int j =1; j<nums.length; j++){
            if(nums[j]!=nums[i]){
                l = j-i;
                if(l>nums.length/2) return nums[i];
                i = j;
            }
        }
        if (nums.length - i > nums.length / 2) return nums[i];
        return -1;
    }
}
