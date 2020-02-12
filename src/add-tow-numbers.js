/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * 
 * 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

[1, 2, 5] + [8, 4, 3] = [8, 6, 9]

 */
var addTwoNumbers = function(l1, l2) {
    let result = [];
    if(!Array.isArray(l1) || !Array.isArray(l2)){
        return result;
    }

    l1.reverse(), l2.reverse();

    if(l1[0] === 0 || l2[0] === 0) {
        return result;
    }

    let num1 = Number(l1.join("")), num2 = Number(l2.join(""));

    console.log(num1, num2);
    
    if(isNaN(num1) || isNaN(num2)) {
        return result;
    }

    return String(num1 + num2).split("").reverse().map(item => Number(item));
};

module.exports = addTwoNumbers;