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
                    { title: 'LeetCode 371: Sum of Two Integers', url: 'https://leetcode.com/problems/sum-of-two-integers/description/',
                        key_point: {
                            label: 'Key Points', 
                            content: `
                                This is a very classic bit manipulating question.
                                <br>
                                <br><strong>Coding:</strong>
                                <br><code>mask = 0xFFFFFFFF
                                <br>
                                <br>while (b&mask) != 0:
                                <br>&nbsp;&nbsp;carry = (a & b) << 1
                                <br>
                                <br>&nbsp;&nbsp;a = a ^ b
                                <br>
                                <br>&nbsp;&nbsp;b = carry
                                <br>
                                <br>if (a & mask) > 0x7FFFFFFF:
                                <br>&nbsp;&nbsp;return ~(a^mask)
                                <br>else:
                                <br>&nbsp;&nbsp;return a & mask</code>
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






        { id: 'greedy', label: 'Greedy', type: 'foundation', details: { description: '.....', }},
        { id: 'math', label: 'Math & Geometry', type: 'foundation', details: { description: '.....', }},
        { id: 'quick_sort', label: 'Quick Sort', type: 'basic', details: { description: '.....', }},
        { id: 'independent', label: 'Independent Problems', type: 'foundation', details: { description: '.....', }},
        { id: 'dp', label: 'Dynamic Programming', type: 'foundation', details: { description: '.....', }},
        { id: 'dp_2d', label: 'Multi-Dimentional DP', type: 'foundation', details: { description: '.....', }},
        { id: 'knapsack', label: '0/1 Knapsack', type: 'intermediate', details: { description: '.....', }},


    ],
    edges: [ 
        // Branch
        { from: 'sorting', to: 'searching' }, 
        {from:'searching',to:'recursion'},
        {from:'recursion',to:'greedy'},
        {from:'greedy',to:'dp'},
        {from:'dp',to:'dp_2d'},

        // Independent Branch
        {from:'independent',to:'math'},
        {from:'math',to:'bit'},

        // sorting
        { from: 'sorting', to: 'quick_sort'},
        { from: 'quick_sort', to: 'quick_select'},
        {from:'quick_sort',to:'merge_sort'},
        {from:'merge_sort',to:'divide_conquer'},
        {from:'sorting',to:'intervals'},

        // searching
        { from: 'searching', to: 'binary_search' },
        { from: 'binary_search', to: 'binary_search_on_the_answer'},

        // recursion
        { from: 'recursion', to: 'backtracking' },
        { from: 'backtracking', to: 'permutations_combinations' },

        // dynamic programming
        {from:'dp',to:'kadane_algorithm'},

        // 2D-DP
        {from:'dp_2d',to:'knapsack'},




    ]
};


//list, sorting ,searching, quick_select, binary_search, intervals