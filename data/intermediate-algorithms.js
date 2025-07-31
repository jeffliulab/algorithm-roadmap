if (typeof ROADMAP_DATA === 'undefined') { var ROADMAP_DATA = {}; }

ROADMAP_DATA.intermediate_algorithms = {
    nodes: [
        

        
        { id: 'searching', label: 'Searching', type: 'foundation', details: { description: 'Binary search is an efficient search algorithm that works on a sorted data set.', exercises: [{ title: 'LeetCode 704: Binary Search', url: 'https://leetcode.com/problems/binary-search/description/' }, { title: 'LeetCode 33: Search in Rotated Sorted Array', url: 'https://leetcode.com/problems/search-in-rotated-sorted-array/description/' }]}},
        // Sorting         navi: sorting           快捷导航 navi:sorting / navi sorting
        { id: 'sorting', label: 'Basic Sorting Methods', type: 'foundation', details: { 
            description: `Sorting is the process of arranging a set of elements in a specific order. Soring is the entrance algorithm for almost all new CS learners. We usally learn Selection Sort, Insertion Sort, Bubble Sort, and Bucket Sort at first. After learning recursion and divide & conquer, we will learn merge sort, quick sort, which are the common sorting techniques in most applications.
            `, exercises: [
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
                { title: 'LeetCode 215: Kth Largest Element in an Array', 
                        url: 'https://leetcode.com/problems/kth-largest-element-in-an-array/description/' ,
                        key_point: {
                            label: 'Hint', 
                            content: `Average time is O(N), but worst is O(N^2); use heap firstly, then talk about quick select.
                            `
                        },
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

        // Binary Search on the answer | navi: binary search on the answer
        { id: 'binary_search_on_the_answer', label: 'Binary Search on the Answer', type: 'intermediate', details: { 
                description:`Minimize K, Maximum K, Minimize Maximum, Maximum Minimum, all belong to this problem.
                            This problem can be solved using Binary Search on the Answer. The core idea is to define a monotonic predicate function, check(x), over the search space. The function's output will form a sequence like False, False, ..., True, True, .... Our goal is to use binary search to efficiently find the first x for which this predicate returns True.
                `,  
                exercises: [
                    { title: 'LeetCode 875: Koko Eating Bananas', url: 'https://leetcode.com/problems/koko-eating-bananas/description/',
                        key_point: {
                            label: 'Hint', // 这是自定义的按钮名称
                            content: `The faster Koko eats the bananas, the more likely he is to finish them (T); the slower he is, the more likely he is not to finish them (F). So his sequence must be in the form of F, F, ... F, T, T, ..., T. The purpose of this question is to find the minimum speed, which is the first T.                            
                            `
                        }, 
                    },
                    { title: 'LeetCode 378: Kth Smallest Element in a Sorted Matrix', url: 'https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/description/',
                        key_point: {
                            label: 'Hint', // 这是自定义的按钮名称
                            content: `We need to find the Kth smallest number, that is, the smallest number among the numbers that are less than or equal to it and that meet the condition. That is, the first T in the sequence [F,F, F, ..., F, T, T,...]                            
                            `
                        }, 
                    },
                    { title: 'LeetCode 1011: Capacity To Ship Packages Within D Days', url: 'https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/description/',
                        key_point: {
                            label: 'Hint', // 这是自定义的按钮名称
                            content: `If the capacity is too small, it cannot be transported; if the capacity is larger, it can be transported. What we are looking for is the lowest carrying capacity, that is, the first T in the result sequence of check(x) [F, F, F, .... F, T, T, ... T].
                            `
                        }, 
                    },
                ]
            }
        },
        // Backtracking  | navi: backtracking
        { id: 'backtracking', label: 'Backtracking', type: 'basic', details: { description: 'Backtracking is an algorithmic paradigm for solving problems recursively by trying to build a solution incrementally.', exercises: [{ title: 'LeetCode 78: Subsets', url: 'https://leetcode.com/problems/subsets/description/' }, { title: 'LeetCode 46: Permutations', url: 'https://leetcode.com/problems/permutations/description/' }]}},
        
        // Backtracking 2D | navi: backtracking 2d
        { id: 'backtracking_2d', label: '2D Backtracking', type: 'intermediate', details: { 
            description: `
                Very famous questions such as N Queens, Sodoku, Maze Solving, etc.
            `, exercises: [
                { title: "aaaa", url: "aaaa" 
                },
                { title: "aaaa", url: "aaaa"   
                },
            ]}
        },


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
        {"id": "permutations_combinations", "label": "Combinatorics", "type": "intermediate", "details": {
                "description": "Combinatorics including Permutations and Combinations. Backtracking is a general algorithmic technique for solving problems recursively by trying to build a solution incrementally, one piece at a time, removing those solutions that fail to satisfy the constraints of the problem at any point in time. It is commonly used for permutation and combination problems.",
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
        
        // navi: merge sort
        { id: 'merge_sort', label: 'Merge Sort', type: 'basic', 
            details: { 
                description: `Merge Sort is a very classic sorting algorithm, it is very stable.
                `,                 
                exercises: [
                    { title: 'Codes Review', 
                        key_point: {
                            label: 'Expand', 
                            content: `<code>def mergeSort(arr, s, e):
                            <br>&nbsp;&nbsp;    if e - s + 1 <= 1:
                            <br>&nbsp;&nbsp;&nbsp;&nbsp;    return arr
                            <br>&nbsp;&nbsp;    m = (s+e)//2	   # mid of arr
                            <br>&nbsp;&nbsp;    mergeSort(arr, s, m)   # sort left
                            <br>&nbsp;&nbsp;    mergeSort(arr, m+1, e) # sort right
                            <br>&nbsp;&nbsp;    merge(arr, s, m, e)    # merge two
                            <br>&nbsp;&nbsp;    return arr
                            <br>
                            <br>def merge(arr, s, m, e):
                            <br>&nbsp;&nbsp;    # copy sorted left and right halfs to temp arrays
                            <br>&nbsp;&nbsp;    L = arr[s:m+1]
                            <br>&nbsp;&nbsp;    R = arr[m+1:e+1]
                            <br>
                            <br>&nbsp;&nbsp;    i = 0 # index for L
                            <br>&nbsp;&nbsp;    j = 0 # index for R
                            <br>&nbsp;&nbsp;    k = s # index for arr
                            <br>
                            <br>&nbsp;&nbsp;    # Merge the two sorted halfs into the original array
                            <br>&nbsp;&nbsp;    # Compare L and R's element, put smaller one into arr
                            <br>&nbsp;&nbsp;    while i < len(L) and j < len(R):
                            <br>&nbsp;&nbsp;&nbsp;&nbsp;    if L[i] <= R[j]:
                            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        arr[k] = L[i]
                            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        i += 1
                            <br>&nbsp;&nbsp;&nbsp;&nbsp;    else:
                            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        arr[k] = R[j]
                            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        j += 1
                            <br>&nbsp;&nbsp;&nbsp;&nbsp;    k += 1
                            <br>
                            <br>&nbsp;&nbsp;    # One of the halfs will have elements remaining
                            <br>&nbsp;&nbsp;    while i < len(L):
                            <br>&nbsp;&nbsp;&nbsp;    arr[k] = L[i]
                            <br>&nbsp;&nbsp;&nbsp;    i += 1
                            <br>&nbsp;&nbsp;&nbsp;    k += 1
                            <br>&nbsp;&nbsp;    while j < len(R):
                            <br>&nbsp;&nbsp;&nbsp;    arr[k] = R[j]
                            <br>&nbsp;&nbsp;&nbsp;    j += 1
                            <br>&nbsp;&nbsp;&nbsp;    k += 1
                                </code>
                                `
                        },
                    },
                    { title: 'LeetCode 148: Sort List', url: 'https://leetcode.com/problems/sort-list/description/',
                        key_point: {
                            label: 'Hint', 
                            content: `
                            It is totally same with array/list:
                            <br>(1) Use head node instead of index
                            <br>(2) When found mid, disconnect left and right part
                            <br>
                            <br>It is easy to take wrong in:
                            <br>(1) when use mergeSort, base case is not head / not head.next
                            <br>(2) When found mid, note the case of <strong>ONLY TWO NODES</strong>.
                            Normally you can return the node before the mid node, if you use slow and fast pointers.
                            <br>
                            <br>The codes' details of slow and fast here:
                            <br><code>slow = head
                            <br>fast = head.next
                            <br>while fast and fast.next:
                            <br>&nbsp;&nbsp;    slow = slow.next
                            <br>&nbsp;&nbsp;    fast = fast.next.next
                            <br>right = slow.next
                            <br>slow.next = None</code>
                        

                            `
                        },
                    },
                ]
            }
        },
        // navi: divide conquer
        { id: 'divide_conquer', label: 'Divide & Conquer', type: 'foundation', details: { 
            description: `
                To make a complicated question into an easy one.
                `,                 
                exercises: [
                    { title: 'LeetCode 23: Merge K Sorted Lists', url: 'https://leetcode.com/problems/merge-k-sorted-lists/description/',
                        key_point: {
                            label: 'Hint', 
                            content: `
                                If you can solve 21. Merge Two Sorted Lists, then use divide and conquer, you can solve this more hard and complicated one.
                                `
                        },
                    },
                ]
            },
        },
        
        // navi: dp | navi: dynamic programming
        { id: 'dp', label: 'Dynamic Programming', type: 'foundation', details: { 
            description: `
                                A problem can be solved using Dynamic Programming if it exhibits two core properties:<br>
                                <br>
                                (1) <strong>Optimal Substructure</strong>: The optimal solution to the overall problem can be constructed from the optimal solutions of its subproblems.<br>
                                (2) <strong>Overlapping Subproblems</strong>: The process of solving the problem involves repeatedly computing the solutions to the same subproblems.<br>
                                <br>
                                The <strong>optimal substructure</strong> property aligns perfectly with the idea of recursion.
                                The statement, "the solution to a large problem depends on the solutions to its smaller subproblems," is the very definition of recursion.
                                Therefore, a brute-force solution for almost any dynamic programming problem can first be written recursively.
                                <br><br>Then, by introducing a memoization table (a "memo") to store the results of solved subproblems, we can avoid redundant computations.
                                This completes the <strong>top-down dynamic programming</strong> approach.<br>
                                <br>
                                The <code>memo</code> table used in top-down dynamic programming is essentially the same as the <code>dp</code> table in the bottom-up approach.
                                If we decide to fill this table iteratively from the base cases, it becomes the <strong>bottom-up, iterative DP</strong> method.
                                The iterative approach is often preferred in engineering and competitive programming because it avoids the risk of stack overflow from deep recursion.
                                <br><br>
                                However, as mentioned, if one cannot immediately formulate the state transition equation for the iterative approach, a highly effective strategy is to start with the intuitive brute-force recursion, then add memoization to optimize it, and finally, refactor it into the bottom-up iterative solution.<br>
                                `,                 
            }, 
        },
        // 1D-DP | navi: 1d dp
        { id: '1d_dp', label: 'Sequence DP (1D-DP)', type: 'sub_foundation', details: { 
            description: `
                These types of problems usually involve operations or computations on a sequence where the solution for the current state only depends on the solutions of the previous one or two states. An iterative approach is often more concise and efficient, typically using a one-dimensional array, dp[n], to store the solutions of subproblems. Due to the simple dependencies, the space complexity can often be optimized to O(1).
                <br><br>
                <strong>Method 1: Top-Down Memoization</strong><br>
                (Also known as: Optimization of Brute-force Recursion)
                <br>
                <strong>Template:</strong><br>
                1. Write the standard recursion using a helper function.<br>
                2. Introduce a cache. After the base case, modify the function to check the cache first.<br>
                <br>
                <strong>Method 2: Bottom-Up Tabulation</strong>
                <br><strong>Template:</strong><br>
                1. Pre-define the <code>dp</code> array.<br>
                2. Iterate to perform the state transition.<br>
                
                
                `,                 
                exercises: [
                    { title: 'LeetCode 70: Climbing Stairs (Tutorial)', url: 'https://leetcode.com/problems/climbing-stairs/description/',
                        key_point: {
                            label: 'Tutorial', 
                            content: `
                                Using this problem (Climbing Stairs) as an example, let's learn the two main ways of thinking in DP: Top-Down with Memoization and Bottom-Up with Iteration.<br>
                                <br>
                                <strong>I. Top-Down with Memoization</strong><br>
                                We will find that the number of ways to reach the Nth step is equal to the number of ways to reach the (N-1)th step (by taking one more step) plus the number of ways to reach the (N-2)th step (by taking two more steps).<br>
                                So, we can write the recurrence relation: Ways(N) = Ways(N-1) + Ways(N-2)<br>
                                Base Cases:<br>
                                Ways(0) = 1, which can be understood as doing nothing at the starting point.<br>
                                Ways(1) = 1, meaning there is only one way (taking one step).<br>
                                <br>
                                At this point, you'll notice there is no difference from a standard recursion! However, the biggest problem with recursion is that the algorithm performs a large number of redundant computations, leading to a time complexity of O(2^N) and causing a "Time Limit Exceeded" error. Additionally, recursive calls can lead to a "Stack Overflow" error.<br>
                                <br>
                                Therefore, we introduce a Cache to store the results that have already been computed, and then perform memoization (a search in memory). This way, before calculating a result, we first check if it has been calculated before: if it has, we can use it directly; if not, we calculate it and then store it.<br>
                                <br>
                                Generally, for DP, we don't perform the recursion on the main function itself but use a helper function to encapsulate the actual recursion and operate on the cache.<br>
                                <br>
                                Standard Recursion:<br>
                                <code>
                                &nbsp;&nbsp;if n == 0:<br>
                                &nbsp;&nbsp;&nbsp;&nbsp;return 1<br>
                                &nbsp;&nbsp;if n == 1:<br>
                                &nbsp;&nbsp;&nbsp;&nbsp;return 1<br>
                                &nbsp;&nbsp;return func(n-1) + func(n-2)<br>
                                </code>
                                <br>
                                Adding a cache:<br>
                                <code>
                                &nbsp;&nbsp;cache = [None] * (n+1)<br>
                                &nbsp;&nbsp;def dp(n):<br>
                                &nbsp;&nbsp;&nbsp;&nbsp;if n == 0:<br>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return 1<br>
                                &nbsp;&nbsp;&nbsp;&nbsp;if n == 1:<br>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return 1<br>
                                <br>
                                &nbsp;&nbsp;&nbsp;&nbsp;if cache[n] is None:<br>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cache[n] = dp(n-1) + dp(n-2)<br>
                                &nbsp;&nbsp;&nbsp;&nbsp;return cache[n]<br>
                                &nbsp;&nbsp;return dp(n)<br>
                                </code>
                                <br>
                                <br>
                                <strong>II. Bottom-Up Iterative Way</strong><br>
                                <br>
                                For convenience, the number of ways to reach the nth step is stored in <code>dp[n]</code>. The idea of the iterative method is to create an array and fill it from the beginning, so that the state at any moment is recorded.<br>
                                <br>
                                <code>
                                &nbsp;&nbsp;dp = [None] * (n+1)<br>
                                &nbsp;&nbsp;if n == 0:<br>
                                &nbsp;&nbsp;&nbsp;&nbsp;return 0<br>
                                &nbsp;&nbsp;if n == 1:<br>
                                &nbsp;&nbsp;&nbsp;&nbsp;return 1<br>
                                &nbsp;&nbsp;dp[0] = 1<br>
                                &nbsp;&nbsp;dp[1] = 1<br>
                                &nbsp;&nbsp;for i in range(2, len(dp)):<br>
                                &nbsp;&nbsp;&nbsp;&nbsp;dp[i] = dp[i-2] + dp[i-1]<br>
                                <br>
                                &nbsp;&nbsp;return dp[n]<br>
                                </code>
                                <br>
                                <br>
                                <strong>Space Optimization:</strong> Since only the two states <code>dp[i-2]</code> and <code>dp[i-1]</code> are used, we can use two variables, a and b, to store these values.<br>
                            `
                        },
                    },
                    { title: 'LeetCode 746: Min Cost Climbing Stairs', 
                        url: 'https://leetcode.com/problems/min-cost-climbing-stairs/description/',
                        key_point: {
                            label: 'Hint', 
                            content: `
                                <br>(1) dp[i] = min(dp[i-1]+cost[i-1], dp[i-2]+cost[i-2)
                                <br>(2) The roof needs an extra stage.      
                            `
                        },
                    },
                    { title: "LeetCode 198: House Robber", url: "https://leetcode.com/problems/house-robber/description/"   
                    },
                    { title: 'LeetCode 213: House Robber II', 
                        url: 'https://leetcode.com/problems/house-robber-ii/description/',
                        key_point: {
                            label: 'Hint', 
                            content: `
                                This problem presents a very clever approach. The essence of the cycle constraint is that you cannot rob the first and last houses simultaneously. This effectively breaks the problem down into two sub-problems:
                                <br>(1) Dynamic programming (DP) for the case where you do not rob the first house.
                                <br>(2) Dynamic programming (DP) for the case where you do not rob the last house.
                                <br><br><strong>Can you optimize into O(1) space?</strong>
                            `
                        },
                    },
                ]
            },
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
                    { title: 'LeetCode 918: Maximum Sum Circular Subarray★', 
                        url: 'https://leetcode.com/problems/maximum-sum-circular-subarray/description/',
                        key_point: {
                            label: 'Hint', 
                            content: `
                                The maximum sum of the sub-array in a circular array, only exists two situations:
                                <br>(1) A normal sub-array, we can use Kadane to get the answer.
                                <br>(2) A circular sub-array. To make this sub-array's sum maximum, we need to get the minimum sum's sub-array, then the remaining circular part will get the maximum value.
                                <br>(3) Compare these two situations.
                                <br>(4) A special condition: all negative numbers, then the max_sum one is the single max element in the array.
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
        // navi: LIS navi: lis navi longest increasing subsequence
        { id: 'LIS', label: 'LIS: Longest Increasing Subsequence', type: 'intermediate', details: { 
                description: `
                LIS is a series of classic 1D DP problems. The key point of LIS is on optimization.
                `,                 
                exercises: [
                    { title: 'LeetCode 300: Longest Increasing Subsequence', 
                        url: 'https://leetcode.com/problems/longest-increasing-subsequence/description/',
                        key_point: {
                            label: 'Key Points', 
                            content: `
                                    <strong>Problem-Solving Strategy:</strong><br>
                                    <br>
                                    (1) <strong>Definition of <code>dp[i]</code>:</strong> <code>dp[i]</code> represents the length of the Longest Increasing Subsequence (LIS) that ends with the number <code>nums[i]</code>.<br>
                                    <br>
                                    (2) To calculate <code>dp[i]</code>, we look back from <code>nums[i]</code>. For every preceding number <code>nums[j]</code> that is smaller than <code>nums[i]</code>, we take note of its <code>dp[j]</code> value. We scan all the way to the beginning, and whenever a larger <code>dp[j]</code> is found, we update our record of the maximum preceding length, <code>max_prev_len</code>.<br>
                                    <br>
                                    (3) After the scan is complete, update <code>dp[i]</code> to be <code>max_prev_len + 1</code>.<br>
                                    <br>
                                    (4) Finally, find the maximum value in the entire <code>dp</code> array.<br>
                                    <br>
                                    <br>
                                    <strong>Note.1:</strong> The DP solution for this problem has a time complexity of O(N^2). It can be optimized to O(N log N) using a Greedy approach with Binary Search.<br>
                                    <br>
                                    <strong>Note.2:</strong> If we store the maximum length and its ending position from the <code>dp</code> array, we can reconstruct the subsequence itself. For finding the actual subsequence, the DP method is much more straightforward than the Greedy approach.<br>
                                `
                        },
                    },
                    
                ]
            }
        },
        // navi: max product subarray
        { id: 'max_product_subarray', label: 'Max Product Subarray', type: 'intermediate', details: { 
                description: `
                See 152's Key Points to learn the idea of max product subarray problem.
                `,                 
                exercises: [
                    { title: '152: Maximum Product Subarray', 
                        url: 'https://leetcode.com/problems/maximum-product-subarray/description/',
                        key_point: {
                            label: 'Key Points', 
                            content: `
Solution1: (Kadane's and Corresponding Optmz.)
[pre]Use Kadane's 0: 0 makes product 0, so divided by 0.
1. Forward traversal:
If the negative numbers % 2 == 0:
we can get the max result.
2. Reverse traversal
If in 1. the neg.nums % 2 == 1:
then the max range will be in the place
after last neg. or before first neg.
[/pre]
Solution2 (General DP Solution):
<br>A negative minimum number will become suddenly really large when it meets another negative number. So we trace the minimum number at the same time.
<br>We also use 0 as a divided sign, then maintain a dp[i] represent the largest result/minimum result in current range, after last 0 occurs.
[pre]Maintain two dp:
1. max_dp[i] for max product of a sub-array 
ending at index i:  max_dp[0] = nums[0]
2. min_dp[i] for min product of a sub-array
ending at index i:  min_dp[0] = nums[0]

The max_dp[i] comes from one of the max value:
1. nums[i]
2. max_dp[i-1] * nums[i] (large pos. * pos.)
3. min_dp[i-1] * nums[i] (large neg. * neg.)

The min_dp[i] comes from one of the min value:
1. nums[i]
2. max_dp[i-1] * nums[i] (large pos. * neg.)
3. min_dp[i-1] * nums[i] (large neg. * pos.)

0 case: dp[i] would come from (0,0,0)
result: max(max_dp)
[/pre]

                                `
                        },
                    },
                    
                ]
            }
        },
        // navi: 2d dp
        { id: '2d_dp', label: '2-Dimension DP', type: 'sub_foundation', details: { 
                description: `
                2D DP (Grid DP) typically includes classic problems such as Minimum Path Sum, Unique Paths, Unique Paths with Obstacles, Longest Common Subsequence, Longest Common Substring, and Edit Distance.
                `,                 
                exercises: [
                    { title: 'LeetCode 62: Unique Paths', 
                        url: 'https://leetcode.com/problems/unique-paths/description/',
                        key_point: {
                            label: 'Hint', 
                            content: `
                                    The approach is not significantly different from 1D DP; the main distinction lies in the preprocessing. You need to handle the first row and first column separately first, and then proceed with state transitions through iteration.
                                    `
                        },
                    },
                    { title: 'LeetCode 63: Unique Paths II', 
                        url: 'https://leetcode.com/problems/unique-paths-ii/description/',
                        key_point: {
                            label: 'Hint', 
                            content: `
                                This problem builds upon Unique Paths I by adding obstacles. As a result, the state transition includes an additional condition: if the current cell is an obstacle, the number of paths is set to 0. There's no need to separately analyze the cases to the right or below an obstacle, because the dp array already captures that information.                                    
                                `
                        },
                    },
                    { title: 'LeetCode 256: Paint House', 
                        url: 'https://leetcode.com/problems/paint-house/',
                        key_point: {
                            label: 'Hint', 
                            content: `
This question is very classic, and the key point is on constructing the state transition equation.
<br><br>dp[i][j] represents the i-th house (starts from 0), and the i-th house is painted in j color's accumulated minimum costs.
<br><br>The transition equation:
[pre]dp[i][cur_color] = costs[i][cur_color] 
+ min(dp[i-1][non_cur_color_1], dp[i-1][non_cur_color_2])[/pre]
                            `
                        },
                    },
                    
                    
                ]
            }
        },
        // navi: lcs navi: longest common subsequence
        { id: 'LCS', label: 'LCS: Longest Common Subsequence', type: 'intermediate', details: { 
                description: `
                LCS is another very important 2D DP application.
                `,                 
                exercises: [
                    { title: 'LeetCode 1143: Longest Common Subsequence', 
                        url: 'https://leetcode.com/problems/longest-common-subsequence/description/',
                        key_point: {
                            label: 'Key Points', 
                            content: `
                            This is the classic Longest Common Subsequence (LCS) problem.<br>
                            <strong>Problem-Solving Strategy:</strong><br>
                            <br>
                            (1) Create a 2D <code>dp</code> table. The meaning of <code>dp[i][j]</code> is: the length of the longest common subsequence between the first <code>i</code> characters of <code>text1</code> and the first <code>j</code> characters of <code>text2</code>.<br>
                            <br>
                            (2) To handle the edge case of empty strings, the dimensions of the <code>dp</code> table are increased by 1 (length + 1). This allows <code>dp[0][j]</code> and <code>dp[i][0]</code> to represent comparisons with an empty string. The 0th row and 0th column are pre-filled with 0s, making it easier to align the ith character with the ith row.<br>
                            <br>
                            (3) The value of <code>dp[i][j]</code> depends on the ith character of <code>text1</code> (<code>text1[i-1]</code>) and the jth character of <code>text2</code> (<code>text2[j-1]</code>):<br>
                            &nbsp;&nbsp;<br>a. <strong>If the two characters are equal</strong>, it means we have found a common character that can extend our subsequence. Therefore, the current longest length is 1 plus the value in the top-left cell: 
                            <br><strong><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dp[i][j] = 1 + dp[i-1][j-1]</code></strong>. 
                            <br>This rule implies that if the characters match, we can effectively remove them, and the solution for the remaining parts is already recorded in the top-left cell.<br>
                            &nbsp;&nbsp;<br>b. <strong>If the two characters are not equal</strong>, we must choose one to discard: 
                            <br><strong><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dp[i][j] = max(dp[i-1][j], dp[i][j-1])</code></strong>. 
                            <br>This rule means that since the characters don't match, they don't contribute to extending the LCS. Therefore, the best result we can achieve up to this point is the maximum of the results we have already calculated from the cell above and the cell to the left.<br>
                            <br>
                            <code>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;j=0&nbsp;&nbsp;j=1&nbsp;&nbsp;j=2&nbsp;&nbsp;j=3<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;""&nbsp;&nbsp;&nbsp;"a"&nbsp;&nbsp;"c"&nbsp;&nbsp;"e"<br>
                            i=0&nbsp;&nbsp;""&nbsp;&nbsp;&nbsp;0&nbsp;&nbsp;&nbsp;&nbsp;0&nbsp;&nbsp;&nbsp;&nbsp;0&nbsp;&nbsp;&nbsp;&nbsp;0<br>
                            i=1&nbsp;&nbsp;"a"&nbsp;&nbsp;0&nbsp;&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;&nbsp;&nbsp;1<br>
                            i=2&nbsp;&nbsp;"b"&nbsp;&nbsp;0&nbsp;&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;&nbsp;&nbsp;1<br>
                            i=3&nbsp;&nbsp;"c"&nbsp;&nbsp;0&nbsp;&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;2<br>
                            i=4&nbsp;&nbsp;"d"&nbsp;&nbsp;0&nbsp;&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;2<br>
                            i=5&nbsp;&nbsp;"e"&nbsp;&nbsp;0&nbsp;&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;3<br>
                            </code>
                                    `
                        },
                    },

                    
                    
                ]
            }
        },




        { id: 'greedy', label: 'Greedy', type: 'foundation', details: { description: '.....', }},
        { id: 'quick_sort', label: 'Quick Sort', type: 'basic', details: { description: '.....', }},


    ],
    edges: [ 
        // Branch
        {from: 'sorting', to: 'searching' }, 
        {from:'searching',to:'recursion'},
        {from:'recursion',to:'greedy'},
        {from:'greedy',to:'dp'},
        {from:'dp',to:'1d_dp'},
        {from:'1d_dp',to:'2d_dp'},



        // sorting
        {from:'sorting',to:'intervals'},

        // Divide and Conquer
        {from:'divide_conquer', to: 'quick_sort'},
        {from:'quick_sort',to:'merge_sort'},
        {from:'recursion',to:'divide_conquer'},
        { from: 'quick_sort', to: 'quick_select'},


        // searching
        { from: 'searching', to: 'binary_search' },
        { from: 'binary_search', to: 'binary_search_on_the_answer'},

        // recursion
        { from: 'recursion', to: 'backtracking' },
        { from: 'backtracking', to: 'permutations_combinations' },
        { from: 'backtracking', to: 'backtracking_2d' },

        // 1D-DP (Sequence DP)
        {from:'1d_dp',to:'kadane_algorithm'},
        {from:'kadane_algorithm',to:'max_product_subarray'},
        {from:'1d_dp',to:'LIS'},

        // 2D-DP
        {from:'2d_dp',to:'LCS'},




    ]
};


//list, sorting ,searching, quick_select, binary_search, intervals