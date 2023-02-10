/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {

    let str = ""
    if(s.length === 1){
        return s;
    }

    if(s.length === 2){
        if(s[0] === s[1]){
            return s;
        }
        else {
            return s[0]
        }
    }

    for(let i = 0;i<s.length;i++){

        if(s.length - 1 - i < str.length){
            break;
        }
       
        for(let j = s.length - 1;j>i;j--){

            if(j-i+1 < str.length){
                break;
            }
            if(s[i] !== s[j]){
                continue;
            }
            console.log(i,j);
            let m = i;
            let n = j;
            let flag = true;
            while(n > m){
                if(s[n] !== s[m]){
                    flag = false;
                    break
                }

                n--;
                m++;
            }

            if(flag){
                let r = s.substr(i,j - i + 1)
                str = r.length > str.length?r:str;
                break;
            }


        }

    }

    if(!str){
        return s[0]
    }

    return str
};
// @lc code=end

