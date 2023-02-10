/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    // 特殊情况判断
    // 1、nums 不存在
    // 2、nums 的长度 小于 3
    if (!nums || nums.length < 3 || !nums.length) {
        return []
    }
    // 先从小到大排序
    nums.sort((a,b) => a-b)
    let n = nums.length

    let rs = []
    for (let i = 0; i < n-2; i++) {
        // 如果第一个数字 大于 0 则无法跟之后的数字 加起来 等于 0 ，所以直接返回
        if(nums[i] > 0) {
            return rs;
        }
        // 如果 第一个数字 为 上一次循环的 第一个数，则结果跟之前一样，所以直接进行下一个循环
        if (nums[i] === nums[i - 1]) {
            continue;
        }
        // 定义双指针 
        // i L R 顺序
        let L = i + 1;
        let R = n - 1;
        // L 必须在 i 和 R 之间，否则结束循环
        while (L < R) {
            // 判断是否三者之和 ，如果 等于 0 则 符合条件
            if (nums[i] + nums[L] + nums[R] === 0) {
                rs.push([nums[i], nums[L], nums[R]])
                // 接下来 进行 指针 平移
                // ---如果L向右平移之后 跟上一个 L 相同 则 结果一致，则结果一致，继续向右平移
                while(L < R && nums[L] === nums[L + 1])
                    L++
                // ---如果R向左平移之后 跟上一个 R 相同 则 结果一致，则结果一致，继续向左平移
                while(L < R && nums[R]=== nums[R - 1])
                    R--
                L++;
                R--;
                
            }
            // 如果 相加之和小于 0 则，L 偏小，向右平移
            else if (nums[i] + nums[L] + nums[R] < 0) {
                L++;
            }
            // 如果 相加之和大于 0 则，R 偏大，向左平移
            else if(nums[i] + nums[L] + nums[R] > 0) {
                R--;
            }
        }

    }
    return rs

};
// @lc code=end

