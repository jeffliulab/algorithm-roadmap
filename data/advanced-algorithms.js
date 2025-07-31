if (typeof ROADMAP_DATA === 'undefined') { var ROADMAP_DATA = {}; }

ROADMAP_DATA.advanced_algorithms = {
    nodes: [
        // --- Branch 1: Advanced Graph Algorithms ---
        { id: 'mst', label: 'Minimum Spanning Tree (MST)', type: 'intermediate', details: {
            description: "Finds a subset of the edges of a connected, edge-weighted undirected graph that connects all the vertices together, without any cycles and with the minimum possible total edge weight. Classic algorithms are Kruskal's (greedy) and Prim's (builds from a single vertex).",
            exercises: [{ title: "CP-Algorithms: Minimum Spanning Tree", url: "https://cp-algorithms.com/graph/mst_kruskal.html" }]
        }},
        
第K小的字典序/子字符串题目





高级算法：

KMP, Rabin-Karp, 后缀树

Ford-Fulkerson, Edmonds-Karp, Dinic, Push-Relabel

Residual Graph

Augmenting Path 增广路径

Min-Cut 最小割



    ],
    edges: [
        { from: 'adv_algos_root', to: 'mst' },
    ]
};