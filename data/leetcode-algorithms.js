if (typeof ROADMAP_DATA === 'undefined') { var ROADMAP_DATA = {}; }

ROADMAP_DATA.leetcode_others = {
    nodes: [
        { id: 'greedy', label: 'Greedy Algorithms', type: 'basic', details: { 
            description: "A greedy algorithm makes the locally optimal choice at each step, hoping to find the global optimum. It's simple and efficient, but its correctness must be rigorously proven.", 
            exercises: [
                { title: "LeetCode 55: Jump Game", url: "https://leetcode.com/problems/jump-game/description/" },
                { title: "LeetCode 45: Jump Game II", url: "https://leetcode.com/problems/jump-game-ii/description/" },
            ]
        }},
        { id: '1d_dp', label: '1D Dynamic Programming', type: 'basic', details: { 
            description: `
            Greedy doesn't consider the future situations. If we need consider future and past situations, we need use dynamic programming.
            `, 
            exercises: [
                { title: "LeetCode ...", url: "aaaaa" },
            ]
        }},
        { id: 'symbolic_computation', label: 'Symbolic Computation', type: 'advanced', details: { 
            description: 'The manipulation of mathematical expressions in symbolic form, rather than by their numeric value. This often involves complex parsing and recursion.', 
            exercises: [
                { title: 'LeetCode 736: Parse Lisp Expression', url: 'https://leetcode.com/problems/parse-lisp-expression/description/' }, 
                { title: 'LeetCode 770: Basic Calculator IV', url: 'https://leetcode.com/problems/basic-calculator-iv/description/' }
            ]
        }},


    ],
    edges: [
        // --- New connecting edges from the root ---
        { from: 'greedy', to: '1d_dp' },
    ]
};