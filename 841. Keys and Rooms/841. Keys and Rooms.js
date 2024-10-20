/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
   visited = new Set();

   stack = [0];

   while(stack.length){
    let room = stack.pop();
    visited.add(room);
    // console.log('ROOM is :',room,' VISITED : ', visited, 'STACK IS : ', stack)

   
    for(let i of rooms[room]){
        // console.log('inside FOR: ',i, rooms[room])
        if(!visited.has(i)){
            stack.push(i)
        }
    }
    
    
   }

   return visited.size === rooms.length
};