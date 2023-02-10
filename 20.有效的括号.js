/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let a1 = [];
    let a2 = [];
    let a3 = [];
    let flag = true
    function getLast(ary){
        if(!ary.length) return ''
        else return ary[ary.length - 1]
    }
    for(let i = 0;i<s.length;i++){
        let a = s[i]
        if(a === '('){
            a1.push(i)
        }
        if(a === '['){
            a2.push(i)
        }
        if(a === '{'){
            a3.push(i)
        }

        if(a === ')'){
            if(a1.length === 0) return false
            let a1Last = getLast(a1)
            console.log('a1Last: ', a1Last,a1);
            let a2Last = getLast(a2)
            console.log('a2Last: ', a2Last,a2);
            let a3Last = getLast(a3)

            if(a2Last > a1Last || a3Last > a1Last){
                return false
            }
            else{
                a1.pop()
            }
        }
        if(a === ']'){
            if(a2.length === 0) return false
            let a1Last = getLast(a1)
            let a2Last = getLast(a2)
            let a3Last = getLast(a3)

            if(a1Last > a2Last || a3Last > a2Last){
                return false
            }
            else{
                a2.pop()
            }
        }
        if(a === '}'){
            if(a3.length === 0) return false
            let a1Last = getLast(a1)
            let a2Last = getLast(a2)
            let a3Last = getLast(a3)

            if(a2Last > a3Last || a1Last > a3Last){
                return false
            }
            else{
                a3.pop()
            }
        }
        // (((((([(])))))))
    }

    console.log(a1,a2,a3);

    if(a1.length || a2.length || a3.length){
        return false
    }

    return flag
};
// @lc code=end

