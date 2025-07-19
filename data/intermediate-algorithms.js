if (typeof ROADMAP_DATA === 'undefined') { var ROADMAP_DATA = {}; }

ROADMAP_DATA.intermediate_algorithms = {
    nodes: [
        // +++ NEW ROOT NODE FOR THIS TOPIC +++
        { id: 'intermediate_algos_root', label: 'Intermediate Algorithm Paradigms', type: 'basic', details: { 
            description: "This section moves beyond basic data structures into powerful problem-solving paradigms. These techniques, like Divide and Conquer, Greedy, and Dynamic Programming, form the core toolkit for tackling complex algorithmic challenges.",
        }},

        // --- Existing Math Nodes (Content is preserved) ---
        { id: 'math_geometry', label: 'Math & Geometry', type: 'basic', details: { 
            description: "These problems require you to apply mathematical and geometric knowledge to discover patterns. The code itself may not be complex, but the thought process is key.", 
            exercises: [
                { title: "LeetCode 50: Pow(x, n)", url: "https://leetcode.com/problems/powx-n/description/" },
                { title: "LeetCode 48: Rotate Image", url: "https://leetcode.com/problems/rotate-image/description/" },
            ]
        }},
        { id: 'number_theory', label: 'Number Theory', type: 'intermediate', details: {
            description: "Number theory is a branch of mathematics that studies the properties of integers. In algorithms, it often involves concepts like prime numbers, factors, greatest common divisor (GCD), and modular arithmetic, which is especially important for handling large numbers.",
            exercises: [
                { title: "LeetCode 204: Count Primes", url: "https://leetcode.com/problems/count-primes/description/" },
                { title: "LeetCode 1071: Greatest Common Divisor of Strings", url: "https://leetcode.com/problems/greatest-common-divisor-of-strings/" },
                { title: "LeetCode 365: Water and Jug Problem", url: "https://leetcode.com/problems/water-and-jug-problem/" }
            ]
        }},
        { id: 'combinatorics', label: 'Combinatorics', type: 'intermediate', details: {
            description: "Combinatorics focuses on 'counting'. When a problem asks 'how many ways' instead of 'list all the ways', you often need to use mathematical formulas for permutations and combinations for an efficient solution.",
            exercises: [
                { title: "LeetCode 62: Unique Paths", url: "https://leetcode.com/problems/unique-paths/" },
                { title: "LeetCode 118: Pascal's Triangle", url: "https://leetcode.com/problems/pascals-triangle/" },
            ]
        }},
        { id: 'bit_manipulation', label: 'Bit Manipulation', type: 'basic', details: { 
            description: "Performing operations at the level of binary bits. Using operators like AND(&), OR(|), XOR(^), NOT(~), and SHIFT(<<, >>), you can implement many highly efficient techniques.", 
            exercises: [
                { title: "LeetCode 191: Number of 1 Bits", url: "https://leetcode.com/problems/number-of-1-bits/description/" },
                { title: "LeetCode 136: Single Number", url: "https://leetcode.com/problems/single-number/description/" },
                { title: "LeetCode 268: Missing Number", url: "https://leetcode.com/problems/missing-number/description/" },
            ]
        }},
        { id: 'symbolic_computation', label: 'Symbolic Computation', type: 'advanced', details: { 
            description: 'The manipulation of mathematical expressions in symbolic form, rather than by their numeric value. This often involves complex parsing and recursion.', 
            exercises: [
                { title: 'LeetCode 736: Parse Lisp Expression', url: 'https://leetcode.com/problems/parse-lisp-expression/description/' }, 
                { title: 'LeetCode 770: Basic Calculator IV', url: 'https://leetcode.com/problems/basic-calculator-iv/description/' }
            ]
        }},
        
        // --- Existing Greedy/DP Nodes (Content is preserved) ---
        { id: 'greedy', label: 'Greedy Algorithms', type: 'basic', details: { 
            description: "A greedy algorithm makes the locally optimal choice at each step, hoping to find the global optimum. It's simple and efficient, but its correctness must be rigorously proven.", 
            exercises: [
                { title: "LeetCode 55: Jump Game", url: "https://leetcode.com/problems/jump-game/description/" },
                { title: "LeetCode 45: Jump Game II", url: "https://leetcode.com/problems/jump-game-ii/description/" },
                { title: "LeetCode 455: Assign Cookies", url: "https://leetcode.com/problems/assign-cookies/description/" }
            ]
        }},
        { id: 'dp_introduction', label: 'Intro to DP (1D DP)', type: 'intermediate', details: {
            description: "Dynamic Programming solves problems by breaking them into overlapping subproblems and storing their solutions to avoid redundant calculations. 1D DP is the foundation, typically using a 1D array to store states.", 
            exercises: [
                { title: 'LeetCode 70: Climbing Stairs', url: 'https://leetcode.com/problems/climbing-stairs/description/' },
                { title: 'LeetCode 198: House Robber', url: 'https://leetcode.com/problems/house-robber/description/' },
                { title: 'LeetCode 322: Coin Change', url: 'https://leetcode.com/problems/coin-change/description/' }
            ]
        }},
        { id: 'dp_knapsack', label: 'Knapsack Problems', type: 'intermediate', details: {
            description: "The Knapsack Problem is a classic DP model. The core idea is to select items to maximize value within a limited capacity. Main variations include 0/1 Knapsack, Unbounded Knapsack, and Multiple Knapsack.",
            exercises: [
                { title: "LeetCode 416: Partition Equal Subset Sum", url: "https://leetcode.com/problems/partition-equal-subset-sum/" },
                { title: "LeetCode 494: Target Sum", url: "https://leetcode.com/problems/target-sum/" }
            ]
        }},
        { id: 'dp_sequence', label: 'Sequence DP', type: 'advanced', details: {
            description: "State transitions performed on a sequence (array/string). Typically, dp[i] represents the optimal solution considering the first 'i' elements.",
            exercises: [
                { title: "LeetCode 300: Longest Increasing Subsequence", url: "https://leetcode.com/problems/longest-increasing-subsequence/" },
                { title: 'LeetCode 1143: Longest Common Subsequence', url: 'https://leetcode.com/problems/longest-common-subsequence/description/' }
            ]
        }},
        { id: 'dp_2d', label: '2D Dynamic Programming', type: 'advanced', details: { 
            description: 'Used when the state needs two dimensions to be defined. Many sequence DP and matrix problems fall into this category.', 
            exercises: [
                { title: 'LeetCode 62: Unique Paths', url: 'https://leetcode.com/problems/unique-paths/description/' },
                { title: 'LeetCode 72: Edit Distance', url: 'https://leetcode.com/problems/edit-distance/description/' }
            ]
        }},

        // +++ NEW NODES +++
        { id: 'divide_and_conquer', label: 'Divide and Conquer', type: 'intermediate', details: {
            description: "A powerful paradigm where a problem is recursively broken down into two or more sub-problems of the same or related type, until these become simple enough to be solved directly. The solutions to the sub-problems are then combined to give a solution to the original problem. Merge Sort and Quick Sort are classic examples.",
            exercises: [
                { title: "LeetCode 215: Kth Largest Element in an Array", url: "https://leetcode.com/problems/kth-largest-element-in-an-array/" },
                { title: "LeetCode 4: Median of Two Sorted Arrays", url: "https://leetcode.com/problems/median-of-two-sorted-arrays/" }
            ]
        }},
        { id: 'randomized_algorithms', label: 'Randomized Algorithms', type: 'intermediate', details: {
            description: "Algorithms that use a degree of randomness as part of their logic. This approach can often yield simpler or more efficient solutions on average, especially for problems that are difficult to solve deterministically. Randomized Quick Sort's pivot selection is a prime example.",
            exercises: [
                { title: "LeetCode 384: Shuffle an Array", url: "https://leetcode.com/problems/shuffle-an-array/" },
                { title: "LeetCode 380: Insert Delete GetRandom O(1)", url: "https://leetcode.com/problems/insert-delete-getrandom-o1/" }
            ]
        }},
        { id: 'string_matching', label: 'Advanced String Matching', type: 'advanced', details: {
            description: "Efficiently finding occurrences of a 'pattern' string within a larger 'text' string. Classic algorithms like KMP (Knuth-Morris-Pratt) use a precomputed table to avoid redundant comparisons, while Rabin-Karp uses hashing to quickly check for potential matches.",
            exercises: [
                { title: "LeetCode 28: Find the Index of the First Occurrence in a String", url: "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/" },
                { title: "LeetCode 1392: Longest Happy Prefix", url: "https://leetcode.com/problems/longest-happy-prefix/" }
            ]
        }},
    ],
    edges: [
        // --- New connecting edges from the root ---
        { from: 'intermediate_algos_root', to: 'math_geometry' },
        { from: 'intermediate_algos_root', to: 'greedy' },
        { from: 'intermediate_algos_root', to: 'divide_and_conquer' },
        { from: 'intermediate_algos_root', to: 'randomized_algorithms' },

        // --- Existing Math Edges ---
        { from: 'math_geometry', to: 'number_theory' },
        { from: 'math_geometry', to: 'combinatorics' },
        { from: 'math_geometry', to: 'bit_manipulation' },
        { from: 'number_theory', to: 'symbolic_computation' },
        
        // --- Existing Greedy/DP Edges ---
        { from: 'greedy', to: 'dp_introduction' },
        { from: 'dp_introduction', to: 'dp_knapsack' },
        { from: 'dp_introduction', to: 'dp_sequence' },
        { from: 'dp_sequence', to: 'dp_2d' },

        // +++ New Edges for the added nodes +++
        { from: 'divide_and_conquer', to: 'string_matching' }, // String matching can be seen as an application
    ]
};