module.exports = function lineIntersection(out, a0, a1, b0, b1) {
  var ax = a1[0] - a0[0]
  var ay = a1[1] - a0[1]
  var bx = b1[0] - b0[0]
  var by = b1[1] - b0[1]
  var d = ax*by - bx*ay
  if (d === 0) return null
  var dpos = d > 0
  var cx = a0[0] - b0[0]
  var cy = a0[1] - b0[1]
  var sn = ax*cy - ay*cx
  if ((sn < 0) === dpos) return null
  var tn = bx*cy - by*cx
  if (tn < 0 === dpos) return null
  if ((sn > d === dpos) || (tn > d === dpos)) return null
  var t = tn / d
  out[0] = a0[0] + t*ax
  out[1] = a0[1] + t*ay
  return out
}
