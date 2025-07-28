if (typeof ROADMAP_DATA === 'undefined') { var ROADMAP_DATA = {}; }

// Non Linear Structures (Tree & Graph)

ROADMAP_DATA.graph_tree = {
    nodes: [
        // Matrix     | navi: matrix   | navi:matrix
        { id: 'matrix', label: 'Matrix', type: 'foundation', details: { description: "Matrix problems involve traversing or modifying a 2D grid.", exercises: [{ title: "LeetCode 54: Spiral Matrix", url: "https://leetcode.com/problems/spiral-matrix/" }, { title: "LeetCode 48: Rotate Image", url: "https://leetcode.com/problems/rotate-image/" }, { title: "LeetCode 73: Set Matrix Zeroes", url: "https://leetcode.com/problems/set-matrix-zeroes/" }]}
        },
        // Tree | navi: tree | navi:tree
        { id: 'tree', label: 'Tree', type: 'foundation', details: { 
                description: `
                Tree and Graph are two important non linear structures. Tree is a special graph.
                `,                 
                exercises: [
                    { title: 'Concept of Tree', url: 'https://jeffliulab.github.io/algorithm-notes/data_structures/#tree' },
                ]
            }
        },
        { id: 'binary_tree_foundations', label: 'Binary Tree', type: 'foundation', details: { 
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
        { id: 'binary_tree_intermediate', label: 'Binary Tree Intermediate', type: 'basic', details: { 
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
        // Heap  | navi: heap  | navi:heap
        { id: 'heap', label: 'Heap / Priority Queue', type: 'foundation', details: { 
                description: `
                The heap is mainly used to solve the Kth Largest Problem. For heaps, you need to master:
                <br><strong>(1)heapq</strong>: The usage of heapq in python, it is enough for most interviews.
                <br><strong>(2)implement a heap</strong>: Know how to implement a heap, especially sift up and sift down.
                `,                 
                exercises: [
                    { title: 'Use heapq in python', 
                        key_point: {
                            label: 'Concepts', // 这是自定义的按钮名称
                            content: `
                                <br>(1)Import heapq: (min-heap)
                                <br><code>import heapq</code>
                                <br>
                                <br>(2) Create a min-heap (max-heap just append negative one)
                                <br><code>
                                    nums = [5, 1, 8, 3]<br>
                                    heapq.heapify(nums)<br>
                                    smallest_num = heapq.heappop(nums)<br>
                                    heapq.heappush(nums, value)    
                                </code>
                                <br>
                                <br>(3) Kth Largest Elements
                                <br><code>
                                    top3 = heapq.nlargest(3, nums)<br>
                                    # top3 is a list
                                </code>
                                <br>
                                <br>(4) Kth Smallest Elements
                                <br><code>
                                    bottom3 = heapq.nsmallest(3, nums)
                                </code>
                                <br>
                                <br>(5) Find Frequency Largest Elements
                                <br><code>
                                    data = [("a", 3), ...]<br>
                                    top2 = heapq.nlargest(2, data, key = lambda x: x[1])
                                </code>
                                <br>
                           
                            `
                        },
                    },
                    { title: 'LeetCode 215: Kth Largest Element in an Array', url: 'https://leetcode.com/problems/kth-largest-element-in-an-array/description/' ,
                        key_point: {
                            label: 'Hint', // 这是自定义的按钮名称
                            content: `
                                This question can be solved both by heap and quick select.
                                <br> The heap use O(NlogK), which is better than sorting's O(NlogN).
                            `
                        },
                    },
                    { title: 'LeetCode 703: Kth Largest Element in a Stream', url: 'https://leetcode.com/problems/kth-largest-element-in-a-stream/description/' },
                    { title: 'LeetCode 1046: Last Stone Weight', url: 'https://leetcode.com/problems/last-stone-weight/description/', },
                    { title: 'LeetCode 973: K Closest Points to Origin', url: 'https://leetcode.com/problems/k-closest-points-to-origin/description/', },
                ]
            }
        },
        // task scheduler | navi: task scheduler  | navi: frequency based scheduling problems
        { id: 'task_scheduler', label: 'Frequency-based Scheduling Problems', type: 'intermediate', details: { 
                description: `
                Use 621 as an example, this kind of problems adds a cooling mechanism (interval).
                This cooling mechanism introduces the concepts of time and state transition. 
                For details, see the explanation of the question. This type of question can be solved using heap.
                <br><strong>※ Solution strategy: <code>Max Heap + Cooling Queue + Time Step</code></strong>
                `,                 
                exercises: [
                    { title: 'LeetCode 621: Task Scheduler', 
                        url: 'https://leetcode.com/problems/task-scheduler/',
                        key_point: {
                            label: 'Hint', // 这是自定义的按钮名称
                            content: `
                                This question can be solved by heap or mathmatical greedy.
                                <br> The heap solution is recommended since it is more generalized.
                                <br> For those who handle heap proficiently, can learn mathmatical greedy solution.
                           
                            `
                        },
                    },
                ]
            }
        },
        // graph  | navi: graph  | navi:graph
        { id: 'graph', label: 'Graph', type: 'foundation', details: { 
                description: `Graph foundations:
                <br>(1) Graph properties: Vetex, Edges
                <br>(2) Graph representation: Adjacency Matrix, Adjacency List
                <br>(3) Graph traversal: BFS/DFS
                `,                 
                exercises: [
                    { title: 'LeetCode 200: number of island', url: 'https://leetcode.com/problems/number-of-islands/description/', },
                    { title: 'LeetCode 695: max area of island', url: 'https://leetcode.com/problems/max-area-of-island/description/', },
                    { title: 'LeetCode 1091: shortest path in binary matrix', url: 'https://leetcode.com/problems/shortest-path-in-binary-matrix/description/', },
                    { title: 'LeetCode 994: rotting oranges', url: 'https://leetcode.com/problems/rotting-oranges/description/', },
                    { title: 'LeetCode 133: Clone Graph', url: 'https://leetcode.com/problems/clone-graph/description/', },
                    
                ]
            }
        },
        // Topological Sort | navi: topological sort | navi: topo sort
        { id: 'topological_sort', label: 'Topological Sort', type: 'basic', details: { 
                description: `DAG & Topological Sort, normally use Kahn's Algorithm.
                `,                 
                exercises: [
                    { title: 'LeetCode 207: Course Schedule', 
                        url: 'https://leetcode.com/problems/course-schedule/description/',
                        key_point: {
                            label: 'Hint', 
                            content: `
                                You can use BFS or DFS to solve this problem.
                                <br> BFS (Kahn's Algorithm) is recommended.
                            `
                        },
                    },
                    { title: 'LeetCode 210: Course Schedule II', 
                        url: 'https://leetcode.com/problems/course-schedule-ii/description/',
                        key_point: {
                            label: 'Hint', 
                            content: `
                                Kahn's Algorithm.
                            `
                        },
                    },
                    { title: 'LeetCode 269: Alien Dictionary', 
                        url: 'https://leetcode.com/problems/alien-dictionary/',
                        key_point: {
                            label: 'Hint', 
                            content: `
                                The hard point on this question is the manipulating of string.
                                Extracting essential information from neighbor words are the key.
                                DAG + Topological Sort for the main part.
                            `
                        },
                    },
                ]
            }
        },
        // Transitive Closure   | navi: transitive closure   | navi: floyd warshall algorithm
        { id: 'transitive_closure', label: 'Transitive Closure', type: 'intermediate', details: { 
                description: `
                The Transitive Closure problem is to find the set of all ordered pairsof vertices (u, v) such that there is a path of one or more edges from vertex u to vertex v.
                <br>There are two common algorithms to solve this problem:
                <br><strong>(1) Floyd-Warshall Algorithm</strong>: This algorithm has a time complexity of O(N^3), where N is the number of vertices. It is often the best choice when N is relatively small.
                <br><strong>(2) Graph Traversal for Each Node</strong>: Graph Traversal for Each Node: This approach involves performing a graph traversal (such as BFS or DFS) starting from each vertex in the graph. The total time complexity is O(N∗(N+E)). This method can be faster than the Floyd-Warshall algorithm for very sparse graphs.
                `,                 
                exercises: [
                    { title: 'LeetCode 1462: Course Schedule IV', 
                        url: 'https://leetcode.com/problems/course-schedule-iv/',
                    },
                ]
            }
        },
        // Merge K Ways   | navi: merge k sorted lists | navi: merge k ways
        { id: 'merge_k_ways', label: 'Merge K Ways', type: 'basic', details: { 
                description: `
                Merge K ways, or merge K sorted lists, is different from normal heap. In a normal heap problem, if you want to find a Kth smallest element, you need to maintain a K max-heap. But if the lists are already sorted, you don't need to traverse all the elements, and you only need to maintain a <strong>min-heap to always get the smallest element</strong>.
                <br>The steps includes: (Assume it is to find Kth Smallest)
                <br>(1) Find the smallest element, push into heap
                <br>(2) Traverse, always get the smallest one.
                <br>(3) Put this smallest one's neighbors into heap. Note: think of the sequence of the tuple.
                <br>(4) If the element has already visited, skip it. Note: usally use a visited set.
                `,                 
                exercises: [
                    { title: 'LeetCode 373:Kth Smallest Element in a Sorted Matrix', 
                        url: 'https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/description/',
                        key_point: {
                            label: 'Hint', 
                            content: `
                                (1) Get the smallest one.
                                <br>(2) Push its neighbors into result. Check if its neighbor is valid (not over boundry or be visited)
                                <br>(3) Do this K times.
                                <br><br><strong>Note: This is not the best solution. Can you find a solution using O(1) space and O(N) time?</strong>
                            `
                        },
                    },
                    { title: 'LeetCode 23: Merge K Sorted Lists', 
                        url: 'https://leetcode.com/problems/merge-k-sorted-lists/description/',
                        key_point: {
                            label: 'Key Points', 
                            content: `
                               This problem can be solved both by heap or divde & conquer.
                               <br>(1) Get all head nodes, make tuple and push into heap.
                               <br>(2) Traverse, always get the min tuple. Put it in the result list.
                               <br>(3) Find the min node's neighbor, push into heap.
                               <br>(4) Until there is no element in the heap, finished.
                            `
                        },
                    },
                    { title: 'LeetCode 378: Kth Smallest Element in a Sorted Matrix', 
                        url: 'https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/description/',
                        key_point: {
                            label: 'Hint', 
                            content: `
                               The smallest one must be matrix[0][0], and smaller one would be its neighbor. O(K) memory and O(KlogK) time.
                            `
                        },
                    },
                    { title: 'LeetCode 786: K-th Smallest Prime Fraction', 
                        url: 'https://leetcode.com/problems/k-th-smallest-prime-fraction/description/',
                        key_point: {
                            label: 'Hint', 
                            content: `
                               This is just another example of merge k ways problem.
                            `
                        },
                    },
                    { title: 'LeetCode 632: Smallest Range Covering Elements from K Lists', 
                        url: 'https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/description/',
                        key_point: {
                            label: 'Solution', 
                            content: `
                               This problem is a little bit harder than previous ones.
                               <br>
                               <br><strong>Solution:</strong>
                               <br><strong>1. Pre-Processing:</strong>
                               <br>(1) Find smallest one in each way (row) and push into heap
                               <br>(2) Record the maximum value of the heap
                               <br>(3) Record the valid range as result: [c, d]
                               <br><strong>2. Main Loop: while heap</strong>
                               <br>(1) Pop heap top, push top's neighbor
                               <br>(2) Update the maximum value of the heap
                               <br>(3) Get the new range: [a, b]
                               <br>(4) Compare [a, b] and [c, d], update result if necessary.
                               <br><strong>3. Exit the Loop:</strong>
                               <br>(※) If the neighbor doesn't exist, we need break the main loop. Because we cannot continue searching possible values if one way is finished searching.

                            `
                        },
                    },
                ]
            }
        }, 
        { id: 'dag', label: 'Unweighted DAG', type: 'foundation', details: { description: '.....', }},
        { id: 'weighted_undirected_graph', label: 'Weighted Undirected Graph & MST', type: 'foundation', details: { description: '.....', }},
        { id: 'weighted_directed_graph', label: 'Weighted Directed Graph', type: 'foundation', details: { description: '.....', }},

        // example (template)
        // { id: 'example', label: 'example', type: 'basic', details: { 
        //         description: `.....
        //         `,                 
        //         exercises: [
        //             { title: 'LeetCode example', url: 'example', },
        //             { title: 'LeetCode 33: Search in Rotated Sorted Array', 
        //                 url: 'https://leetcode.com/problems/search-in-rotated-sorted-array/description/',
        //                 key_point: {
        //                     label: 'Key Point (CN)', // 这是自定义的按钮名称
        //                     content: `
        //                         .....
                           
        //                     `
        //                 },
        //             },
        //         ]
        //     }
        // },
        //....end...
    ],
    edges: [




        // Main Study Branch
        { from: 'matrix', to: 'transitive_closure'},
        { from: 'graph', to: 'tree'},
        { from: 'tree', to: 'binary_tree_foundations' }, 
        { from: 'binary_tree_foundations', to: 'heap' }, 

        // graph
        { from: 'graph', to: 'dag'},
        { from: 'dag', to: 'topological_sort'},
        { from: 'topological_sort', to: 'transitive_closure'},
        { from: 'dag', to: 'weighted_undirected_graph'},
        { from: 'weighted_undirected_graph', to: 'weighted_directed_graph'},

        // binary tree
        { from: 'binary_tree_foundations', to: 'binary_tree_intermediate' }, 
        { from: 'binary_tree_foundations', to: 'bst' }, 

        // heap
        { from: 'heap', to: 'merge_k_ways'},
        { from: 'merge_k_ways', to: 'task_scheduler'},

    ]
};