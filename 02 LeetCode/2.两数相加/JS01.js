/**
 * Definition for singly-linked list.
 * function ListNode(val, next) { // 只是一种构造形式 
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
    // 1. 同时读对应数位，记录 len，求和比较是否大于 9；
    // 2. 若大于 9，保存待进位数字，与下一位求和比较；
    // 3. 继续读链表，若读完，判断是否需延长链表（尾部插入）；
    // 4. 结果保存 sum 链表。
    // var sum = new ListNode;【不完整表述】
    // sum.val = l2.val;
    // console.log(l1.val);
    // console.log(l1.next); // 为什么 next 会遍历剩余的全部？【因为 next 指向下一段链表的首地址】
    var head = null,
        tail = null,
        carry = 0;
    while (l1 || l2) {
        var num1 = l1 ? l1.val : 0, // l1, l2 表示首地址，若首地址不为空，表示有元素；三元运算符，否则设为 0；
            num2 = l2 ? l2.val : 0; // 表示形式需积累，因为本质都可以还原为基本要素的组合；
        var sum = num1 + num2 + carry; // 每次进位，将两数位于待进位数求和；
        if (!head) {
            head = tail = new ListNode(sum % 10); // head、tail 指针初始化【没读懂 sum % 10 这个参数在给定函数的意义，只有一个参数？】
            // new ListNode(number) 是理解的关键
        } else {
            tail.next = new ListNode(sum % 10);
            tail = tail.next;
        }
        carry = parseInt(sum / 10); // 向下取整，获取进位数字
        if (l1) {
            l1 = l1.next; // 指向下一个结点
        }
        if (l2) {
            l2 = l2.next;
        }
        if (carry > 0) { // 进位，尾部插入新结点
            tail.next = new ListNode(carry);
        }
    }
    return head;
};