/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    if(intervals.length <= 0) return 0;
    intervals.sort((a,b)=>a[1]-b[1])
    let removed = 0, prev_interval_1 = intervals[0][1];
    for(let i=1; i<intervals.length; i++){
        if(intervals[i][0] < prev_interval_1){
            removed++;
        }else{
             prev_interval_1 = intervals[i][1]
        }
    }
    return removed
};