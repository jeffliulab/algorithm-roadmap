// 初始化全局数据容器（如果不存在）
if (typeof ROADMAP_DATA === 'undefined') { var ROADMAP_DATA = {}; }

ROADMAP_DATA.linear_structures = {
    nodes: [
        // 所有单独是一行的节点之后有时间都要重新捋一下，这些是INIT的时候设置的
        { id: 'list', label: 'Arrays & Dynamic Arrays', type: 'basic', details: { description: 'Array is the most basic data structure, in Python we use list to present array and dynamic array.', exercises: [{ title: 'LeetCode 1: Two Sum', url: 'https://leetcode.com/problems/two-sum/description/' }, { title: 'LeetCode 15: 3Sum', url: 'https://leetcode.com/problems/3sum/description/' }]}},
        { id: 'hashmap', label: 'HashSet & HashMap', type: 'basic', details: { description: 'HashSet (set) and HashMap (dict) can store unique keys. HashMap can store unique key-value pairs. Keys must use immutable elements.', exercises: [{ title: 'LeetCode 347. Top K Frequent Elements', url: 'https://leetcode.com/problems/top-k-frequent-elements/description/' }, { title: 'LeetCode 128. Longest Consecutive Sequence', url: 'https://leetcode.com/problems/longest-consecutive-sequence/description/' }]}},
        { id: 'string', label: 'String', type: 'basic', details: { description: 'A string is a sequence of characters. Common operations include searching, replacing, and splitting.', exercises: [{ title: 'LeetCode 3: Longest Substring Without Repeating Characters', url: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/description/' }, { title: 'LeetCode 125: Valid Palindrome', url: 'https://leetcode.com/problems/valid-palindrome/description/' }, { title: 'LeetCode 242: Valid Anagram', url: 'https://leetcode.com/problems/valid-anagram/description/' }]}},
        { id: 'linked_list', label: 'Linked List', type: 'basic', details: { description: 'A linked list is a linear data structure where elements are not stored at contiguous memory locations.', exercises: [{ title: 'LeetCode 206: Reverse Linked List', url: 'https://leetcode.com/problems/reverse-linked-list/description/' }, { title: 'LeetCode 21: Merge Two Sorted Lists', url: 'https://leetcode.com/problems/merge-two-sorted-lists/description/' }, { title: 'LeetCode 141: Linked List Cycle', url: 'https://leetcode.com/problems/linked-list-cycle/description/' }]}},
        { id: 'two_pointers', label: 'Two Pointers', type: 'basic', details: { description: 'Two pointers is a common technique that uses two pointers to solve problems in an array or linked list.', exercises: [{ title: 'LeetCode 167: Two Sum II - Input Array Is Sorted', url: 'https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/' }, { title: 'LeetCode 11: Container With Most Water', url: 'https://leetcode.com/problems/container-with-most-water/description/' }, { title: 'LeetCode 283: Move Zeroes', url: 'https://leetcode.com/problems/move-zeroes/description/' }]}},
        { id: 'sorting', label: 'Sorting', type: 'basic', details: { description: 'Sorting is the process of arranging a set of elements in a specific order.', exercises: [{ title: 'LeetCode 912: Sort an Array', url: 'https://leetcode.com/problems/sort-an-array/description/' }, { title: 'LeetCode 75: Sort Colors', url: 'https://leetcode.com/problems/sort-colors/description/' }, { title: 'LeetCode 56: Merge Intervals', url: 'https://leetcode.com/problems/merge-intervals/description/' }]}},
        { id: 'searching', label: 'Searching', type: 'basic', details: { description: 'Binary search is an efficient search algorithm that works on a sorted data set.', exercises: [{ title: 'LeetCode 704: Binary Search', url: 'https://leetcode.com/problems/binary-search/description/' }, { title: 'LeetCode 33: Search in Rotated Sorted Array', url: 'https://leetcode.com/problems/search-in-rotated-sorted-array/description/' }]}},
        { id: 'intervals', label: 'Intervals Problem', type: 'green', details: { description: "Interval problems involve dealing with ranges or segments of data. Sorting is often the first step.", exercises: [{ title: "LeetCode 56: Merge Intervals", url: "https://leetcode.com/problems/merge-intervals/description/" }, { title: "LeetCode 57: Insert Interval", url: "https://leetcode.com/problems/insert-interval/description/" }, { title: "LeetCode 253: Meeting Rooms II", url: "https://leetcode.com/problems/meeting-rooms-ii/description/" }]}},
        { id: 'matrix', label: 'Matrix', type: 'basic', details: { description: "Matrix problems involve traversing or modifying a 2D grid.", exercises: [{ title: "LeetCode 54: Spiral Matrix", url: "https://leetcode.com/problems/spiral-matrix/" }, { title: "LeetCode 48: Rotate Image", url: "https://leetcode.com/problems/rotate-image/" }, { title: "LeetCode 73: Set Matrix Zeroes", url: "https://leetcode.com/problems/set-matrix-zeroes/" }]}},
        { id: 'stack', label: 'Stack', type: 'basic', details: { description: 'A stack is a Last-In-First-Out (LIFO) data structure.', exercises: [{ title: 'LeetCode 20: Valid Parentheses', url: 'https://leetcode.com/problems/valid-parentheses/description/' }, { title: 'LeetCode 150: Evaluate Reverse Polish Notation', url: 'https://leetcode.com/problems/evaluate-reverse-polish-notation/description/' }]}},
        { id: 'stack_enhanced_stack', label: 'Enhanced Stack', type: 'basic', details: { description: 'Discover how auxiliary stacks and augmented nodes turn simple stacks into problem-solving machines.', exercises: [{ title: 'LeetCode 155: Min Stack', url: 'https://leetcode.com/problems/min-stack/description/' }]}},
        { id: 'stack_monotonic_stack', label: 'Monotonic Stack', type: 'basic', details: { description: 'A stack that maintains a monotonic order of elements.', exercises: [{ title: 'LeetCode 739: Daily Temperatures', url: 'https://leetcode.com/problems/daily-temperatures/description/' }, { title: 'LeetCode 853: Car Fleet', url: 'https://leetcode.com/problems/car-fleet/description/' }]}},
        { id: 'stack_problem_largest_rectangle', label: 'Largest Rectangle Problem', type: 'intermediate', details: { description: 'A classic application of the monotonic stack.', exercises: [{ title: 'LeetCode 84: Largest Rectangle in Histogram', url: 'https://leetcode.com/problems/largest-rectangle-in-histogram/' }]}},
        { id: 'stack_basic_calculator', label: 'Basic Calculator Problem', type: 'intermediate', details: { description: 'Use stacks to parse and evaluate mathematical expressions.', exercises: [{ title: 'LeetCode 224: Basic Calculator', url: 'https://leetcode.com/problems/basic-calculator/description/' }, { title: 'LeetCode 227: Basic Calculator II', url: 'https://leetcode.com/problems/basic-calculator-ii/description/' }]}},
        { id: 'recursion', label: 'Recursion', type: 'basic', details: { description: "Recursion is a function that calls itself. Its execution is managed by the call stack.", exercises: [{ title: "The concept of recursion:", url: "https://example.com" }]}},
        { id: 'backtracking', label: 'Backtracking', type: 'basic', details: { description: 'Backtracking is an algorithmic paradigm for solving problems recursively by trying to build a solution incrementally.', exercises: [{ title: 'LeetCode 78: Subsets', url: 'https://leetcode.com/problems/subsets/description/' }, { title: 'LeetCode 46: Permutations', url: 'https://leetcode.com/problems/permutations/description/' }]}},
        { id: 'permutations_combinations', label: 'Permutations & Combinations', type: 'basic', details: { description: "Classic problems solved with backtracking.", exercises: [{ title: "LeetCode 47: Permutations II", url: "https://leetcode.com/problems/permutations-ii/description/" }, { title: "LeetCode 90: Subsets II", url: "https://leetcode.com/problems/subsets-ii/description/" }, { title: "LeetCode 39: Combination Sum", url: "https://leetcode.com/problems/combination-sum/description/" }]}},
        // Binary Search
        { id: 'binary_search', label: 'Binary Search', type: 'basic', details: { 
                description: `
                Binary Search is a very classic method to solve searching problems.
                Search in Matrix is another skill. Treat the matrix as a flattened 1D array so it becomes a regular binary seach problem.
                `,                 
                exercises: [
                    { title: 'LeetCode 704: Binary Search', url: 'https://leetcode.com/problems/binary-search/description/' },
                    { title: 'LeetCode 74: Search a 2D Matrix', url: 'https://leetcode.com/problems/search-a-2d-matrix/description/' },
                    { title: 'LeetCode 153: Find Minimum in Rotated Sorted Array', 
                        url: 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/' ,
                        key_point: {
                            label: 'Key Point', // 这是自定义的按钮名称
                            content: `
                                这道题是二分搜索的一个经典变形，关键在于如何判断和收缩边界。
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
                ]
            }
        },
        // Binary Search - Minimize Problem (KOKO Eating Bananas)
        { id: 'binary_search_minimize_problem', label: 'Minimize K Problem', type: 'green', details: { 
                description:`
                When you encounter a problem that requires you to find a "cost" (such as speed, capacity, cost, etc.) 
                as small as possible while satisfying a CERTAIN CONSTRAINT
                 (such as time limit, quantity limit), this is usually a strong signal to use "binary search for the answer".
                `,  
                exercises: [
                    { title: 'LeetCode 875: Koko Eating Bananas', url: 'https://leetcode.com/problems/koko-eating-bananas/description/' },
                    { title: 'LeetCode 1011: Capacity To Ship Packages Within D Days', url: 'https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/description/' },
                ]
            }
        },
    ],
    edges: [
        { from: 'list', to: 'hashmap' }, { from: 'list', to: 'string' }, { from: 'list', to: 'matrix' },
        { from: 'list', to: 'linked_list' }, { from: 'linked_list', to: 'two_pointers' },
        { from: 'string', to: 'two_pointers' }, { from: 'two_pointers', to: 'sorting' },
        { from: 'sorting', to: 'searching' }, { from: 'searching', to: 'binary_search' },
        { from: 'sorting', to: 'intervals' },
        { from: 'list', to: 'stack' },
        { from: 'stack', to: 'stack_enhanced_stack' },
        { from: 'stack_enhanced_stack', to: 'stack_monotonic_stack' },
        { from: 'stack_monotonic_stack', to: 'stack_problem_largest_rectangle' },
        { from: 'stack', to: 'stack_basic_calculator' },
        { from: 'stack', to: 'recursion' },
        { from: 'recursion', to: 'backtracking' },
        { from: 'backtracking', to: 'permutations_combinations' },
        { from: 'binary_search', to: 'binary_search_minimize_problem'},
    ]
};
