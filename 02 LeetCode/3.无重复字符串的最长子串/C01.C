int lengthOfLongestSubstring(char * s){
    int len = strlen(s), cnt = 1, max = 0;
    char tmp[50005] = {0};
    int left = 0;
    if (len == 1) return 1;
    for (int i = 0; i < len; i++) {
        if (i == 0) {
            tmp[0] = s[0];
            continue;
        }
 
        for (int j = left; j < i + 1; j++) {
            if (tmp[j] != s[i] && j != i) {
                continue;
            }
            
            if (tmp[j] == s[i]) {
                max < cnt ? (max = cnt) : (max = max);
                left = j + 1;
                tmp[i] = s[i];
                cnt = i - j;
                break;
            }

            if (j == i) {
                //末位元素插入当前的s[i]
                tmp[j] = s[i];
                cnt++;
                max < cnt ? (max = cnt) : (max = max);
                break;
            }
        }
    }
    return max;
}