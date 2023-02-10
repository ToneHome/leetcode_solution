/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    
    if(!haystack && !needle){
        return ""
    }
    if(!needle){
        return 0
    }
    for(let i = 0;i<haystack.length;i++){
        let flag = true
        for(let j = 0;j<needle.length;j++){
            if(!haystack[i + j] ){
                flag = false
                break;   
            }
            if(haystack[i + j] !== needle[j]){
                flag = false
                break;                
            }
        }
        if(flag){
            return i
        }
    }

    return -1
};
// @lc code=end

