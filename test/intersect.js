var test = require('tape')
var intersect = require('../')

test('intersect', function (t) {
  t.deepEqual(intersect([],[1,1],[2,2],[3,0],[0,5]),[1.875,1.875])
  t.deepEqual(intersect([],[-3,5],[-1,0],[-1,4],[-3,-1]),[-1.8,2])
  t.deepEqual(intersect([],[4,5],[-3,3],[1,3],[3,1]),null)
  var out = [0,0]
  t.strictEqual(intersect(out,[1,1],[2,2],[3,0],[0,5]),out)
  t.deepEqual(out, [1.875,1.875])
  t.end()
})
