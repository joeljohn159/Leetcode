/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let start = 0;
    let end = height.length - 1;
    let maxArea = 0;
    while(start < end){
        let area = 0;
        if(height[start] < height[end]){
            area = height[start] * (end - start)
        }else{
            area = height[end] * (end - start)
        }
        maxArea = area > maxArea ? area : maxArea; 

        if(height[start] < height[end]){
            start++
        }else{
            end--;
        }
    }
    return maxArea
};