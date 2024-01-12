function findSumOfThreeValues(nums, target) {
  nums.sort((a, b) => a - b);

  //for three values create the start and end inside the for loop
  // and make the forloop stop before it hits the end
  for (let i = 0; i < nums.length - 2; i++) {
    let start = i + 1; //
    let end = nums.length - 1;

    // leaves i = 0; start = 1, end = nums.length
    // start will increase or nums will decrease
    // i = 0, start = 1, end = 5 ; i = 0, start = 2, end = 5
    // eventually when exiting the while loop, start and end get reset in the for loop,
    // restarting the whole process over
    while (start < end) {
      let curNum = nums[start] + nums[end] + nums[i];
      if (curNum === target) {
        return true;
      } else if (curNum < target) {
        start++;
      } else {
        end--;
      }
    }
  }
  return false;
}

findSumOfThreeValues([0, 1, 2, 3, 4, 5], 9);

module.exports = {
  findSumOfThreeValues,
};
