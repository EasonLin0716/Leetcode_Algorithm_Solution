/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function (instructions) {
  // 東 西 南 北
  // f 表示 facing(面向) 預設面向北
  var dir = [
    [0, 1],
    [-1, 0],
    [0, -1],
    [1, 0],
  ];
  var x = 0;
  var y = 0;
  var f = 1;

  for (var i = 0; i < instructions.length; i++) {
    if (instructions[i] === "L") {
      // L代表往左 若目前面向N，往左即面向西
      f = (f + 1) % 4;
    } else if (instructions[i] === "R") {
      // R代表往左 若目前面向L，往左即面向東
      f = (f + 3) % 4;
    } else {
      x = x + dir[f][0];
      y = y + dir[f][1];
    }
  }
  console.log({ x, y, f });
  // 走完第一輪有回到原點表示對
  // 走完第一輪沒回到原點，但不朝向北，表示對
  return (x === 0 && y === 0) || f !== 1;
};
