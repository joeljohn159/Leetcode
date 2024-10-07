/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    let arr = senate.split('')
    // console.log(arr)
    while(arr.length){
        var firstSenate = arr.shift()
        for(var i = 0; i<arr.length; i++){
            if(arr[i] != firstSenate){
                arr.splice(i,1)
                arr.push(firstSenate)
                // console.log(arr)
                break
            }
        }
    }
    return firstSenate === 'R' ? 'Radiant':'Dire'
   
};