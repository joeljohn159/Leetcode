/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let hashMap = new Map()
    for(let i=0; i<arr.length; i++){
        if([...hashMap.keys()].includes(arr[i])){
            hashMap.set(arr[i],hashMap.get(arr[i])+1)
        }else{
            hashMap.set(arr[i],1)
        }
    }
    let hashMapValue = Array.from(hashMap.values());
    let hashSet = new Set(hashMapValue)
    return hashMapValue.length === hashSet.size ? true : false
    
};