if (typeof ROADMAP_DATA === 'undefined') { var ROADMAP_DATA = {}; }

ROADMAP_DATA.math = {
    nodes: [
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
    ],
    edges: [
        { from: 'math_geometry', to: 'number_theory' },
        { from: 'math_geometry', to: 'combinatorics' },
        { from: 'math_geometry', to: 'bit_manipulation' },
        { from: 'number_theory', to: 'symbolic_computation' }
    ]
};