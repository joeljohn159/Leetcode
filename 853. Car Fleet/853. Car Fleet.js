/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    
    let stack = [];
    let positionAndSpeed = position.map((item,i)=>[item, speed[i]]);
    positionAndSpeed.sort((a,b) => b[0] - a[0])

    // console.log(positionAndSpeed)

    for(let i=0 ; i<position.length; i++){
        let x = (target - positionAndSpeed[i][0])/ positionAndSpeed[i][1]
        if(stack.length < 1 || stack[stack.length - 1] < x){
            stack.push(x)
        }
    }

    return stack.length
};