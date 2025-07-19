if (typeof ROADMAP_DATA === 'undefined') { var ROADMAP_DATA = {}; }

ROADMAP_DATA.advanced_algorithms = {
    nodes: [
        { id: 'adv_algos_root', label: 'Advanced Algorithms & Competitive Programming', type: 'basic', details: {
            description: "This section covers the core topics found in graduate-level algorithm courses and high-level competitive programming. It focuses on specific, powerful techniques for solving complex problems efficiently.",
        }},
        
        // --- Branch 1: Advanced Graph Algorithms ---
        { id: 'mst', label: 'Minimum Spanning Tree (MST)', type: 'intermediate', details: {
            description: "Finds a subset of the edges of a connected, edge-weighted undirected graph that connects all the vertices together, without any cycles and with the minimum possible total edge weight. Classic algorithms are Kruskal's (greedy) and Prim's (builds from a single vertex).",
            exercises: [{ title: "CP-Algorithms: Minimum Spanning Tree", url: "https://cp-algorithms.com/graph/mst_kruskal.html" }]
        }},
        { id: 'shortest_path_adv', label: 'Shortest Path (Advanced)', type: 'intermediate', details: {
            description: "Beyond Dijkstra. The Bellman-Ford algorithm handles graphs with negative edge weights. The Floyd-Warshall algorithm finds all-pairs shortest paths in O(V^3), a classic example of dynamic programming on graphs.",
            exercises: [
                { title: "CP-Algorithms: Bellman-Ford & Floyd-Warshall", url: "https://cp-algorithms.com/graph/all-pairs-shortest-path.html" }
            ]
        }},
        { id: 'scc_tarjan', label: 'Strongly Connected Components (SCC)', type: 'advanced', details: {
            description: "In a directed graph, an SCC is a maximal subgraph where for every pair of vertices u, v, there is a path from u to v and a path from v to u. Tarjan's algorithm and Kosaraju's algorithm can find all SCCs in linear time.",
            exercises: [{ title: "TopCoder: Strongly Connected Components", url: "https://www.topcoder.com/thrive/articles/strongly-connected-components" }]
        }},
        { id: 'flow_networks', label: 'Flow Networks & Max Flow', type: 'advanced', details: {
            description: "A powerful graph paradigm for modeling problems of flow. The max-flow min-cut theorem is a cornerstone, with algorithms like Edmonds-Karp used to find the maximum flow.",
            exercises: [{ title: "CLRS, Chapter 26: Maximum Flow", url: "https://www.cs.bham.ac.uk/~brp/courses/year3/alg-w/2018/lecture-notes/lecture12.pdf" }]
        }},

        // --- Branch 2: Advanced Dynamic Programming ---
        { id: 'dp_advanced', label: 'Advanced DP Techniques', type: 'advanced', details: {
            description: "Going beyond basic DP. State Compression DP uses bitmasks to represent sets. Tree DP solves problems on trees by computing values for a node based on its children. Interval DP solves problems by combining solutions for smaller intervals.",
            exercises: [
                { title: "TopCoder: A guide to dynamic programming", url: "https://www.topcoder.com/thrive/articles/a-brief-introduction-to-dynamic-programming" },
                { title: "CP-Algorithms: DP on Trees", url: "https://cp-algorithms.com/dynamic_programming/tree_dp.html" }
            ]
        }},
        { id: 'prob_dp', label: 'Probabilistic & Expectation DP', type: 'advanced', details: {
            description: "A specialized form of DP used to calculate expected values or probabilities in problems involving random events. The state transition often involves summing up probabilities of future states.",
            exercises: [{ title: "Codeforces: A Tutorial on Expectation DP", url: "https://codeforces.com/blog/entry/62690" }]
        }},

        // --- Branch 3: Advanced Data Structures ---
        { id: 'segment_tree', label: 'Segment Tree', type: 'advanced', details: {
            description: "A tree-based data structure for storing information about intervals or segments. It allows for efficient querying (e.g., sum, min, max) and updating on an array segment in O(log n) time.",
            exercises: [{ title: "CP-Algorithms: Segment Tree", url: "https://cp-algorithms.com/data_structures/segment_tree.html" }]
        }},
        { id: 'fenwick_tree', label: 'Fenwick Tree (BIT)', type: 'advanced', details: {
            description: "A data structure that can efficiently update elements and calculate prefix sums in a table of numbers. It is often simpler to code and more space-efficient than a segment tree for prefix sum problems.",
            exercises: [{ title: "TopCoder: Binary Indexed Trees", url: "https://www.topcoder.com/thrive/articles/binary-indexed-trees" }]
        }},
        { id: 'persistent_ds', label: 'Persistent Data Structures', type: 'advanced', details: {
            description: "A data structure that preserves its previous versions when it is modified. Each update creates a new version while keeping the old one accessible, effectively allowing you to query the history of the data structure. This is often achieved with path copying.",
            exercises: [{ title: "An Introduction to Persistent Data Structures", url: "https://www.geeksforgeeks.org/introduction-to-persistent-data-structures/" }]
        }},

        // --- Branch 4: Computational Mathematics ---
        { id: 'fft', label: 'Fast Fourier Transform (FFT)', type: 'advanced', details: {
            description: "An algorithm to compute the Discrete Fourier Transform (DFT) in O(n log n) time. Used in signal processing and for fast multiplication of large polynomials and integers.",
            exercises: [{ title: "CP-Algorithms: Fourier Transform", url: "https://cp-algorithms.com/algebra/fft.html" }]
        }},
        { id: 'matrix_expo', label: 'Matrix Exponentiation', type: 'advanced', details: {
            description: "A technique to quickly compute the n-th power of a matrix. It is extremely useful for solving linear recurrence relations (like Fibonacci) in O(k^3 log n) time, where k is the size of the matrix.",
            exercises: [{ title: "CP-Algorithms: Matrix Exponentiation", url: "https://cp-algorithms.com/algebra/binary-exp.html#matrix-exponentiation" }]
        }},

        // --- Branch 5: Specialized Techniques ---
        { id: 'mo_algorithm', label: "Mo's Algorithm", type: 'advanced', details: {
            description: "An offline algorithm for answering range queries. It works by reordering the queries in a specific way (based on block decomposition) and then processing them sequentially, achieving a typical complexity of O((N+Q)√N).",
            exercises: [{ title: "CP-Algorithms: Mo's Algorithm", url: "https://cp-algorithms.com/data_structures/sqrt_decomposition.html#mo-s-algorithm" }]
        }},

        // --- Branch 6: Computational Theory ---
        { id: 'complexity_theory', label: 'Complexity Theory (P vs NP)', type: 'advanced', details: {
            description: "The study of what makes problems computationally hard, defining classes like P and NP. Understanding NP-Completeness is crucial for recognizing intractable problems.",
            exercises: [{ title: "CLRS, Chapter 34: NP-Completeness", url: "https://www.wisdom.weizmann.ac.il/~oded/toc34.html" }]
        }},
        { id: 'approx_algorithms', label: 'Approximation Algorithms', type: 'advanced', details: {
            description: "When a problem is NP-hard, these algorithms guarantee a solution that is within a certain factor of the optimal one.",
            exercises: [{ title: "CLRS, Chapter 35: Approximation Algorithms", url: "http://moncs.cs.mcgill.ca/people/avis/courses/507/book/ch12.pdf" }]
        }},
    ],
    edges: [
        { from: 'adv_algos_root', to: 'mst' },
        { from: 'mst', to: 'shortest_path_adv' },
        { from: 'shortest_path_adv', to: 'scc_tarjan' },
        { from: 'scc_tarjan', to: 'flow_networks' },

        { from: 'adv_algos_root', to: 'dp_advanced' },
        { from: 'dp_advanced', to: 'prob_dp' },
        
        { from: 'adv_algos_root', to: 'segment_tree' },
        { from: 'segment_tree', to: 'fenwick_tree' },
        { from: 'fenwick_tree', to: 'persistent_ds' },

        { from: 'adv_algos_root', to: 'fft' },
        { from: 'fft', to: 'matrix_expo' },

        { from: 'adv_algos_root', to: 'mo_algorithm' },

        { from: 'adv_algos_root', to: 'complexity_theory' },
        { from: 'complexity_theory', to: 'approx_algorithms' }
    ]
};