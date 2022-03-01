class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        // 无序关联容器，本质 hash
        unordered_map<int, int> m;
        vector<int> ans;
        for (int i = 0; i < nums.size(); i++) {
            if (m.count(target - nums[i]) == 1) {
                ans.push_back(m[target - nums[i]]);
                ans.push_back(i);
                break;
            }
            m[nums[i]] = i;
        }
        return ans;
    }
};