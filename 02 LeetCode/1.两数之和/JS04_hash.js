/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var map = {};
    var len = 0;
    var result = [];
    while (len < nums.length) {
        var currentNum = nums[len];
        var needNum = target - currentNum;
        if (map[needNum] !== undefined) {
            result = [map[needNum], len];
            return result;
        }
        map[currentNum] = len++;
    }
    return result;
};