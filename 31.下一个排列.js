/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    if(nums.length <= 1){
        return nums;
    }

    let a=nums.length - 1
    let b = a - 1
    let c = nums.length - 1

    // 从最后 向前 找出 第一个  升序的 相邻数字
    while(a > 0 && nums[a] <= nums[b]){
        a--;
        b--;
    }
    // 如果没有，则直接翻转原数组
    if(b === -1){
        nums.sort((a,b) => a-b)
        return nums;
    }


    // 从数组最后面找到第一个 大于 刚才找到的升序数字起始的 数字
    while(nums[c] <= nums[b]){
        c--;
    }

    // 交换 两个数字的位置
    let k = nums[b]

    nums[b] = nums[c]
    nums[c] = k;
    // 将 此数字后面的数组进行 翻转
    for(let i = a ;i<nums.length;i++){
        let last = nums.pop()
        nums.splice(i,0,last)
    }
    return nums
    
};
// @lc code=end

