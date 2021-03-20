# line-segment-intersect-2d

determine whether two line segments intersect in 2d and calculate the intersection point

use [robust-segment-intersect][] for a numerically stable intersection test (but does not compute
the intersection point) or [segseg][] for a similar routine as an ES module
(line-segment-intersect is commonjs).

[robust-segment-intersect]: https://github.com/mikolalysenko/robust-segment-intersect
[segseg]: https://github.com/tmpvar/segseg

# example

``` js
var intersect = require('line-segment-intersect-2d')
console.log(intersect([],[1,1],[2,2],[3,0],[0,5])) // [1.875,1.875]
console.log(intersect([],[-3,5],[-1,0],[-1,4],[-3,-1])) // [-1.8,2]
console.log(intersect([],[4,5],[-3,3],[1,3],[3,1])) // null
```

# api

```
var intersect = require('line-segment-intersect-2d')
```

## intersect(out, a0, a1, b0, b1)

Returns `out` and sets `out` to the intersection point when the 2 line segments described by the
2-element arrays for points `a0`, `a1` and `b0`, `b1` intersect.

Returns `null` when there is no intersection.

# install

```
npm install line-segment-intersect-2d
```

# license

bsd
