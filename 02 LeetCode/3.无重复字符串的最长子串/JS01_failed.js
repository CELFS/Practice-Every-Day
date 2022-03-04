/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // 字符串匹配，计数器，max存储，返回长度；
    // 1.读取字符串；
    // 2.对不重复的字符进行计数；
    // 3.存储当前长度信息；
    // 4.比较下一字符是否在已存储的字符串中；存在，则记录当前 max 值，重新计数；不存在，则计数 + 1；
    var cnt = 0,
        max = 0;
    var temp = [];
    var j = 0;
    for (var i = 0; i < s.length; i++) {
        if (j === 0) {
            temp[j] = s[i];
            j++;
            cnt++;
            max = max > cnt ? max : cnt;
            // console.log('init');
            continue;
        }
        var k = temp.length - 1;
        while (k >= 0) { // 过滤器
            if (s[i] === temp[k]) {
                max = max > cnt ? max : cnt;
                while (temp.lengh) {
                    temp.pop(temp.lengh - 1);
                    console.log(temp[temp.length - 1]);
                }
                cnt = 1;
                j = 0;
                temp[j] = s[i];
                break;
            }
            k--;
            // console.log('!');
        }
        if (k < 0) { // 到达此处说明没有重复
            temp[j] = s[i];
            j++;
            cnt++;
            max = max > cnt ? max : cnt;
        } else {
            // console.log('?');
            continue;
        }
    }
    return max;
};