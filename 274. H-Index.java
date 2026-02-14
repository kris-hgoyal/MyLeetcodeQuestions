class Solution {
    public int hIndex(int[] citations) {
        Arrays.sort(citations);
        int n = citations.length;
        int count = n;
        for(int i = 0; i < n; i++){
            if(citations[i] >= count){
                return count;
            }
            count--;
        }
        return 0;
    }
}
