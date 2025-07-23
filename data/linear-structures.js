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
        { id: 'searching', label: 'Searching', type: 'basic', details: { description: 'Binary search is an efficient search algorithm that works on a sorted data set.', exercises: [{ title: 'LeetCode 704: Binary Search', url: 'https://leetcode.com/problems/binary-search/description/' }, { title: 'LeetCode 33: Search in Rotated Sorted Array', url: 'https://leetcode.com/problems/search-in-rotated-sorted-array/description/' }]}},
        { id: 'intervals', label: 'Intervals Problems', type: 'green', details: { description: "Interval problems involve dealing with ranges or segments of data. Sorting is often the first step.", exercises: [{ title: "LeetCode 56: Merge Intervals", url: "https://leetcode.com/problems/merge-intervals/description/" }, { title: "LeetCode 57: Insert Interval", url: "https://leetcode.com/problems/insert-interval/description/" }, { title: "LeetCode 253: Meeting Rooms II", url: "https://leetcode.com/problems/meeting-rooms-ii/description/" }]}},
        { id: 'matrix', label: 'Matrix', type: 'basic', details: { description: "Matrix problems involve traversing or modifying a 2D grid.", exercises: [{ title: "LeetCode 54: Spiral Matrix", url: "https://leetcode.com/problems/spiral-matrix/" }, { title: "LeetCode 48: Rotate Image", url: "https://leetcode.com/problems/rotate-image/" }, { title: "LeetCode 73: Set Matrix Zeroes", url: "https://leetcode.com/problems/set-matrix-zeroes/" }]}},
        { id: 'stack_enhanced_stack', label: 'Enhanced Stack', type: 'basic', details: { description: 'Discover how auxiliary stacks and augmented nodes turn simple stacks into problem-solving machines.', exercises: [{ title: 'LeetCode 155: Min Stack', url: 'https://leetcode.com/problems/min-stack/description/' }]}},
        { id: 'stack_monotonic_stack', label: 'Monotonic Stack', type: 'basic', details: { description: 'A stack that maintains a monotonic order of elements.', exercises: [{ title: 'LeetCode 739: Daily Temperatures', url: 'https://leetcode.com/problems/daily-temperatures/description/' }, { title: 'LeetCode 853: Car Fleet', url: 'https://leetcode.com/problems/car-fleet/description/' }]}},
        { id: 'stack_problem_largest_rectangle', label: 'Largest Rectangle Problem', type: 'yellow', details: { description: 'A classic application of the monotonic stack.', exercises: [{ title: 'LeetCode 84: Largest Rectangle in Histogram', url: 'https://leetcode.com/problems/largest-rectangle-in-histogram/' }]}},
        { id: 'backtracking', label: 'Backtracking (1D)', type: 'basic', details: { description: 'Backtracking is an algorithmic paradigm for solving problems recursively by trying to build a solution incrementally.', exercises: [{ title: 'LeetCode 78: Subsets', url: 'https://leetcode.com/problems/subsets/description/' }, { title: 'LeetCode 46: Permutations', url: 'https://leetcode.com/problems/permutations/description/' }]}},
        // Recursion
        { id: 'recursion', label: 'Recursion', type: 'basic', details: { 
            description: `Recursion is a programming technique where a function calls itself to solve smaller instances of a problem.
            Most recursion questions are in topics of Tree Traversal, Divide and Conquer, Backtracking, etc.`, exercises: [
                { title: "The Concept of Recursion", url: "https://jeffliulab.github.io/algorithm-notes/algorithms/#recursion" 
                },
                { title: "LeetCode 509: Fibonacci Number", url: "https://leetcode.com/problems/fibonacci-number/description/"   
                },
            ]}
        },
        // Sorting                    快捷导航 navi:sorting / navi sorting
        { id: 'sorting', label: 'Sorting', type: 'basic', details: { 
            description: `Sorting is the process of arranging a set of elements in a specific order.
            `, exercises: [
                { title: "Tutorials: Quick Sort, Merge Sort, Bucket Sort", url: "https://jeffliulab.github.io/algorithm-notes/algorithms/#sorting" 
                },
                { title: "LeetCode 75: Sort Colors", url: "https://leetcode.com/problems/sort-colors/description/" 
                },
                { title: "LeetCode 912: Sort an Array", url: "https://leetcode.com/problems/sort-an-array/", 
                },
                { title: "LeetCode 179: Largest Number", url: "https://leetcode.com/problems/largest-number/description/", 
                },
                { title: "LeetCode 148. Sort List", url: "https://leetcode.com/problems/sort-list/description/", "key_point": {"label": "Hint","content": "Use Merge Sort."}
                },
                
                
            ]}
        },
        // Quick Select
        { id: 'quick_select', label: 'Quick Select', type: 'basic', details: { 
            description: `Quick select, especially 
            `, exercises: [
                { title: "LeetCode 215: Kth Largest Element in an Array", url: "https://leetcode.com/problems/kth-largest-element-in-an-array/description/" 
                },
                
            ]}
        },

        // 排列组合
        {"id": "permutations_combinations", "label": "Permutations & Combinations", "type": "intermediate", "details": {
                "description": "Backtracking is a general algorithmic technique for solving problems recursively by trying to build a solution incrementally, one piece at a time, removing those solutions that fail to satisfy the constraints of the problem at any point in time. It is commonly used for permutation and combination problems.",
                "exercises": [
                {
                    "title": "LeetCode 46: Permutations", "url": "https://leetcode.com/problems/permutations/",
                    "key_point": { "label": "Hint",
                    "content": "<strong>Key Points:</strong> Permutation (order matters), no duplicate elements.<br><strong>Core Logic:</strong> Use a <code>used</code> array to track which elements have been selected. The <code>for</code> loop iterates from <code>0</code> to <code>n-1</code>, recursively calling <code>backtrack()</code>.<br><strong>Pruning:</strong> None."
                    }
                },
                {
                    "title": "LeetCode 47: Permutations II", "url": "https://leetcode.com/problems/permutations-ii/",
                    "key_point": { "label": "Hint",
                    "content": "<strong>Key Points:</strong> Permutation (order matters), with duplicate elements.<br><strong>Core Logic:</strong> Use a <code>used</code> array to track selected elements. The <code>for</code> loop iterates from <code>0</code> to <code>n-1</code>.<br><strong>Pruning:</strong> First, <strong>sort</strong> the array. The pruning condition is <code>if (i > 0 && nums[i] == nums[i-1] && !used[i-1])</code>. This ensures that for duplicate numbers, we only pick the first unused one, thus avoiding duplicate permutations."
                    }
                },
                {
                    "title": "LeetCode 78: Subsets", "url": "https://leetcode.com/problems/subsets/",
                    "key_point": { "label": "Hint",
                    "content": "<strong>Key Points:</strong> Combination (order does not matter), no duplicate elements.<br><strong>Core Logic:</strong> Use a <code>startIndex</code> to ensure elements are not picked again in the same combination and to avoid duplicate subsets. The <code>for</code> loop starts from <code>startIndex</code>, and recursively calls <code>backtrack(i + 1)</code>.<br><strong>Pruning:</strong> None."
                    }
                },
                {
                    "title": "LeetCode 90: Subsets II", "url": "https://leetcode.com/problems/subsets-ii/",
                    "key_point": { "label": "Hint",
                    "content": "<strong>Key Points:</strong> Combination (order does not matter), with duplicate elements.<br><strong>Core Logic:</strong> Use <code>startIndex</code> to mark the starting point and recursively call <code>backtrack(i + 1)</code>.<br><strong>Pruning:</strong> First, <strong>sort</strong> the array. Within the same level of recursion (the same for-loop), if the current element is the same as the previous one (<code>i > startIndex && nums[i] == nums[i-1]</code>), skip it to avoid generating duplicate subsets."
                    }
                },
                {
                    "title": "LeetCode 39: Combination Sum", "url": "https://leetcode.com/problems/combination-sum/",
                    "key_point": {   "label": "Hint",
                    "content": "<strong>Key Points:</strong> Combination (order does not matter), no duplicate elements in input, but each element can be <strong>reused infinitely</strong>.<br><strong>Core Logic:</strong> The <code>for</code> loop starts from <code>startIndex</code>. Recursively call <code>backtrack(i)</code>. Since elements can be reused, the starting point for the next recursion is still <code>i</code>, not <code>i+1</code>.<br><strong>Pruning:</strong> (Optional) You can sort the array first. If <code>sum + nums[i] > target</code>, then all subsequent elements will also exceed the target, so you can prune the branch directly."
                    }
                },
                {
                    "title": "LeetCode 40: Combination Sum II", "url": "https://leetcode.com/problems/combination-sum-ii/",
                    "key_point": { "label": "Hint",
                    "content": "<strong>Key Points:</strong> Combination (order does not matter), with duplicate elements, but each element can be <strong>used only once</strong>.<br><strong>Core Logic:</strong> Use <code>startIndex</code> to mark the starting point and recursively call <code>backtrack(i + 1)</code> because elements cannot be reused.<br><strong>Pruning:</strong> First, <strong>sort</strong> the array. Within the same level of recursion (the same for-loop), if the current element is the same as the previous one (<code>i > startIndex && nums[i] == nums[i-1]</code>), skip it to avoid generating duplicate combinations."
                    }
                }
                ]
            }
        },
        // Array, Hashing, List
        {id: 'list', label: 'Arrays & Hashing', type: 'basic',
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
        // String
        {id: 'string',  label: 'Strings',  type: 'basic',
            details: {
                description: 'A collection of problems focused on string manipulation, comparison, and encoding/decoding techniques.',
                exercises: [
                { title: 'LeetCode 242: Valid Anagram', url: 'https://leetcode.com/problems/valid-anagram/' },
                { title: 'LeetCode 49: Group Anagrams', url: 'https://leetcode.com/problems/group-anagrams/' },
                { title: 'LeetCode 271: Encode and Decode Strings', url: 'https://leetcode.com/problems/encode-and-decode-strings/' }
                ]
            }
        },
        // Binary Search
        { id: 'binary_search', label: 'Binary Search', type: 'basic', details: { 
                description: `Binary Search is a very classic method to solve searching problems.
                Search in Matrix is another skill. Treat the matrix as a flattened 1D array so it becomes a regular binary seach problem.
                `,                 
                exercises: [
                    { title: 'LeetCode 704: Binary Search', url: 'https://leetcode.com/problems/binary-search/description/' },
                    { title: 'LeetCode 74: Search a 2D Matrix', url: 'https://leetcode.com/problems/search-a-2d-matrix/description/' },
                    { title: 'LeetCode 153: Find Minimum in Rotated Sorted Array', 
                        url: 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/' ,
                        key_point: {
                            label: 'Key Point (CN)', // 这是自定义的按钮名称
                            content: `这道题是二分搜索的一个经典变形，关键在于如何判断和收缩边界。
                                <br><br>
                                <strong>核心逻辑:</strong>
                                <br>
                                目标是找到旋转点（即最小值）。通过比较中间值 <code>nums[mid]</code> 和最右边的值 <code>nums[right]</code> 来判断哪部分是有序的：
                                <br>
                                1. 如果 <code>nums[mid] > nums[right]</code>，说明 <code>mid</code> 右侧到 <code>right</code> 的部分是乱序的，且最小值一定在这个区间内（不包括mid）。所以，我们应该收缩左边界: <code>left = mid + 1</code>。
                                <br>
                                2. 如果 <code>nums[mid] <= nums[right]</code>，说明 <code>mid</code> 到 <code>right</code> 的部分是有序的，最小值可能就是 <code>mid</code> 或者在 <code>mid</code> 的左侧。所以，我们应该收缩右边界: <code>right = mid</code>。
                                <br><br>
                                循环的最终结果是 <code>left</code> 和 <code>right</code> 相遇，此时指向的就是最小值。
                                <br><br>
                                <strong>参考:</strong>
                                <br><a href="https://jeffliulab.github.io/algorithm-notes/Leetcode/leetcode_500/#153-find-minimum-in-rotated-sorted-array" target="_blank">刘杰夫的算法宝典讲解</a>
                                <br><a href="https://www.youtube.com/watch?v=nIVW4P8b1VA" target="_blank">NeetCode 视频讲解 (YouTube)</a>
                            `
                        },
                    },
                    { title: 'LeetCode 33: Search in Rotated Sorted Array', 
                        url: 'https://leetcode.com/problems/search-in-rotated-sorted-array/description/',
                        key_point: {
                            label: 'Key Point (CN)', // 这是自定义的按钮名称
                            content: `
                                这道题比上面的153更难一点，不仅要判断出左右区间，还要判断怎么找到target。
                                判断逻辑升级为：先判断一个区间（比如左区间）是否是有序的，如果是，那么判断是否在左区间；
                                如果不是，说明右区间是有序的，那么就在右区间里判断是否有target。
                           
                            `
                        },
                    },
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
        // Binary Search - Minimize Problem (KOKO Eating Bananas)
        { id: 'binary_search_minimize_problem', label: 'Minimize K Problem', type: 'green', details: { 
                description:`When you encounter a problem that requires you to find a "cost" (such as speed, capacity, cost, etc.) \
                as small as possible while satisfying a CERTAIN CONSTRAINT \
                 (such as time limit, quantity limit), this is usually a strong signal to use "binary search for the answer". \
                `,  
                exercises: [
                    { title: 'LeetCode 875: Koko Eating Bananas', url: 'https://leetcode.com/problems/koko-eating-bananas/description/' },
                    { title: 'LeetCode 1011: Capacity To Ship Packages Within D Days', url: 'https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/description/' },
                ]
            }
        },
        // Linked List   navi:linked list
        { id: 'linked_list', label: 'Linked List', type: 'basic', details: { description: `
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
        // Sliding Window
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
        { id: 'fast_slow_pointers', label: 'Floyd\'s Cycle Detection', type: 'green', details: { 
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
        // Two Pointers on Array/String
        { id: 'two_pointers_array_string', label: 'Two Pointers (Array/String)', type: 'basic',
            details: {
                description: 'A set of classic problems that can be efficiently solved using the Two Pointers technique, typically on arrays and strings to find pairs or subarrays.',
                exercises: [
                { title: 'LeetCode 125: Valid Palindrome', url: 'https://leetcode.com/problems/valid-palindrome/' },
                { title: 'LeetCode 167: Two Sum II - Input Array Is Sorted', url: 'https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/' },
                { title: 'LeetCode 15: 3Sum', url: 'https://leetcode.com/problems/3sum/' },
                { title: 'LeetCode 11: Container With Most Water', url: 'https://leetcode.com/problems/container-with-most-water/' },
                { title: 'LeetCode 42: Trapping Rain Water', url: 'https://leetcode.com/problems/trapping-rain-water/' }
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
            See "Symbolic Computation" at "Leetcode Algorithm" Section.`, 
            exercises: [{ title: 'LeetCode 772: Basic Calculator III', url: 'https://leetcode.com/problems/basic-calculator-iii/description/', }, 
            ]}
        },

        // Stack
        { id: 'stack', label: 'Stack', type: 'basic', 
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
        // Queue
        { id: 'queue', label: 'Queue Implementation (Mark)', type: 'basic', 
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


    ],
    edges: [
        { from: 'list', to: 'string' }, 
        { from: 'list', to: 'matrix' },
        { from: 'list', to: 'linked_list' }, 
        { from: 'linked_list', to: 'two_pointers_linked_list' },
        { from: 'linked_list', to: 'doubly_linked_list' },
        { from: 'doubly_linked_list', to: 'queue' },
        { from: 'doubly_linked_list', to: 'group_reverse_linked_list' },
        { from: 'two_pointers_linked_list', to: 'fast_slow_pointers' },
        { from: 'fast_slow_pointers', to: 'in_place_hashing' },
        { from: 'string', to: 'group_reverse_string' }, 
        { from: 'string', to: 'two_pointers_array_string' },
        { from: 'two_pointers_array_string', to: 'sliding_window' },
        { from: 'list', to: 'sorting' },
        { from: 'sorting', to: 'searching' }, 
        { from: 'sorting', to: 'quick_select'},
        { from: 'searching', to: 'binary_search' },
        { from: 'sorting', to: 'intervals' },
        { from: 'list', to: 'stack' },
        { from: 'stack', to: 'stack_enhanced_stack' },
        { from: 'stack_enhanced_stack', to: 'stack_monotonic_stack' },
        { from: 'stack_monotonic_stack', to: 'stack_problem_largest_rectangle' },
        { from: 'stack', to: 'basic_calculator' },
        { from: 'basic_calculator', to: 'shunting_yard' },
        { from: 'stack', to: 'recursion' },
        { from: 'recursion', to: 'backtracking' },
        { from: 'backtracking', to: 'permutations_combinations' },
        { from: 'binary_search', to: 'binary_search_minimize_problem'},
    ]
};
