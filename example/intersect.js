var intersect = require('../')
console.log(intersect([],[1,1],[2,2],[3,0],[0,5])) // [1.875,1.875]
console.log(intersect([],[-3,5],[-1,0],[-1,4],[-3,-1])) // [-1.8,2]
console.log(intersect([],[4,5],[-3,3],[1,3],[3,1])) // null
