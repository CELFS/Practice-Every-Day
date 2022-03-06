/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    // 41min
    var head = 0;
    var tail = s.length - 1;
    var couple = [];
    while (head < tail) {
        for (var i = 0; i < couple.length; i++) {
            if (s[head] === s[tail]) {
                couple.push(s[head]);
                head++;
            } else {
                break;
            }
        }
        tail--;
    }
};