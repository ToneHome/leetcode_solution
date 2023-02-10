/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {

    if (nums.length < 4) return [];

    nums.sort((a, b) => a - b);
    console.log('nums: ', nums);

    let rs = []
    let n = nums.length;
    for (let i = 0; i < n - 3; i++) {
        // 因为 target 可能为 负数或者正数，所以这里不能 通过判断头尾值和target的对比来跳出循环
        // if (nums[i] > target) {
        //     return rs;
        // }
        if (nums[i] === nums[i - 1]) {
            continue;
        }
        for (let j = n - 1; j > i + 2; j--) {
            // 同上一个 注释
            // if (nums[j] < target) {
            //     break;
            // }
            

            if (nums[j] === nums[j + 1]) {
                continue;
            }
            let L = i + 1;
            let R = j - 1;

            while (L < R) {
                let total = nums[i] + nums[j] + nums[L] + nums[R]
                if (total === target) {
                    rs.push([nums[i], nums[j], nums[L], nums[R]])
                    while (L < R && nums[L] === nums[L + 1]) {
                        L++
                    }

                    while (L < R && nums[R] === nums[R - 1]) {
                        R--;
                    }

                    L++;
                    R--;

                }
                else if (total > target) {
                    R--
                }
                else if (total < target) {
                    L++
                }

            }
        }
        console.log(rs);
    }

    return rs;
};
// @lc code=end

