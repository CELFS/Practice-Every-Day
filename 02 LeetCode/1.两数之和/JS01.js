/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // O(n^2)
    for (var i = 0; i < nums.length; i++) {
        // A very low level error: wrote the variable of condition j as i.
        // This may not be a problem of carelessness.
        for (var j = i + 1; j < nums.length; j++) {
            var sum = nums[i] + nums[j];
            if (sum === target) {
                if (i === j) {
                    continue;
                } else {
                    // Storage in an array to return in one value.
                    var Arr = [i, j];
                    return Arr;
                }
            } else {
                continue;
            }
        }
    }
};