if (typeof ROADMAP_DATA === 'undefined') { var ROADMAP_DATA = {}; }

ROADMAP_DATA.stack_recursion = {
    nodes: [
        { id: 'stack', label: 'Stack', type: 'basic', details: { description: 'A stack is a Last-In-First-Out (LIFO) data structure.', exercises: [{ title: 'LeetCode 20: Valid Parentheses', url: 'https://leetcode.com/problems/valid-parentheses/description/' }, { title: 'LeetCode 150: Evaluate Reverse Polish Notation', url: 'https://leetcode.com/problems/evaluate-reverse-polish-notation/description/' }]}},
        { id: 'stack_enhanced_stack', label: 'Enhanced Stack', type: 'basic', details: { description: 'Discover how auxiliary stacks and augmented nodes turn simple stacks into problem-solving machines.', exercises: [{ title: 'LeetCode 155: Min Stack', url: 'https://leetcode.com/problems/min-stack/description/' }]}},
        { id: 'stack_monotonic_stack', label: 'Monotonic Stack', type: 'basic', details: { description: 'A stack that maintains a monotonic order of elements.', exercises: [{ title: 'LeetCode 739: Daily Temperatures', url: 'https://leetcode.com/problems/daily-temperatures/description/' }, { title: 'LeetCode 853: Car Fleet', url: 'https://leetcode.com/problems/car-fleet/description/' }]}},
        { id: 'stack_problem_largest_rectangle', label: 'Largest Rectangle Problem', type: 'intermediate', details: { description: 'A classic application of the monotonic stack.', exercises: [{ title: 'LeetCode 84: Largest Rectangle in Histogram', url: 'https://leetcode.com/problems/largest-rectangle-in-histogram/' }]}},
        { id: 'stack_basic_calculator', label: 'Basic Calculator Problem', type: 'intermediate', details: { description: 'Use stacks to parse and evaluate mathematical expressions.', exercises: [{ title: 'LeetCode 224: Basic Calculator', url: 'https://leetcode.com/problems/basic-calculator/description/' }, { title: 'LeetCode 227: Basic Calculator II', url: 'https://leetcode.com/problems/basic-calculator-ii/description/' }]}},
        { id: 'recursion', label: 'Recursion', type: 'basic', details: { description: "Recursion is a function that calls itself. Its execution is managed by the call stack.", exercises: [{ title: "The concept of recursion:", url: "https://example.com" }]}},
        { id: 'backtracking', label: 'Backtracking', type: 'basic', details: { description: 'Backtracking is an algorithmic paradigm for solving problems recursively by trying to build a solution incrementally.', exercises: [{ title: 'LeetCode 78: Subsets', url: 'https://leetcode.com/problems/subsets/description/' }, { title: 'LeetCode 46: Permutations', url: 'https://leetcode.com/problems/permutations/description/' }]}},
        { id: 'permutations_combinations', label: 'Permutations & Combinations', type: 'basic', details: { description: "Classic problems solved with backtracking.", exercises: [{ title: "LeetCode 47: Permutations II", url: "https://leetcode.com/problems/permutations-ii/description/" }, { title: "LeetCode 90: Subsets II", url: "https://leetcode.com/problems/subsets-ii/description/" }, { title: "LeetCode 39: Combination Sum", url: "https://leetcode.com/problems/combination-sum/description/" }]}},
    ],
    edges: [
        { from: 'stack', to: 'stack_enhanced_stack' },
        { from: 'stack_enhanced_stack', to: 'stack_monotonic_stack' },
        { from: 'stack_monotonic_stack', to: 'stack_problem_largest_rectangle' },
        { from: 'stack', to: 'stack_basic_calculator' },
        { from: 'stack', to: 'recursion' },
        { from: 'recursion', to: 'backtracking' },
        { from: 'backtracking', to: 'permutations_combinations' },
    ]
};