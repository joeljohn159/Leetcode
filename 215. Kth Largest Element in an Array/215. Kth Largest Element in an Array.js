/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    // Using quick select, it partitin the array taking one pivot element, I prefer to take last element as pivot.

    // k = nums.length - k;

    // function swap(a,b){
    //     let temp = nums[a];
    //     nums[a] = nums[b]
    //     nums[b] = temp;
    // }
    // function quickSort(l,r){
    //     let pivot = nums[r];
    //     let p = l;
    //     for(let i=l ; i<r; i++){
    //         if(nums[i] <= pivot){
    //             swap(i,p);
    //             p++;
    //         }
    //     }
    //     swap(p, r)
    //     // console.log('Left Index is ', l, ' Right Index is ',r, ' After Quick Sort, pivot is ', pivot, ' numsArr is ',nums)
    //     if(p > k){
    //         return quickSort(l, p-1)
    //     }else if(p < k){
    //         return quickSort(p+1, r)
    //     }else{
    //         return nums[p]
    //     }
    // }
    // return quickSort(0, nums.length-1)




    // Using Heap & Heapify
    //Python has heapq dat structure builtIn for operations

    let maxHeap = [null]
    function insert(ele) {
        //Check if it has no elements
        if (maxHeap.length < 2) {
            maxHeap.push(ele)
        } 
        //Executes if Heap has elements
        else {
            maxHeap.push(ele)
            let idx = maxHeap.length-1;


            while (idx > 1) {
                let parent = Math.floor(idx/2); //current index parent Node.
                // console.log('Current Idx = ',idx , 'Parent = ', parent, ' Element is ',ele, ' Heap is', maxHeap)
                if (maxHeap[parent] < maxHeap[idx]) { // Compare if parent Node is less
                    [maxHeap[parent], maxHeap[idx]] = [maxHeap[idx], maxHeap[parent]]; //Swap the parent and current Node
                    idx = parent
                }else{ // if parent Node is greater break the loop
                    break;
                }
            }

        }
    }

    function remove(){
        if(maxHeap.length <= 1){
            return -1
        }
        if(maxHeap.length === 2){
            return maxHeap.pop()
        }
        [maxHeap[1], maxHeap[maxHeap.length - 1]] = [maxHeap[maxHeap.length - 1], maxHeap[1]]
        let removedEle = maxHeap.pop();

        // console.log(maxHeap);

        let idx = 1;
        while(true){
            let leftChild = 2*idx;
            let rightChild = 2*idx + 1; 
            let largest = idx

            if(leftChild < maxHeap.length && maxHeap[leftChild] > maxHeap[largest]){
                largest = leftChild
            } 
            if(rightChild < maxHeap.length && maxHeap[rightChild] > maxHeap[largest]){
                largest = rightChild
            }
            if(largest != idx){
                [maxHeap[largest], maxHeap[idx]] = [maxHeap[idx], maxHeap[largest]]
                idx = largest
            }else{
                break
            }
        }
        return removedEle
    }
    function heapify(nums){
        for(let i=0; i < nums.length ;i++){
            insert(nums[i])
        }
    }
   heapify(nums)
//    console.log(maxHeap)
   let kth = -Infinity
    
    for(let i=0 ; i<k; i++){
        kth = remove()
    }
   return kth;
};