/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let stack = []
    for(const char of s){
        if(char != ']'){
            stack.push(char);
            continue;
        }
        // console.log('Not ] pushing to stack, STACK=',stack)
        
        let innerString = ''
        let multiplier = '';
        let curr = stack.pop()
        while(curr != '['){
            innerString = curr + innerString;
            curr = stack.pop()
        }
        // console.log("Stack innerString = ",innerString," STACK=",stack)
        // stack.pop();
        let digit = stack.pop()
        // console.log('DIGIT IS ',digit)
        while(Number.isInteger(Number(digit))){
            multiplier = digit + multiplier;
            digit = stack.pop()
        }
        // console.log("Stack multiplier = ",multiplier," STACK=",stack)
        digit !== undefined && stack.push(digit);
        stack.push(innerString.repeat(Number(multiplier)))
        // console.log('FINAL stack after iteration:',stack)

    }
    // console.log(stack)
    return stack.join('')
};