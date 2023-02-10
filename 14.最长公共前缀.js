/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let first = strs[0]
    if(!first) return ""
    if(strs.length === 1) return strs[0]

    let i = 0,rs="";

    while(i<first.length){
        let code = first.substr(0,i + 1)
        let flag = strs.every(item => item.indexOf(code) === 0 )
        if(flag){
            rs = code
            i++;
        }
        else{
            break;
        }
    }

    return rs;

};
// @lc code=end

