if (typeof ROADMAP_DATA === 'undefined') { var ROADMAP_DATA = {}; }

ROADMAP_DATA.graph_tree = {
    nodes: [
        { id: 'graph', label: 'Graph', type: 'basic', details: { description: 'A graph is a data structure consisting of nodes and edges.', exercises: [{ title: 'LeetCode 133: Clone Graph', url: 'https://leetcode.com/problems/clone-graph/description/' }]}},
        { id: 'dfs', label: 'Depth-First Search (DFS)', type: 'basic', details: { description: "DFS explores as far as possible along each branch before backtracking.", exercises: [{ title: "LeetCode 200: Number of Islands", url: "https://leetcode.com/problems/number-of-islands/description/" }]}},
        { id: 'bfs', label: 'Breadth-First Search (BFS)', type: 'basic', details: { description: "BFS explores level by level using a queue.", exercises: [{ title: "LeetCode 994: Rotting Oranges", url: "https://leetcode.com/problems/rotting-oranges/description/" }]}},
        { id: 'queue', label: 'Queue and Deque', type: 'basic', details: { description: 'A queue is a First-In-First-Out (FIFO) data structure, essential for BFS.', exercises: [{ title: 'LeetCode 102: Binary Tree Level Order Traversal', url: 'https://leetcode.com/problems/binary-tree-level-order-traversal/description/' }]}},
        { id: 'tree', label: 'Tree', type: 'basic', details: { description: 'A tree is a special type of graph that is connected and has no cycles.', exercises: [{ title: 'LeetCode ?', url: 'https://example.com' }]}},
        { id: 'tree_binary_tree', label: 'Binary Tree', type: 'basic', details: { description: 'A tree where each node has at most two children.', exercises: [{ title: 'LeetCode ?', url: 'https://example.com' }]}},
        { id: 'heap', label: 'Heap / Priority Queue', type: 'basic', details: { description: 'A specialized tree-based data structure that satisfies the heap property.', exercises: [{ title: 'LeetCode ?', url: 'https://example.com' }]}},
        { id: 'trie', label: 'Trie (Prefix Tree)', type: 'basic', details: { description: 'A tree-like data structure for efficiently storing and retrieving keys in a set of strings.', exercises: [{ title: 'LeetCode 208: Implement Trie (Prefix Tree)', url: 'https://leetcode.com/problems/implement-trie-prefix-tree/description/' }, { title: 'LeetCode 212: Word Search II', url: 'https://leetcode.com/problems/word-search-ii/description/' }]}},
        { id: 'advanced_graphs', label: 'Advanced Graphs', type: 'intermediate', details: { description: "Algorithms for weighted graphs and complex dependency problems.", exercises: [{ title: "LeetCode 207: Course Schedule", url: "https://leetcode.com/problems/course-schedule/description/" }, { title: "LeetCode 743: Network Delay Time", url: "https://leetcode.com/problems/network-delay-time/description/" }]}},
        { id: 'dijkstra', label: 'Dijkstra', type: 'intermediate', details: { description: "An algorithm for finding the shortest paths in a weighted graph.", exercises: [{ title: "LeetCode 1584: Min Cost to Connect All Points", url: "https://leetcode.com/problems/min-cost-to-connect-all-points/description/" }]}},
        { id: 'branch_and_bound', label: 'Branch and Bound', type: 'advanced', details: { description: 'An algorithm design paradigm for combinatorial optimization problems, often used in graph search.', exercises: [{ title: "LeetCode 1723: Find Minimum Time to Finish All Jobs", url: "https://leetcode.com/problems/find-minimum-time-to-finish-all-jobs/description/" }]}},
    ],
    edges: [
        { from: 'graph', to: 'dfs' }, { from: 'graph', to: 'bfs' }, { from: 'bfs', to: 'queue' },
        { from: 'graph', to: 'tree' }, { from: 'tree', to: 'tree_binary_tree' },
        { from: 'tree_binary_tree', to: 'heap' }, { from: 'tree', to: 'trie' },
        { from: 'graph', to: 'advanced_graphs' }, { from: 'advanced_graphs', to: 'dijkstra' },
        { from: 'advanced_graphs', to: 'branch_and_bound' },
    ]
};