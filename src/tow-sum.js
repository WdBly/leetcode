/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
 * 若是没有满足条件，则返回空数组
 */

// 暴力法
// const twoSum = (nums, target) => {
//     let result = [], typeErr;
//     if(!Number.isInteger(target) || !Array.isArray(nums)){
//         return result;
//     }

//     for(let i = 0, len = nums.length; i < len; i++){
//         if(!Number.isInteger(nums[i])) {
//             typeErr = true;
//             break;
//         }
//         let curr = nums.slice(i + 1);
//         let index = curr.indexOf(target - nums[i]);
//         if(index !== -1) {
//             result = [i, index + i + 1];
//             break;
//         }
//     }
    
//     return typeErr ? [] : result;
// };

// hashMap
const twoSum = (nums, target) => {
    let result = [], typeErr, temp = {};
    if(!Number.isInteger(target) || !Array.isArray(nums)){
        return result;
    }

    for(let i = 0, len = nums.length; i < len; i++){
        if(!Number.isInteger(nums[i])) {
            typeErr = true;
            break;
        }
        let dif = target - nums[i];
        if(temp[dif] !== undefined) {
            result = [temp[dif], i];
            break;
        }
        temp[nums[i]] = i;
    }
    
    return typeErr ? [] : result;
};

module.exports = twoSum;