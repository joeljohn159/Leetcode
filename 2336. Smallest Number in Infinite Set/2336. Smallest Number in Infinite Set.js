// [1,2,3,4,5,.........]
//set = empty
// if set is empty its present => add 2 = its already thr ? 
// min-pointer = 0
// pop - 1 .. min-pointer = 1 , set(1)
// pop - 2 .. min-pointer = 2 , set(1,2)
// pop - 3 .. min-pointer = 3, set(1,2,3)
//addBack(1) .. set has 1, yes, remove it && insert 1,at correct position.
var SmallestInfiniteSet = function() {
    this.myArr = Array.from({length : 1000 }, (_,i)=>1000-i)
    this.mySet = new Set()
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function() {
    // console.log(this.myArr[1000])
    if(!this.myArr.length) return null;
    let x = this.myArr.pop()
    this.mySet.add(x)
    return x
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function(num) {
    if(!this.mySet.has(num)) return null;
    this.mySet.delete(num)
    for(let i = this.myArr.length-1; i >= 0 ; i--){
        if(num < this.myArr[i]){
            this.myArr.splice(i+1,0,num);
            break;
        }
    }
};

/** 
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */