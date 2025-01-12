/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    // let sum = 0;
    // let left = 0, right = 0;
    // let end = height.length - 1;
    
    // for(left; left<end; left++){
    //     right = left+1
    //     let temp = 0
    //     while(true && right <= end){
    //         let leftBar = height[left]
    //         let rightBar = height[right]
    //         if(rightBar >= leftBar){
    //             sum += ((right - left - 1) * Math.min(leftBar, rightBar) - temp);
    //             left = right-1;
    //             break;
    //         }else{
    //             temp+=rightBar
    //         }
    //         right++;
    //     }
    // }
    // // console.log(sum)
    // return sum;

    // let cl = console.log
    let n=height.length
    let maxLeftArr = Array(n).fill(0);
    let maxRightArr = Array(n).fill(0);
    let maxLeft = 0, maxRight = 0;
    let sum=0;

    for(let i=0; i<n; i++){
        maxLeftArr[i] = maxLeft;
        if(height[i] > maxLeft){
            maxLeft = height[i]
        }
    }

    for(let i=n-1; i>=0; i--){
        maxRightArr[i] = maxRight;
        if(height[i] > maxRight){
            maxRight = height[i]
        }
    }

    for(let i=0; i<n; i++){
        let x = Math.min(maxLeftArr[i],maxRightArr[i]) - height[i]
        if(x < 0) continue;
        sum += x
    }

    // cl(maxLeftArr, maxRightArr, sum)
    return sum

};