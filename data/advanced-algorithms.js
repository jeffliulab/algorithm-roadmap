if (typeof ROADMAP_DATA === 'undefined') { var ROADMAP_DATA = {}; }

ROADMAP_DATA.advanced_algorithms = {
    nodes: [

// 第K小的字典序/子字符串题目

// 高级算法：

// KMP, Rabin-Karp, 后缀树

// Ford-Fulkerson, Edmonds-Karp, Dinic, Push-Relabel

// Residual Graph

// Augmenting Path 增广路径

// Min-Cut 最小割

        // navi: kmp
        { id: 'advanced_search', label: 'Advanced Search', type: 'foundation', details: { 
            description: `
            waiting for update...
            `}
        },


        // navi: kmp
        { id: 'kmp', label: 'KMP Algorithm', type: 'intermediate', details: { 
            description: `
            waiting for update...
            `, exercises: [

                // leetcode: 28.   459.    1392.    214.    686.


                { title: "example", url: "example" 
                },
                { title: "example", url: "example"   
                },
            ]}
        },






    ],
    edges: [
        { from: 'advanced_search', to: 'kmp' },

    ]
};