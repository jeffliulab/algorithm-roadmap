

// 初始化全局数据容器（如果不存在）
if (typeof ROADMAP_DATA === 'undefined') { var ROADMAP_DATA = {}; }

// basic 蓝色：基础知识点（对应Easy~Medium难度的题）
// intermediate 橙色：中阶知识点（对应Medium~Hard难度的题）
// advanced 红色：高级知识点（对应Hard题）
// green 绿色：代表一种特殊类型的题组
// yellow 黄色：代表一种单独的特殊类型题

// 笔记链接格式：
// https://jeffliulab.github.io/algorithm-notes/algorithms/#recursion"

ROADMAP_DATA.linear_structures = {
    nodes: [
        // 所有单独是一行的节点之后有时间都要重新捋一下，这些是INIT的时候设置的
        { id: 'stack_enhanced_stack', label: 'Enhanced Stack', type: 'basic', details: { description: 'Discover how auxiliary stacks and augmented nodes turn simple stacks into problem-solving machines.', exercises: [{ title: 'LeetCode 155: Min Stack', url: 'https://leetcode.com/problems/min-stack/description/' }]}},
        { id: 'stack_problem_largest_rectangle', label: 'Largest Rectangle Problem', type: 'advanced', details: { description: 'A classic application of the monotonic stack.', exercises: [{ title: 'LeetCode 84: Largest Rectangle in Histogram', url: 'https://leetcode.com/problems/largest-rectangle-in-histogram/' }]}},
        
        // Array, Hashing, List   | navi: list | navi:list
        {id: 'list', label: 'Arrays & Hashing', type: 'foundation',
            details: {
                description: 'A collection of fundamental problems focusing on array manipulations and the use of hash maps for efficient lookups and storage.',
                exercises: [
                { title: 'LeetCode 217: Contains Duplicate', url: 'https://leetcode.com/problems/contains-duplicate/' },
                { title: 'LeetCode 1: Two Sum', url: 'https://leetcode.com/problems/two-sum/' },
                { title: 'LeetCode 347: Top K Frequent Elements', url: 'https://leetcode.com/problems/top-k-frequent-elements/' },
                { title: 'LeetCode 238: Product of Array Except Self', url: 'https://leetcode.com/problems/product-of-array-except-self/' },
                { title: 'LeetCode 36: Valid Sudoku', url: 'https://leetcode.com/problems/valid-sudoku/' },
                { title: 'LeetCode 128: Longest Consecutive Sequence', url: 'https://leetcode.com/problems/longest-consecutive-sequence/' }
                ]
            }
        },
        // Prefix Sums | navi: prefix sums
        {id: 'prefix_sums', label: 'Prefix Sums', type: 'intermediate',
            details: {
                description: `
                If we want to find the sum of an interval, we can use extra space "prefix sums" to achieve O(1) time. Thus, with this technique, we can solve following problems:
                <br>(1) Find specific sum of sub-array.
                <br>(2) Find certain area of a matrix' sums.
                <br>(3) Prefix product is quite similar.
                `,
                exercises: [
                { title: 'LeetCode 303: Range Sum Query', url: 'https://leetcode.com/problems/range-sum-query-immutable/description/' },
                { title: 'LeetCode 304: Range Sum Query 2D ★', url: 'https://leetcode.com/problems/range-sum-query-2d-immutable/description/' ,
                    key_point: {label: 'Key Points', content: `
                        Assume we have following areas:

[pre]      j-1      j
   +-------+-----+
   |       |     |
i-1|   A   |  B  |
   |       |     |
   +-------+-----+
i  |   C   |  D  |
   +-------+-----+
[/pre]

<br>(1) Constructing a 2D prefix sums needs the idea of dynamic programming. Note that dp matrix has one more row and one more col, so dp[i][j]'s area actually corresponding to matrix[i-1][j-1]
<br>
<br>(2) The transition formular is: [pre]dp[i][j] = matrix[i-1][j-1] + dp[i-1][j] + dp[i][j-1] - dp[i-1][j-1][/pre]
<br>the meaning is:
[pre]dp(D) = S(D) + dp(B) + dp(C) - dp(A)[/pre]
<br>
<br>(3) Finally we can use dp to calculate S(D):
[pre]S(D) = dp(D) - dp(B) - dp(C) + dp(A)
[/pre]
`
                    },
                },
                
                { title: 'LeetCode 238: Product of Array Except Self', url: 'https://leetcode.com/problems/product-of-array-except-self/description/' ,
                    key_point: {label: 'Hint', content: `
                        The idea is totally the same with prefix sum, though it use prefix product.
                        `},
                },
                { title: 'LeetCode 724: Find Pivot Index', url: 'https://leetcode.com/problems/find-pivot-index/description/' ,
                    key_point: {label: 'Hint', content: `
                        Hint: Prefix + Surfix. Use extra space O(N) or just variable to achieve space O(1).
                        `},
                },
                { title: 'LeetCode 560: Subarray Sum Equals K ★★', url: 'https://leetcode.com/problems/subarray-sum-equals-k/description/' ,
                    key_point: {label: 'Key Points', content: `
<br>(1) The sequence is not sorted and might contain negative numbers, so sliding window with R doesn't work in this situation. You might use sliding window with L but its time is O(N^2).
<br>(2) The best practice of this question is prefix sum + hashtable.
[pre]prefix[i] <- sum from nums[0] to nums[i]
sum(sub-array[j,i]) = prefix[i] - prefix[j-1]
=> if sub-array[j,i] == k
=> then prefix[i] - prefix[j-1] == k
[/pre]
So what we need to do next, is to check at every i, if there is any j before i, satisfy:
[pre]prefix[j-1] == prefix[i] - k
[/pre]
Then sub-array[j,i] will be the satisfied one. We can store the count of each value of prefix[j-1] in a hashmap, make searching time O(N). Note that hashmap needs initially store {0:1}, assume we have a prefix 0 before the array, to consider the edge case of the total array is that sub-array.

                        `},
                },
                { title: 'LeetCode 974: Subarray Sums Divisible by K', url: 'https://leetcode.com/problems/subarray-sums-divisible-by-k/description/' ,
                    key_point: {label: 'Math Concept', content: `
The hard point of this question is to transform the formular: [pre](prefix[i] - prefix[j-1]) % k == 0 [/pre]
We need use the concept of <strong>Congruence Modulo</strong>:
[pre]if (a - b) % k == 0,
then a % k == b % k
[/pre]
                        `},
                },
              ]
            }
        },
        // String    | navi:string   | navi: string
        {id: 'string',  label: 'Strings',  type: 'foundation',
            details: {
                description: 'A collection of problems focused on string manipulation, comparison, and encoding/decoding techniques.',
                exercises: [
                { title: 'LeetCode 242: Valid Anagram', url: 'https://leetcode.com/problems/valid-anagram/' },
                { title: 'LeetCode 49: Group Anagrams', url: 'https://leetcode.com/problems/group-anagrams/' },
                { title: 'LeetCode 271: Encode and Decode Strings', url: 'https://leetcode.com/problems/encode-and-decode-strings/' }
                ]
            }
        },


        // { id: 'example_node', label: '节点名字', type: 'basic', details: { 
        //         description: `Binary Search is a very classic method to solve searching problems.
        //         Search in Matrix is another skill. Treat the matrix as a flattened 1D array so it becomes a regular binary seach problem.
        //         `,                 
        //         exercises: [
        //             { title: 'LeetCode 704: Binary Search', url: 'https://leetcode.com/problems/binary-search/description/' },
        //             { title: 'LeetCode 74: Search a 2D Matrix', url: 'https://leetcode.com/problems/search-a-2d-matrix/description/' },
        //             { title: 'LeetCode 153: Find Minimum in Rotated Sorted Array', 
        //                 url: 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/' ,
        //                 key_point: {
        //                     label: 'Key Point (CN)', // 这是自定义的按钮名称
        //                     content: `key point介绍
        //                         <strong>参考:</strong>
        //                         <br><a href="https://jeffliulab.github.io/algorithm-notes/Leetcode/leetcode_500/#153-find-minimum-in-rotated-sorted-array" target="_blank">刘杰夫的算法宝典讲解</a>
        //                         <br><a href="https://www.youtube.com/watch?v=nIVW4P8b1VA" target="_blank">NeetCode 视频讲解 (YouTube)</a>
        //                     `
        //                 },
        //             },
        //         ]
        //     }
        // },

        // Linked List   navi:linked list
        { id: 'linked_list', label: 'Linked List', type: 'foundation', details: { description: `
                A linked list is a linear data structure where elements are not stored at contiguous memory locations.
                `, 
                exercises: [
                    { title: 'LeetCode 206: Reverse Linked List (Review Singly L.L.)', url: 'https://leetcode.com/problems/reverse-linked-list/description/',
                        key_point: {label: 'Hint', content: `
                            You should know how to use following two methods to solve this problem:<br>
                            (1) Use a prev node.<br>
                            (2) Use recursion.`},
                     }, 
                    { title: 'LeetCode 21: Merge Two Sorted Lists', url: 'https://leetcode.com/problems/merge-two-sorted-lists/description/',
                        key_point: {label: 'Hint', content: `
                            You should know how to use following two methods to solve this problem: <br>
                            (1) Use a prev node. <br>
                            (2) Use recursion.`},
                     },
                    { title: 'LeetCode 138: Copy List with Random Pointer', url: 'https://leetcode.com/problems/copy-list-with-random-pointer/description/',
                        key_point: {label: 'Hint', content: `
                            Two passes: 
                            <br>(1) first round create all nodes dependently and create the map between old and new.
                            <br>(2) Then in the second round finish it.
                            <br> Note: cur.next might lead to None, so use <strong>hashmap = {None:None}</strong> to avoid it.
                            `},
                     },
                    { title: 'LeetCode 2: Add Two Numbers', url: 'https://leetcode.com/problems/add-two-numbers/description/',
                        key_point: {label: 'Hint', content: `
                            Try to use only one loop to handle all conditions.`},
                    },
                    { title: 'LeetCode 707. Design Linked List (Mark)', url: 'https://leetcode.com/problems/design-linked-list/description/',
                    },
                    
                    { title: 'LeetCode 1472. Design Browser History (Mark)', url: 'https://leetcode.com/problems/design-browser-history/description/',
                    },

                ]
             }
        },
        // Doubly Linkded List
        { id: 'doubly_linked_list', label: 'Doubly Linked List', type: 'basic', details: { description: `
                A doubly linked list is that every node has two pointers, one to prev, one to next.
                `, 
                exercises: [
                    { title: 'LeetCode 146: LRU Cache', url: 'https://leetcode.com/problems/lru-cache/description/',
                    }, 
                ]
             }
        },
        // Group and Reverse in Linked List
        { id: 'group_reverse_linked_list', label: 'Group & Reverse in Linked List (Mark)', type: 'intermediate', details: { description: `
                        Wait for filling.
                    `, 
                exercises: [
                    { title: 'LeetCode 25 (Mark)', url: 'example',
                    }, 
                    { title: 'LeetCode 24 (Mark)', url: 'example',
                    }, 
                    { title: 'LeetCode 92 (Mark)', url: 'example',
                    }, 
                    { title: 'LeetCode 328 (Mark)', url: 'example',
                    }, 
                ]
             }
        },
        // Sliding Window | navi: sliding window
        { id: 'sliding_window', label: 'Sliding Window', type: 'basic',
            details: {
                description: 'A collection of problems that are solved using the sliding window technique, often paired with hash maps or arrays for efficient character or element frequency tracking.',
                exercises: [
                { title: 'LeetCode 121: Best Time to Buy and Sell Stock', url: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/' },
                { title: 'LeetCode 3: Longest Substring Without Repeating Characters', url: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/' },
                { title: 'LeetCode 424: Longest Repeating Character Replacement', url: 'https://leetcode.com/problems/longest-repeating-character-replacement/' },
                { title: 'LeetCode 567: Permutation in String', url: 'https://leetcode.com/problems/permutation-in-string/' },
                { title: 'LeetCode 76: Minimum Window Substring', url: 'https://leetcode.com/problems/minimum-window-substring/' }
                ]
            }
        },
        // navi: fast slow pointers
        { id: 'fast_slow_pointers', label: 'Floyd\'s Cycle Detection', type: 'intermediate', details: { 
                description: `Fast and Slow Pointers are often used in linked list's cycle problem.
                <br>(1) <strong>Find if there is a cycle:</strong> let fast go 2x speed.
                <br>(2) <strong>Find the cycle's position:</strong>  Let D be the distance from the list head to the cycle entrance, K be the distance from the entrance to the meeting point, and L be the length of the cycle. This gives us D = n * L - K. In other words, if two pointers then move at the same speed, their meeting point will be the entrance of the circle.
                <br>(3) <strong>Calculate the length of the cycle:</strong> start from the meet node, go until come back.
                `,                 
                exercises: [
                    
                    { title: 'LeetCode 141: Linked List Cycle', url: 'https://leetcode.com/problems/linked-list-cycle/description/' },
                    { title: 'LeetCode 142: Linked List Cycle II', url: 'https://leetcode.com/problems/linked-list-cycle-ii/' ,},
                    { title: 'LeetCode 202: Happy Number', url: 'https://leetcode.com/problems/happy-number/' ,},
                    { title: 'LeetCode 287: Find the Duplicate Number', url: 'https://leetcode.com/problems/find-the-duplicate-number/description/' ,
                        key_point: {label: 'Hint', content: `You can make this array into a linked list.
                            Use nums[index] as the "next" pointer, for example, in array(list) nums[1,2,4,2,2], the pointer go to the first element 1, and its next visiting index will be "1", so nums[1] will be 2, then nums[2] is 4, ...`},
                    },
                ]
            }
        },
        // navi: in place hashing
        { id: 'in_place_hashing', label: 'In-place Hashing (Mark)', type: 'intermediate', details: { 
                description: `In LeetCode 287, a new idea of "in-place hashing" or "index mapping" is a really amazing skill
                `,                 
                exercises: [
                    { title: 'LeetCode 448 (Mark)', url: 'wwwwwww' },
                    { title: 'LeetCode 442 (Mark)', url: 'wwwwwww' },
                    { title: 'LeetCode 268 (Mark)', url: 'wwwwwww' },
                    { title: 'LeetCode 645 (Mark)', url: 'wwwwwww' },
                    { title: 'LeetCode 41 (Mark)', url: 'wwwwwww' },
                 
                ]
            }
        },
        // Two Pointers on Array/String    | navi: two pointers | navi:twopointers
        { id: 'two_pointers_array_string', label: 'Two Pointers (Array/String)', type: 'basic',
            details: {
                description: `
                There are mainly two kinds of two pointers problems:
                <br><strong>(1) Palindrome Checking</strong>: To see if the string is palindrome (symmetrical). 
                Normally set L & R, check if s[L]==s[R], if not equals, return False.
                <br><strong>(2) Target Sum</strong>: Classical Two Sum problem. Remember <strong>sorting</strong> firstly,
                then use L & R starting from two sides: if L + R < target, then move L, vice versa.
                `,
                exercises: [
                { title: 'LeetCode 125: Valid Palindrome', url: 'https://leetcode.com/problems/valid-palindrome/' },
                { title: 'LeetCode 167: Two Sum II - Input Array Is Sorted', url: 'https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/' },
                { title: 'LeetCode 15: 3Sum', url: 'https://leetcode.com/problems/3sum/' },
                { title: 'LeetCode 11: Container With Most Water', url: 'https://leetcode.com/problems/container-with-most-water/' },
                { title: 'LeetCode 42: Trapping Rain Water', url: 'https://leetcode.com/problems/trapping-rain-water/' },
                { title: 'LeetCode 80: Remove Duplicates from Sorted Array II', url: 'https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/',
                       key_point: {label: 'Best Practice', content: `
                        L for writer, R for traversal pointer:
                        <br>(1) L from 0
                        <br>(2) Traverse nums, if R meets requirements, assign to L, move L at the same time.
                        <br>(3) L is the length of valid nums, at the end.
                        <br>
                        <br>Here the requirements are:
                        <br>(1) L < K (here K is 2)
                        <br>(2) R != nums[L-K]
                        <br>
                        <br>Codes are really simple (for generalized K):
                        <code>
                        <br>L = 0
                        <br>for R in range(len(nums)):
                        <br>&nbsp;&nbsp;if L < K or nums[R] != nums[L-K]:
                        <br>&nbsp;&nbsp;&nbsp;&nbsp;nums[L] = nums[R]
                        <br>&nbsp;&nbsp;&nbsp;&nbsp;L += 1
                        <br>return L
                        </code>
                        `},
                },
            ]
        }
        },
        // Two Pointers (Linked List)
        { id: 'two_pointers_linked_list', label: 'Two Pointers (Linked List)', type: 'basic', details: { 
            description: 'Two pointers is a common technique that uses two pointers to solve problems in linked list.', 
            exercises: [
                {title: 'LeetCode 143: Reorder List', url: 'https://leetcode.com/problems/reorder-list/description/',
                        key_point: {label: 'Hint', content: `
                                It is actually three easy problem:
                                <br>(1) Use two pointers to find the middle.
                                <br>(2) Reverse the right part.
                                <br>(3) Merge two linked list.
                            `},
                },
                {title: 'LeetCode 19: Remove Nth Node From End of List', url: 'https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/',
                        key_point: {label: 'Hint', content: `
                                Remember set a dummy. The distance is (N+1) for slow and fast pointers.
                            `},
                },
                     
            ]}
        },
        // Group & Reverse in String
        { id: 'group_reverse_string', label: 'Group & Reverse in String (Mark)', type: 'intermediate', 
            details: { description: 'To be continued...', 
                exercises: [
                    { title: 'LeetCode 151 (Mark)', url: 'aaaaaaaa' 
                    }, 
                    { title: 'LeetCode 541 (Mark)', url: 'aaaaaaaa' 
                    }, 
                    { title: 'LeetCode 186 (Mark)', url: 'aaaaaaaa' 
                    }, 
                ]}
        },


        // Stack  | navi: stack | navi:stack
        { id: 'stack', label: 'Stack', type: 'foundation', 
            details: { description: 'A stack is a Last-In-First-Out (LIFO) data structure.', 
                exercises: [
                    { title: 'LeetCode 20: Valid Parentheses', url: 'https://leetcode.com/problems/valid-parentheses/description/' 
                    }, 
                    { title: 'LeetCode 22: Generate Parentheses', url: 'https://leetcode.com/problems/generate-parentheses/description/' 
                    },
                    { title: 'LeetCode 150: Evaluate Reverse Polish Notation', url: 'https://leetcode.com/problems/evaluate-reverse-polish-notation/description/' 
                    },
                ]}
        },
        // Stack  | navi: stack | navi:stack
        { id: 'stack_monotonic_stack', label: 'Monotonic Stack', type: 'intermediate', 
            details: { description: `
                            <br>A <strong>monotonic stack</strong> is a stack where its elements are maintained in either a monotonically increasing or monotonically decreasing order from the bottom to the top.
                            For <strong>"Next Greater Element"</strong> type problems, we typically use a <strong>monotonically decreasing stack</strong>.
                            <br>
                            <br><strong>Monotonic Stack "Aha Moment":</strong> The moment an element is popped from the stack is precisely when we have found its next greater element.
                            <br>
                            <br>Implementation logic for a monotonically decreasing stack:
                            <br>(1) Maintain a stack that decreases from bottom to top, meaning the top element is always the smallest. (Note: The comparison is often strictly less than).
                            <br>
                            <br>(2) For a new element <code>x</code>, if it is smaller than the element at the top of the stack, push it onto the stack.
                            <br>
                            <br>(3) If the new element <code>x</code> is <strong>greater than the top</strong>, then <code>x</code> is the "next greater element" for that top element. Continuously pop from the stack until <code>x</code> is no longer greater than the new top. The "next greater element" has been found for all elements that were just popped.
                            <br>
                            <br><strong>Common Monotonic Stack Technique:</strong> Use a hash map to store the results, mapping each element from the input to its calculated next greater element.
                `, 
                exercises: [
                    { title: 'LeetCode 739: Daily Temperatures', url: 'https://leetcode.com/problems/daily-temperatures/description/' }, 
                    { title: 'LeetCode 853: Car Fleet', url: 'https://leetcode.com/problems/car-fleet/description/' },
                    {title: 'LeetCode 496. Next Greater Element I ', url: 'https://leetcode.com/problems/next-greater-element-i/description/',
                        key_point: {label: 'Hint', content: `
                            <br><strong>KEY POINT:</strong> We should not iterate through <code>nums1</code> and then for each of its elements, search all of <code>nums2</code> to find its next greater value.
                            <br>
                            <br>Instead, the optimal approach is to <strong>directly process <code>nums2</code></strong> to find the next greater element for all of its numbers, and then <strong>store these results in a hash map</strong>.
                            `},
                    },
                    {title: 'LeetCode 503. Next Greater Element II', url: 'https://leetcode.com/problems/next-greater-element-ii/description/',
                        key_point: {label: 'Hint', content: `
                            HINT: The simplest way is to double nums and then record the index. A better solution is to use modulo operation and loop through nums twice, which does not require additional space.
                            `},
                    },

                ]}
        },
        // Queue    |  navi: queue
        { id: 'queue', label: 'Queue', type: 'foundation', 
            details: { description: `A queue is a Fisrt-In-First-Out (FIFO) data structure, and it is implemented based on
                doubly linked list. In python, we use deque to solve queue problems.
                `, 
                exercises: [
                    {"title": "Data Structure of Queue and Deque", "url": "https://jeffliulab.github.io/algorithm-notes/data_structures/#queue-and-deque", "key_point": { "label": "Summary", "content": "<strong>QUEUE</strong><br><br>A Queue is an abstract data type that follows a strict First-In, First-Out (FIFO) principle. Think of it as a checkout line at a store: the first person to get in line is the first person to be served.<br><br><strong>Core Principle</strong>: First-In, First-Out (FIFO).<br><strong>Primary Operations</strong>:<br>&nbsp;&nbsp;&nbsp;&nbsp;- <code>Enqueue</code>: Adds an element to the rear (back) of the queue.<br>&nbsp;&nbsp;&nbsp;&nbsp;- <code>Dequeue</code>: Removes and returns the element from the front of the queue.<br>&nbsp;&nbsp;&nbsp;&nbsp;- <code>Peek</code> / <code>Front</code>: Returns the element at the front without removing it.<br><strong>Key Characteristic</strong>: Operations are restricted to the two ends (adding at the back, removing from the front). It is a highly specialized, one-way structure.<br><strong>Common Use Cases</strong>: Task scheduling (print queues, CPU tasks), Breadth-First Search (BFS) algorithms, and managing data buffers.<br><br><br><strong>DEQUE (DOUBLE-ENDED QUEUE)</strong><br><br>A Deque (pronounced \"deck\") is a more generalized version of a queue. It allows for the addition and removal of elements from both the front and the rear.<br><br><strong>Core Principle</strong>: A sequence container that can be expanded or contracted on both ends.<br><strong>Primary Operations</strong>:<br>&nbsp;&nbsp;&nbsp;&nbsp;- <code>addFirst</code> / <code>appendleft</code>: Adds an element to the front.<br>&nbsp;&nbsp;&nbsp;&nbsp;- <code>addLast</code> / <code>append</code>: Adds an element to the rear.<br>&nbsp;&nbsp;&nbsp;&nbsp;- <code>removeFirst</code> / <code>popleft</code>: Removes an element from the front.<br>&nbsp;&nbsp;&nbsp;&nbsp;- <code>removeLast</code> / <code>pop</code>: Removes an element from the rear.<br><strong>Key Characteristic</strong>: Because it supports operations on both ends, a Deque can function as both a Queue (using <code>append</code> and <code>popleft</code>) and a Stack (using <code>append</code> and <code>pop</code>).<br><strong>Common Use Cases</strong>: Sliding window algorithms, implementing undo/redo functionality, and managing task schedules that require adding high-priority items to the front."}
                    },                                                                 
                    { title: 'LeetCode 225: Implement Stack Using Queues (Mark)', url: 'https://leetcode.com/problems/implement-stack-using-queues/description/' 
                    }, 
                    { title: 'LeetCode 232: Implement Queue Using Stacks (Mark)', url: 'https://leetcode.com/problems/implement-queue-using-stacks/description/' 
                    }, 
                    { title: 'LeetCode 622: Design Circular Queue (Mark)', url: 'https://leetcode.com/problems/design-circular-queue/description/' 
                    }, 
                    { title: 'LeetCode 641: Design Circular Deque (Mark)', url: 'https://leetcode.com/problems/design-circular-deque/description/' 
                    }, 
                ]}
        },
        // Monotonic Deque
        { id: 'monotonic_queue', label: 'Monotonic Queue', type: 'intermediate', details: { 
            description:`
            A monotonic deque is used for solving Sliding Window Maximum/Minimum problems.
            Normal methods' limitation is on searching max in window, while monotonic deque
            can use O(1) to find the max/min value in window.
            <br><br>In a monotonic decreasing queue, all elements must be decreasing strictly.
            <br>Implementation:
            <br>(1) Keep queue monotonic, R index enqueue
            <br>(2) Keep out dated head according to L
            <br>(3) Slide window
            `, 
            exercises: [
                {title: 'LeetCode 239: Sliding Window Maximum', url: 'https://leetcode.com/problems/sliding-window-maximum/description/',
                        key_point: {label: 'Hint', content: `
                                This question seems very easy, but if you don't use monotonic deque,
                                find max(window) will cost O(K) and make total time complicity O(K*(N-K)).
                                When N and K are large, this will cause time out.
                            `},
                },
                {title: 'LeetCode 1438: Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit', url: 'https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/description/',
                        key_point: {label: 'Hint', content: `
                            This is a very classic question.
                            Since we cannot find maximum and minimum in one monotonic queue,
                            we need use two queues to find the abs(max-min).
                            `},
                },
                     
            ]}
        },
        // Boyer-Moore Majority Vote Algorithm  | navi: boyer moore majority vote algorithm | navi: vote | navi:vote
        { id: 'boyer_moore_majority_vote', label: 'Boyer-Moore Majority Vote', type: 'basic', details: { 
                description: `
                Find the majority element in a set, if one exists.
                <br>
                <br><strong>Note:</strong> A majority element is an element that appears more than n/2 times where n is the size of the set.
                <br><br><strong>Core Idea:</strong> If a majority element exists in the set, we can find it by iterating through the elements from the beginning. We maintain a count for a candidate element. When we encounter the same element, we increment the count. When we encounter a different element, we decrement the count. If the count drops to zero, we switch our candidate to the next element we see. The element that remains as the candidate at the end of the iteration will be the majority element.
                <br><br><strong>Best Practice</strong>: This can be implemented efficiently using only two variables: one to act as a counter, and another to store the current candidate element.
                <br><code>Time Complexity: O(N); Space Complexity: O(1)</code>
                `,                 
                exercises: [
                    { title: 'LeetCode 169: Majority Element', url: 'https://leetcode.com/problems/majority-element/description/' },
                    { title: 'LeetCode 229: Majority Element II', url: 'https://leetcode.com/problems/majority-element-ii/description/' },

                ]
            }
        },
                // Basic Calculator Problem
        { id: 'basic_calculator', label: 'Basic Calculator Problem', type: 'intermediate', details: { 
            description: 'Use stacks to parse and evaluate mathematical expressions.', 
            exercises: [{ title: 'LeetCode 224: Basic Calculator', url: 'https://leetcode.com/problems/basic-calculator/description/', }, 
                { title: 'LeetCode 227: Basic Calculator II', url: 'https://leetcode.com/problems/basic-calculator-ii/description/', },
            ]}
        },
        // Shunting Yard Algorithm
        { id: 'shunting_yard', label: 'Shunting Yard Algorithm', type: 'advanced', details: { 
            description: `Note: Basic Calculator IV is a totally different question. 
            See "Symbolic Computation"`, 
            exercises: [{ title: 'LeetCode 772: Basic Calculator III', url: 'https://leetcode.com/problems/basic-calculator-iii/description/', }, 
            ]}
        },
        //
        //
        


    ],
    edges: [
        // Branch
        { from: 'list', to: 'string' }, 
        {from:'string', to:'stack'},
        { from: 'string', to: 'queue' },
        {from:'queue',to:'linked_list'},

        // List
        {from:'list',to:'boyer_moore_majority_vote'},
        {from:'boyer_moore_majority_vote',to:'prefix_sums'},


        // String
        { from: 'string', to: 'two_pointers_array_string' },
        { from: 'two_pointers_array_string', to: 'sliding_window' },
        { from: 'two_pointers_array_string', to: 'group_reverse_string' }, 

        // Linked List
        { from: 'linked_list', to: 'two_pointers_linked_list' },
        { from: 'linked_list', to: 'doubly_linked_list' },
        { from: 'two_pointers_linked_list', to: 'group_reverse_linked_list' },



        { from: 'two_pointers_linked_list', to: 'fast_slow_pointers' },
        { from: 'fast_slow_pointers', to: 'in_place_hashing' },

        
        { from: 'sliding_window', to: 'monotonic_queue' },

        
    



        { from: 'stack', to: 'stack_enhanced_stack' },
        { from: 'stack_enhanced_stack', to: 'stack_monotonic_stack' },
        { from: 'stack_monotonic_stack', to: 'stack_problem_largest_rectangle' },
        
        { from: 'stack', to: 'basic_calculator' },
        { from: 'basic_calculator', to: 'shunting_yard' },





    ]
};
