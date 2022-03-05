/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var map = [];
    var m = nums1.length,
        n = nums2.length;
    var smallerNum = 0,
        biggerNum = 0;
    var j = 0;
    for (var i = 0; i < (m > n ? m : n); i++) {
        if (!nums1[i] || !nums2[j]) {

        }
        if (nums1[i] !== nums2[j]) {
            smallerNum = nums1[i] < nums2[j] ? nums1[i] : nums2[j];
            biggerNum = nums1[i] > nums2[j] ? nums1[i] : nums2[j];
        } else {
            map.push(nums1[i]);
            map.push(nums2[j]);
            j++;
            continue;
        }
        if (smallerNum > biggerNum) {
            map.push(biggerNum);
            j++;
            biggerNum = 1000001;
        }
        map.push(smallerNum);
        if (biggerNum !== 1000001) {
            map.push(biggerNum);
        }
    }
    console.log(map.length);
    if (map.length % 2 === 0) {
        var midLeft = map[map.length / 2 - 1];
        var midright = map[map.length / 2];
        return (midLeft + midright) / 2;
    } else {
        var mid = map[Math.floor(map.length / 2)];
        return mid;
    }
};