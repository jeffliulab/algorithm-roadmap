// data/system-design-data.js
if (typeof ROADMAP_DATA === 'undefined') { var ROADMAP_DATA = {}; }

ROADMAP_DATA.special_topics = {
    nodes: [
        { id: 'math', label: 'Math & Geometry', type: 'foundation', details: { description: '.....', }},
// bit manipulation | navi: bit
        { id: 'bit', label: 'Bit Manipulation', type: 'foundation', details: { 
            description: `Introduction of Bit Manipulation:
                <br>AND: Only 1 & 1 is 1; coding: n = 1 & 1
                <br>OR: Only 0 | 0 is 0; coding: n = 1 | 0
                <br>XOR: 0 ^ 1 is 1, 1 ^ 0 is 1; coding: n = 0 ^ 1
                <br>NOT (negation): ~1 is 0; coding:n = ~n
                <br>Bit shifting: n = 1; n = n << 1; n = n >> 1
                `,                 
                exercises: [
                    { title: 'LeetCode 136: Single Number (XOR)', url: 'https://leetcode.com/problems/single-number/description/',
                        key_point: {
                            label: 'Key Points', 
                            content: `XOR:
                                    <br>a^0=a Any number XOR with 0 will result in itself
                                    <br>a^a=0  Any number XOR with itself results in 0       
                                    <br><br>Coding:
                                    <br><code>result = 0
                                    <br>for num in nums:
                                    <br>&nbsp;&nbsp;result = num ^ result
                                    <br>return result</code>                         
                                    `
                        },
                    },
                    { title: 'LeetCode 191: Number of 1 Bits (Shift)', url: 'https://leetcode.com/problems/number-of-1-bits/',
                        key_point: {
                            label: 'Key Points', 
                            content: `
                            <br><strong>Solution1:</strong>
                            <br><code>count = 0
                            <br>while n > 0:
                            <br>&nbsp;&nbsp;# Because the other bits of 1 are all 0, so the & operation must be 0
                            <br>&nbsp;&nbsp;# Therefore n&1 is to check whether the unit digit of n is 1
                            <br>&nbsp;&nbsp;if n & 1:
                            <br>&nbsp;&nbsp;&nbsp;&nbsp;count += 1
                            <br>&nbsp;&nbsp;# shift, delete last digit
                            <br>&nbsp;&nbsp;n = n >> 1
                            <br>return count</code>
                            <br>
                            <br><strong>Solution2:</strong>
                            <br><code>count = 0
                            <br>while n > 0:
                            <br>&nbsp;&nbsp;# Change the rightmost 1 in n to 0
                            <br>&nbsp;&nbsp;n = n & (n - 1)
                            <br>&nbsp;&nbsp;count += 1
                            <br>return count</code>                   
                                    `
                        },
                    },
                    { title: 'LeetCode 338: Counting Bits', url: 'https://leetcode.com/problems/counting-bits/description/',
                        key_point: {
                            label: 'Key Points', 
                            content: `This question is to calculate the number of 1s in each number from 0 to N.
                                        Call Q191's function, can achieve O(NlogN) time.
                                    <br>This Question actually has an O(N) time solution: Use the recursive formula to achieve a better algorithm for new numbers. Interested students can check the relevant information by themselves.
                                    <br><br>Coding:
                                    <code>
                                    <br>ans[i] = ans[i >> 1] + (i & 1)
                                    <br>ans[i] = ans[i & (i - 1)] + 1
                                    </code>                         
                                    `
                        },
                    },
                    { title: 'LeetCode 190: Reverse Bits (OR)', url: 'https://leetcode.com/problems/reverse-bits/description/',
                        key_point: {
                            label: 'Key Points', 
                            content: `This solution introduces a method for reversing the bits of a 32-bit integer. The core idea is to extract each bit from the original number, one by one, and build a new number with these bits in the reverse order.
                                        <br>This process utilizes the bitwise OR operator. We use OR to set the last bit of our result variable x. To append a bit d to x, we first make space by left-shifting x (x = x << 1), and then we set the last bit using the OR operation (x = x | d).
                                        <br>The algorithm iterates 32 times and performs the following steps in each loop:
                                        <br>Solution:
                                        <br>1. Isolate the last bit of the input number n using a bitwise AND (d = n & 1).
                                        <br>2. Remove the last bit from n by right-shifting it (n = n >> 1).
                                        <br>3. Make space at the end of the result x by left-shifting it (x = x << 1).
                                        <br>4. Place the isolated bit d into the new space in x using a bitwise OR (x = x | d).
                                        <br>
                                        <br><strong>Coding:</strong>
                                        <br><code>x = 0
                                        <br>for _ in range(32):
                                        <br>&nbsp;&nbsp;d = n & 1
                                        <br>&nbsp;&nbsp;n = n >> 1
                                        <br>&nbsp;&nbsp;x = x << 1
                                        <br>&nbsp;&nbsp;x = x | d
                                        <br>return x</code>               
                                    `
                        },
                    },
                    { title: 'LeetCode 268: Missing Number', url: 'https://leetcode.com/problems/missing-number/description/',
                        key_point: {
                            label: 'Key Points', 
                            content: `This question is 136, but it requires some manipulation: convert the known range into a complete range, and then it can be converted to 136.
                                    `
                        },
                    },
                    { title: 'LeetCode 371: Sum of Two Integers★★', url: 'https://leetcode.com/problems/sum-of-two-integers/description/',
                        key_point: {
                            label: 'Key Points', 
                            content: `
                                This is a very classic bit manipulating question.
                                <br>
[pre]mask = 0xFFFFFFFF

while (b & mask) != 0:
    carry = (a & b) << 1
    a = a ^ b
    b = carry
    
    if (a & mask) > 0x7FFFFFFF: 
    return ~(a^mask)
else: 
    return a & mask
[/pre]
                            `
                        },
                    },
                ]
            },
        },

        // math and geometry | navi: math
        { id: 'math', label: 'Math & Geometry', type: 'foundation', details: { 
            description: `
                To make a complicated question into an easy one.
                `,                 
                exercises: [
                    { title: 'LeetCode 7. Reverse Integer', url: 'https://leetcode.com/problems/reverse-integer/description/',
                        key_point: {
                            label: 'Key Points', 
                            content: `
                            <br>Key points to consider:
                            <br>(1) %10: To get the last digit
                            <br>(2) //10: To remove the last digit
                            <br>(3) Integer Overflow:
                            <br>&nbsp;&nbsp;The minimum 32-bit signed integer is -2**31, and the maximum is 2**31-1
                            <br>&nbsp;&nbsp;So how can we check for overflow before it happens?
                            <br>&nbsp;&nbsp;The trick is:
                            <br>&nbsp;&nbsp;<code>if number * 10 + last_digit > MAX_INT:
                            <br>&nbsp;&nbsp;&nbsp;&nbsp;return 0 (Integer Overflow)</code>
                            <br>&nbsp;&nbsp;After rearranging the mathematical formula, it becomes:
                            <br>&nbsp;&nbsp;<code>if number > (MAX_INT - last_digit)//10:
                            <br>&nbsp;&nbsp;&nbsp;&nbsp;return 0</code>                                `
                        },
                    },
                    { title: 'LeetCode 66. Plus One', url: 'https://leetcode.com/problems/plus-one/description/',
                        key_point: {
                            label: 'Key Points', 
                            content: `
                                <br>Assuming we are adding a single-digit number K:
                                <br><code>if k == 0:
                                <br>&nbsp;&nbsp;return digits
                                <br>
                                <br>carry = k
                                <br>for i in range(len(digits)-1,-1,-1):
                                <br>&nbsp;&nbsp;if carry == 0:
                                <br>&nbsp;&nbsp;&nbsp;&nbsp;return digits
                                <br>&nbsp;&nbsp;
                                <br>&nbsp;&nbsp;cur_sum = digits[i] + carry
                                <br>&nbsp;&nbsp;digits[i] = cur_sum % 10
                                <br>&nbsp;&nbsp;carry = cur_sum // 10
                                <br>
                                <br>if carry > 0:
                                <br>&nbsp;&nbsp;digits.insert(0,carry)
                                <br>
                                <br>return digits</code>                                `
                        },
                    },
                    { title: 'LeetCode 50. Pow(x,n)', url: 'https://leetcode.com/problems/powx-n/description/',
                        key_point: {
                            label: 'Key Points', 
                            content: `
                                <br>This problem is about binary exponentiation (Fast Exponentiation).
                                <br>
                                <br>Note: Use divide and conquer to make multiplication times less to avoid time limit exceeded.
                                <br>Note2: A negative exponent is handled as 1.0 / myPow(x, -n)
                            `
                        },
                    },
                ]
            },
        },
    ],
    edges: [
        //{from:'bit',to:'xor_maximum'},
    ]
};