/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // Tried to use some ideas in binary search, but 【failed】.
    nums = nums.sort(function(a, b) { return a - b });
    var l = 0,
        r = nums.length - 1,
        mid = (l + r) / 2;
    mid = parseInt(mid);
    for (var i = 0; i < nums.length; i++) { // 锚一个值
        var sum = nums[i] + nums[mid];
        // 二分，查找另一个值
        if (sum > target) {
            // 取左半边
            r = mid;
            mid = (l + r) / 2;
            mid = parseInt(mid);
            for (var j = l; j < r; j++) {
                sum = nums[i] + nums[mid];
                if (sum === target) {
                    if (i === j) {
                        continue;
                    } else {
                        var Arr = [i, j];
                        console.log(1);
                        return Arr;
                    }
                } else {
                    continue;
                }
            }
        } else if (sum < target) {
            // 取右半边
            l = mid;
            mid = (l + r) / 2;
            mid = parseInt(mid);
            for (var j = l; j < r; j++) {
                sum = nums[i] + nums[mid];
                if (sum === target) {
                    if (i === j) {
                        continue;
                    } else {
                        var Arr = [i, j];
                        console.log(2);
                        return Arr;
                    }
                } else {
                    continue;
                }
            }
        } else {
            if (i === mid) {
                continue;
            } else if (i > mid) {
                // 交换
                var temp = i;
                i = mid;
                mid = temp;
                var Arr = [i, mid];
                console.log(3);
                return Arr;
            } else {
                var Arr = [i, mid];
                console.log(4);
                return Arr;
            }
        }
        // 复位，l 向后一位移动，相当于移动区间
        // l = i + 1;
        // r = nums.length - 1;
        // mid = (l + r) / 2;
    }
};