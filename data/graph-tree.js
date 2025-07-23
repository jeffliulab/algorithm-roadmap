if (typeof ROADMAP_DATA === 'undefined') { var ROADMAP_DATA = {}; }

ROADMAP_DATA.graph_tree = {
    nodes: [
        // Root Node: Non Linear Structures (Tree & Graph)
        { id: 'non_linear_structure', label: 'Tree & Graph', type: 'basic', details: { 
                description: `
                Tree and Graph are two important non linear structures. Tree is a special graph.
                `,                 
                exercises: [
                    { title: 'Concept of Tree', url: 'https://jeffliulab.github.io/algorithm-notes/data_structures/#tree' },
                ]
            }
        },
        { id: 'binary_tree_foundations', label: 'Binary Tree', type: 'basic', details: { 
                description: `
                The foundational skills of binary tree.
                `,                 
                exercises: [
                    { title: 'LeetCode 226: Invert Binary Tree', url: 'https://leetcode.com/problems/invert-binary-tree/description/' },
                    { title: 'LeetCode 104: Maximum Depth of Binary Tree', url: 'https://leetcode.com/problems/maximum-depth-of-binary-tree/description/' },
                    { title: 'LeetCode 662: Maximum Width of Binary Tree', url: 'https://leetcode.com/problems/maximum-width-of-binary-tree/description/' },
                    { title: 'LeetCode 543: Diameter of Binary Tree', url: 'https://leetcode.com/problems/diameter-of-binary-tree/description/' },
                    { title: 'LeetCode 110: Balanced Binary Tree', url: 'https://leetcode.com/problems/balanced-binary-tree/description/' },
                    { title: 'LeetCode 100: Same Tree', url: 'https://leetcode.com/problems/same-tree/description/' },
                    { title: 'LeetCode 572: Subtree of Another Tree', url: 'https://leetcode.com/problems/subtree-of-another-tree/description/' },
                    { title: 'LeetCode 102: Binary Tree Level Order Traversal', url: 'https://leetcode.com/problems/binary-tree-level-order-traversal/description/' },
                ]
            }
        },
        { id: 'binary_tree_intermediate', label: 'Binary Tree Intermediate', type: 'intermediate', details: { 
                description: `
                The intermediate skills of binary tree.
                `,                 
                exercises: [
                    { title: 'LeetCode 199: Binary Tree Right Side View', url: 'https://leetcode.com/problems/binary-tree-right-side-view/description/' },
                    { title: 'LeetCode 105: Construct Binary Tree from Preorder and Inorder Traversal', url: 'https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/' },
                    { title: 'LeetCode 124: Binary Tree Maximum Path Sum', url: 'https://leetcode.com/problems/binary-tree-maximum-path-sum/description/' },
                    { title: 'LeetCode 297: Serialize and Deserialize Binary Tree', url: 'https://leetcode.com/problems/serialize-and-deserialize-binary-tree/description/' },
                ]
            }
        },
        { id: 'bst', label: 'Binary Search Tree', type: 'basic', details: { 
                description: `
                The foundational skills of binary search tree.
                `,                 
                exercises: [
                    { title: 'LeetCode 700: Search in a Binary Search Tree', url: 'https://leetcode.com/problems/search-in-a-binary-search-tree/description/' },
                    { title: 'LeetCode 701: Insert into a Binary Search Tree', url: 'https://leetcode.com/problems/insert-into-a-binary-search-tree/description/' },
                    { title: 'LeetCode 450: Delete Node in a BST', url: 'https://leetcode.com/problems/delete-node-in-a-bst/description/' },
                    { title: 'LeetCode 235: Lowest Common Ancestor of a Binary Search Tree', url: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/description/' },
                    { title: 'LeetCode 98: Validate Binary Search Tree', url: 'https://leetcode.com/problems/validate-binary-search-tree/description/' },
                    { title: 'LeetCode 230: Kth Smallest Element in a BST', url: 'https://leetcode.com/problems/kth-smallest-element-in-a-bst/description/' },
                ]
            }
        },
        { id: 'heap', label: 'Heap / Priority Queue', type: 'basic', details: { 
                description: `
                The foundational skills of heap.
                `,                 
                exercises: [
                    { title: 'LeetCode 215: Kth Largest Element in an Array', url: 'https://leetcode.com/problems/kth-largest-element-in-an-array/description/' },
                ]
            }
        },
        { id: 'example', label: 'example', type: 'basic', details: { 
                description: `.....
                `,                 
                exercises: [
                    { title: 'example', url: 'example' },
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
    ],
    edges: [
        { from: 'non_linear_structure', to: 'binary_tree_foundations' }, 
        { from: 'binary_tree_foundations', to: 'binary_tree_intermediate' }, 
        { from: 'binary_tree_foundations', to: 'bst' }, 
        { from: 'non_linear_structure', to: 'heap' }, 
    ]
};