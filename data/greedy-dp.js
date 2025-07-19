if (typeof ROADMAP_DATA === 'undefined') { var ROADMAP_DATA = {}; }

ROADMAP_DATA.greedy_dp = {
    nodes: [
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
    ],
    edges: [
        { from: 'greedy', to: 'dp_introduction' },
        { from: 'dp_introduction', to: 'dp_knapsack' },
        { from: 'dp_introduction', to: 'dp_sequence' },
        { from: 'dp_sequence', to: 'dp_2d' }
    ]
};