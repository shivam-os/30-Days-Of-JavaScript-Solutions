//1. Check the speed difference among the following loops: while, for, for of, forEach
const nums = [1, 2, 3, 4, 5];

console.time("Time for the while loop");
let i = 0;
while (i < nums.length) {
  console.log(nums[i]);
  i++;
}
console.timeEnd("Time for the while loop");

console.time("Time for the for loop");
for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}
console.timeEnd("Time for the for loop");

console.time("Time for the for-of loop");
for (let item of nums) {
  console.log(item);
}
console.timeEnd("Time for the for-of loop");

console.time("Time for the for-each loop");
nums.forEach(num => console.log(num));
console.timeEnd("Time for the for-each loop");