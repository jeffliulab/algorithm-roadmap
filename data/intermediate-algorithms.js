if (typeof ROADMAP_DATA === 'undefined') { var ROADMAP_DATA = {}; }

ROADMAP_DATA.intermediate_algorithms = {
    nodes: [
        

        
        { id: 'searching', label: 'Searching', type: 'foundation', details: { description: 'Binary search is an efficient search algorithm that works on a sorted data set.', exercises: [{ title: 'LeetCode 704: Binary Search', url: 'https://leetcode.com/problems/binary-search/description/' }, { title: 'LeetCode 33: Search in Rotated Sorted Array', url: 'https://leetcode.com/problems/search-in-rotated-sorted-array/description/' }]}},
        // Sorting                    快捷导航 navi:sorting / navi sorting
        { id: 'sorting', label: 'Sorting', type: 'foundation', details: { 
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
        // Quick Select  | navi: quick select
        { id: 'quick_select', label: 'Quick Select', type: 'intermediate', details: { 
            description: `Quick select, especially 
            `, exercises: [
                { title: "LeetCode 215: Kth Largest Element in an Array", url: "https://leetcode.com/problems/kth-largest-element-in-an-array/description/" 
                },
                
            ]}
        },
        // Binary Search   |  navi: binary search
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
                            label: 'Key Point', // 这是自定义的按钮名称
                            content: `This problem is a classic variation of binary search, where the key lies in how to determine and shrink the boundaries.
                                    <br><br>
                                    <strong>Core Logic:</strong>
                                    <br>
                                    The goal is to find the pivot point (i.e., the minimum value). By comparing the middle value <code>nums[mid]</code> with the rightmost value <code>nums[right]</code>, we determine which part is sorted:
                                    <br>
                                    1. If <code>nums[mid] > nums[right]</code>, it means the part from <code>mid</code> to <code>right</code> is unsorted, and the minimum value must be within this range (excluding mid). Therefore, we should shrink the left boundary: <code>left = mid + 1</code>.
                                    <br>
                                    2. If <code>nums[mid] <= nums[right]</code>, it means the part from <code>mid</code> to <code>right</code> is sorted. The minimum value could be <code>mid</code> itself or to the left of <code>mid</code>. Therefore, we should shrink the right boundary: <code>right = mid</code>.
                                    <br><br>
                                    The final result of the loop is when <code>left</code> and <code>right</code> meet, at which point they point to the minimum value.
                                    <br><br>
                                    <strong>References:</strong>
                                <br><a href="https://jeffliulab.github.io/algorithm-notes/Leetcode/leetcode_500/#153-find-minimum-in-rotated-sorted-array" target="_blank">刘杰夫的算法宝典讲解</a>
                                <br><a href="https://www.youtube.com/watch?v=nIVW4P8b1VA" target="_blank">NeetCode 视频讲解 (YouTube)</a>
                            `
                        },
                    },
                    { title: 'LeetCode 33: Search in Rotated Sorted Array', 
                        url: 'https://leetcode.com/problems/search-in-rotated-sorted-array/description/',
                        key_point: {
                            label: 'Key Point', // 这是自定义的按钮名称
                            content: `
                                This problem is slightly more challenging than a standard rotated sorted array search. It not only requires determining the correct search interval (left or right) but also a more nuanced approach to finding the target.
                                <br><br>
                                <strong>Upgraded Search Logic:</strong>
                                <br>
                                The enhanced logic involves first determining which half of the array is sorted, then checking if the target resides within that sorted segment.
                                <br>
                                1. <strong>Identify the Sorted Subarray:</strong> First, check if one of the subarrays (e.g., the left subarray) is <strong>sorted</strong>.
                                <br>
                                2. <strong>Search within the Sorted Subarray:</strong>
                                    <ul>
                                        <li>If the left subarray is sorted, determine if the <code>target</code> falls within the range of values in this <strong>left sorted subarray</strong>. If it does, continue your search exclusively within this left subarray.</li>
                                        <li>If the left subarray is <strong>not</strong> sorted, it implies that the <strong>right subarray must be sorted</strong>. In this case, determine if the <code>target</code> falls within the range of values in this right sorted subarray. If it does, continue your search exclusively within this right subarray.</li>
                                    </ul>
                                <br><br>
                                This refined approach allows for efficient narrowing down of the search space in a rotated sorted array to quickly locate the target.                        
                            `
                        },
                    },
                    { title: 'LeetCode 34: Find First and Last Position of Element in Sorted Array', 
                        url: 'https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/',
                    },
                ]
            }
        },
        // Intervals
        { id: 'intervals', label: 'Intervals Problems', type: 'basic', details: { description: "Interval problems involve dealing with ranges or segments of data. Sorting is often the first step.", exercises: [{ title: "LeetCode 56: Merge Intervals", url: "https://leetcode.com/problems/merge-intervals/description/" }, { title: "LeetCode 57: Insert Interval", url: "https://leetcode.com/problems/insert-interval/description/" }, { title: "LeetCode 253: Meeting Rooms II", url: "https://leetcode.com/problems/meeting-rooms-ii/description/" }]}},

        // Binary Search - Minimize Problem (KOKO Eating Bananas)   | navi: minimize k problem
        { id: 'binary_search_minimize_problem', label: 'Minimize K Problem', type: 'intermediate', details: { 
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
        // Backtracking  | navi: backtracking
        { id: 'backtracking', label: 'Backtracking (1D)', type: 'basic', details: { description: 'Backtracking is an algorithmic paradigm for solving problems recursively by trying to build a solution incrementally.', exercises: [{ title: 'LeetCode 78: Subsets', url: 'https://leetcode.com/problems/subsets/description/' }, { title: 'LeetCode 46: Permutations', url: 'https://leetcode.com/problems/permutations/description/' }]}},
        
        // Recursion | navi:recursion | navi: recursion
        { id: 'recursion', label: 'Recursion', type: 'foundation', details: { 
            description: `Recursion is a programming technique where a function calls itself to solve smaller instances of a problem.
            Most recursion questions are in topics of Tree Traversal, Divide and Conquer, Backtracking, etc.`, exercises: [
                { title: "The Concept of Recursion", url: "https://jeffliulab.github.io/algorithm-notes/algorithms/#recursion" 
                },
                { title: "LeetCode 509: Fibonacci Number", url: "https://leetcode.com/problems/fibonacci-number/description/"   
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
        // Kadane's Algorithm   | navi: kadane algorithm  | navi: kadane's algorithm
        { id: 'kadane_algorithm', label: 'Kadane\'s Algorithm', type: 'basic', details: { 
                description: `
                Find the contiguous subarray with the largest sum within a one-dimensional array.
                <br><strong>Core Idea</strong>: If the sum of the current subarray becomes negative, 
                discard it and start calculating a new subarray sum from the next element.
                <br><strong>Best Practice</strong>:
                <br>(1) Use a single variable if you only need to find the maximum sum.
                <br>(2) If you need to find the actual sub-array that produces the maximum sum, use two pointers L & R, to record the window of that sub-array.
                <br><code>Time Complexity: O(N), Space Complexity: O(1)</code>
                
                `,                 
                exercises: [
                    { title: 'LeetCode 53: Maximum Subarray', url: 'https://leetcode.com/problems/maximum-subarray/description/' },
                    { title: 'LeetCode 918: Maximum Sum Circular Subarray', 
                        url: 'https://leetcode.com/problems/maximum-sum-circular-subarray/description/',
                        key_point: {
                            label: 'Hint', 
                            content: `
                                This question is actually to find the max smallest sum sub-array.
                                <br><code>Circular Max Sum Sub-array = max(normal max sub-array, array - min sum sub-array)</code>
                                <br>Just don't forget the normal situation!
                                <br>Special condition: all elements are negative numbers.
                                `
                        },
                    },
                    { title: 'LeetCode 978: Longest Turbulent Subarray', 
                        url: 'https://leetcode.com/problems/longest-turbulent-subarray/description/',
                        key_point: {
                            label: 'Hint', 
                            content: `
                                Find the length of the longest subarray that is "alternatingly increasing and decreasing" or "alternatingly decreasing and increasing." Adjacent elements that are equal are not permitted.
                                This problem is not strictly an application of Kadane's algorithm, but it employs a very similar thought process. The key difference is that instead of maximizing a sum, we are maximizing a length. Likewise, instead of resetting the calculation when the sum becomes negative, we reset the calculation when the sequence no longer meets the alternating requirement.
                                `
                        },
                    },
                ]
            }
        },

        { id: 'greedy', label: 'Greedy', type: 'foundation', details: { description: '.....', }},
        { id: 'dp', label: 'Dynamic Programming', type: 'foundation', details: { description: '.....', }},
        { id: 'math', label: 'Math Foundations', type: 'foundation', details: { description: '.....', }},
        { id: 'bit', label: 'Bit Manipulation', type: 'foundation', details: { description: '.....', }},


    ],
    edges: [ 
        // Branch
        { from: 'sorting', to: 'searching' }, 
        {from:'searching',to:'recursion'},
        {from:'recursion',to:'greedy'},
        {from:'greedy',to:'dp'},

        // Math Branch
        {from:'math',to:'bit'},

        // sorting
        { from: 'sorting', to: 'quick_select'},
        {from:'sorting',to:'intervals'},

        // searching
        { from: 'searching', to: 'binary_search' },
        { from: 'binary_search', to: 'binary_search_minimize_problem'},

        // recursion
        { from: 'recursion', to: 'backtracking' },
        { from: 'backtracking', to: 'permutations_combinations' },

        // dynamic programming
        {from:'dp',to:'kadane_algorithm'},




    ]
};


//list, sorting ,searching, quick_select, binary_search, intervals