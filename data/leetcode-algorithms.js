if (typeof ROADMAP_DATA === 'undefined') { var ROADMAP_DATA = {}; }

ROADMAP_DATA.leetcode_others = {
    nodes: [
        { id: 'math', label: 'Math', type: 'basic', details: { 
                description: `
                The foundational skills of binary search tree.
                `,                 
                exercises: [
                    { title: 'LeetCode 69', url: 'example' },
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
        // --- New connecting edges from the root ---
        { from: 'example', to: 'math' },
    ]
};