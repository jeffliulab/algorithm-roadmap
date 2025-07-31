if (typeof ROADMAP_DATA === 'undefined') { var ROADMAP_DATA = {}; }

// Non Linear Structures (Tree & Graph)

ROADMAP_DATA.graph_tree = {
    nodes: [
        // Tree | navi: tree | navi:tree
        { id: 'tree', label: 'Tree', type: 'foundation', details: { 
                description: `
                Tree and Graph are two important non linear structures. 
                <br> Tree is a special graph. If you are doing leetcode, you can do tree's firstly, then graph's. 
                <br>
                <br> For a tree, you must know following techniques proficiently:
                <br><strong>Traversal in tree: BFS / DFS / Iterative DFS</strong>
                <br><strong>Three kinds of DFS: pre-order / in-order / post-order</strong>
                `,                 
                exercises: [

                ]
            }
        },
        { id: 'binary_tree_foundations', label: 'Binary Tree', type: 'sub_foundation', details: { 
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
        { id: 'bst', label: 'Binary Search Tree', type: 'sub_foundation', details: { 
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
                <br>(3) Graph traversal: BFS/DFS/Iterative DFS
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
        // navi: trie navi: prefix tree
        { id: 'trie', label: 'Trie / Prefix Tree', type: 'foundation', details: { 
                description: `
Trie, or Prefix Tree:
<br>Insert Word: O(1)
<br>Search Word: O(1)
<br>Search Prefix: O(1)
                `,                 
                exercises: [
                    { 
                        title: 'LeetCode 208: Implement Trie (Prefix Tree)', 
                        url: 'https://leetcode.com/problems/implement-trie-prefix-tree/',
                        key_point: {
                            label: 'Full Implementation', 
                            content: `
The implementation of trie:
[pre]class TrieNode:
    def __init__(self):
        self.children = {} 
        self.is_end_of_word = False

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word: str) -> None:
        curr = self.root
        for char in word:
            if char not in curr.children:
                curr.children[char] = TrieNode()
            curr = curr.children[char]
        
        curr.is_end_of_word = True

    def search(self, word: str) -> bool:
        curr = self.root
        for char in word:
            if char not in curr.children:
                return False
            curr = curr.children[char]
        
        return curr.is_end_of_word

    def startsWith(self, prefix: str) -> bool:
        curr = self.root
        for char in prefix:  
            if char not in curr.children:
                return False
            curr = curr.children[char]
        
        return True

if __name__ == "__main__":
    trie = Trie()
    trie.insert("apple")
    trie.insert("app")
    print(f"Search 'apple': {trie.search('apple')}")
    print(f"Search 'app': {trie.search('app')}")
    print(f"Starts with 'app': {trie.startsWith('app')}")
    print(f"Starts with 'appl': {trie.startsWith('appl')}")
[/pre]
                            `
                        },
                    },
                    { title: '<strong>Word Search >></strong>',
                    },
                    { title: 'LeetCode 211: Design Add and Search Words DS ★', 
                        url: 'https://leetcode.com/problems/design-add-and-search-words-data-structure/',
                        key_point: {
                            label: 'Hint', 
                            content: `
                              The searching strategy needs using DFS/BFS.
                            <br>(1) DFS: base case is finish checking all the character of word. index, word, node will be passing.
                            <br>(2) BFS: (index, node) will be the tuple element in the queue.
                            `
                        },
                    },
                    { title: 'LeetCode 212: Word Search II ★★★', 
                        url: 'https://leetcode.com/problems/word-search-ii/description/',
                        key_point: {
                            label: 'Key Points', 
                            content: `
Level ★★★，involves 3 core skills：Modified Trie + DFS + Backtracking, and has many advanced pruning skills.
<br>
<br>Solution:
<br>1. Use DFS to traverse graph.
<br>2. Use backtracking to trace possibilities.
<br>3. Use modified trie that store the whole word in the leaf node.
<br>
<br>Hints:
<br>1. Don't use BFS. In <strong>specific shape path problem</strong>, use DFS. If you use BFS, you need store too many information in queue.
<br>2. Pruning when no char in trie.
<br>3. Don't pruning when you find a word, think about the situation of "oath" and "oaths".
<br>
<br>Advanced Pruning Skills:
<br><strong>1. Adjacency Pre-check Pruning</strong>
[pre]for r in range(m):
    for c in range(n - 1):
        has.add(board[r][c] + board[r][c + 1])
for r in range(m - 1):
    for c in range(n):
        has.add(board[r][c] + board[r + 1][c])

for word in words:
    for i in range(len(word) - 1):
        a, b = word[i], word[i + 1]
        if a + b not in has and b + a not in has:
            break
    else:
        ...
[/pre]
<br><strong>2. Char Frequency Pruning</strong>
[pre]from collections import Counter

board_counts = Counter(c for row in board for c in row)

for word in words:
    word_counts = Counter(word)
    if any(word_counts[char] > board_counts.get(char, 0) for char in word_counts):
        continue
[/pre]
<br><strong>3. Trie Node Dynamically Pruning</strong>
[pre]board[i][j] = '$'
for dx, dy in directions:
    ni, nj = i + dx, j + dy
    if 0 <= ni < rows and 0 <= nj < cols and board[ni][nj] != '$':
        next_char = board[ni][nj]
        if next_char in node.children:
            tracking(ni, nj, node)
            child_node = node.children[next_char]
            if not child_node.children: 
                del node.children[next_char]

board[i][j] = cur_char
[/pre]
                            `
                        },
                    },
                    { title: 'LeetCode 745. Prefix and Suffix Search ★★', 
                        url: 'https://leetcode.com/problems/prefix-and-suffix-search/description/',
                        key_point: {
                            label: 'Key Points', 
                            content: `
This problem involves two techniques: transforming the stored string + adding node weights.
<br><br>The task is to find the word that matches both a given prefix and suffix, and return the one with the **largest index** among all that match.
<br><br>The tricky part is returning the **index**. If we only needed to check for the existence of a prefix or suffix separately, we could store the words in a trie (prefix tree) directly or reversed. But since the prefix and suffix must belong to the **same word**, intersecting two separate tries can produce too many results.
<br><br>So, how can we transform the "prefix + suffix" query into a **single query** and efficiently return the word with the maximum index?
<br><br>Core Idea 1: Transform the word – store a modified version of the word as "suffix#prefix", and insert this new string into a trie.
[pre]For example, for the word "apple":
Take the suffix "e", generate the new string "e#apple", and insert it into the trie.
Take the suffix "le", generate "le#apple", and insert it.
Take the suffix "ple", generate "ple#apple", and insert it.
... and so on, until the full word "apple#apple" is inserted.[/pre]
At this point, if you want to search for a word with prefix "ap" and suffix "le", you're essentially looking for a string that starts with "le#ap".

                            `
                        },
                    },
                    { title: '<strong>Word Replace >></strong>',
                    },
                    { title: 'LeetCode 648: Replace Words', 
                        url: 'https://leetcode.com/problems/prefix-and-suffix-search/description/',
                        key_point: {
                            label: 'Hints', 
                            content: `
In this question, a new python technique "for...else..." is perfectly fit:
[pre]for char in word:
    if char not in curr.children:
        result.append(word)
        break
    else:
        curr = curr.children[char]
        if curr.word is not None:
            result.append(curr.word)
            break
else:
    result.append(word)
[/pre]
"for...else..." here means, if there is no break in the loop, then use else branch. Of course you can use a "switch" variable instead of using "for...else..."
                            `
                        },
                    },
                    { title: '<strong>Autocomplete >></strong>',
                    },
                    { title: 'LeetCode 1268: Search Suggestions System', 
                        url: 'https://leetcode.com/problems/search-suggestions-system/description/',
                        key_point: {
                            label: 'Hints', 
                            content: `
Note that don't forget record the result of invalid char:
[pre]curr = trie
for char in searchWord:
    if curr and char in curr.children:
        ...
    else:
        curr = None
        result.append([])
[/pre]
`
                        },
                    },
                    

                ]
            }
        },
        // navi: virtual trie | navi: virtual trie
        { id: 'virtual_trie', label: 'Virtual Trie', type: 'advanced', details: { 
                description: `

                `,                 
                exercises: [
                    { title: '<strong>Denary Trie >></strong>',
                    },
                    { title: 'LeetCode 386: Lexicographical Numbers', 
                        url: 'https://leetcode.com/problems/lexicographical-numbers/description/',
                        key_point: {
                            label: 'Key Points', 
                            content: `
A Denary Trie is a special type of Trie that deals with numerical data. The core solution is virtual traversal: instead of building a physical tree, we move conceptually across the tree structure. 
<br><br>Let's see use LeetCode.386 as an example: Given an integer n, output all numbers in the range [1, n] in lexicographical order.<br>
This problem serves as a teaching example to illustrate the concept of a denary trie.<br>
<br>First of all, we cannot directly construct a Denary Trie.<br>
If n = 10^9, then building such a tree would result in more than a billion nodes.<br>
Constructing such a massive tree in memory is completely infeasible.<br>
<br>Secondly, since the structure of a denary trie is stable and the decimal rules already define the structure of the tree, we do not need to traverse the nodes to know the content of each node. 
<br>For example:
<br>The children of node 1 will always be 10, 11, 12...
<br>The children of node 12 will always be 120, 121, 122...
<br>Their relationships are as follows:
[pre]from a node to its child:
child = parent * 10 + digit

from a node to its next neighbor:
sibling = node + 1
[/pre]

Example "Tree" Structure:
[pre](root)
 │
 └── 1  (Layer 1)
     │
     ├── 10  (Layer 2)
     │   │
     │   ├── 100  (Layer 3)
     │   ├── 101
     │   │   ...
     │   └── 109
     ...[/pre]
So if you want to travers in the order of 1, 10, 100..., it is obviously a pre-order traversal of tree. In above graph, layer 3 is the lowest layer and node 100 is the left most node.

So, let 0 as root node, and for each node there are 10 child nodes: 0, 1, 2...8, 9. Suppose we need 1 - k's lexicographical numbers:
[pre]def dfs(n):
    if n > k:
        return 
    if n > 0:
        result.append(n)
    for i in range(10):
        if n == 0 and i == 0:
            continue
        dfs(n * 10 + 1)
[/pre]
`
                        },
                    },
                    { title: 'LeetCode 440: K-th Smallest in Lexicographical Order', 
                        url: 'https://leetcode.com/problems/k-th-smallest-in-lexicographical-order/description/',
                        key_point: {
                            label: 'Key Points', 
                            content: `
This question is not hard, if n and k are quite small. But, if n is very large, for example, if n == 10^9, then pre-order traverse from root 0 or 1 will cost too much time!
[br]To achieve high efficiency, we must use "skip and enter" strategy, for example:
[pre]n = 999999999, k = 888888888,
start from n == 1,
skip 1 - 7, enter 8:
    skip 81 - 87, enter 88:
	skip 881 - 887, enter 888:
	    skip 8881 - 8887, enter 8888:
		...
[/pre]
So how could we achieve or implement this magic?
[pre]INPUT: n, k (the Kth number we found)

in range [1, n], found amount of numbers between [n1,n2)
this means find the n1's block's amount of numbers
def block(n, n1, n2):
    steps = 0
    while n1 <= n:
	if n2 <= n + 1:
	    steps += n2 - n1
	else:
	    steps += (n + 1) - n1

	n1 *= 10
	n2 *= 10
    return steps

curr = 1
k -= 1
while k > 0:
    steps = block(n, curr, curr+1)
    if steps <= k: we need skip this block
	k -= steps
	curr += 1
    else: we need enter this block
	k -= 1 (enter the block cost 1 step)
	curr *= 10

return curr
[/pre]
`
                        },
                    },

                    { title: '<strong>Bit Trie and XOR Minimum >></strong>',
                    },
                ]
            }
        },
        // navi: lcp | navi: longest common prefix
        { id: 'lcp', label: 'LCP', type: 'basic', details: { 
                description: `
                Longest Common Prefix, also known as LCPP, is the core foundation of the advanced algorithm suffix array (Suffix Array).
                `,                 
                exercises: [
                    { title: 'aaaa', url: 'aaaa' },
                ]
            }
        },  
        // navi: spell check | navi: spell check
        { id: 'spell_check', label: 'Spell Check', type: 'intermediate', details: { 
                description: `
                <strong>★★★Prerequisite: Dynamic Programming★★★</strong>
                <br>To unlock this branch, please firstly finished the foundation part of Dynamic Programming: 1D-DP & 2D-DP!
                ...
                `,                 
                exercises: [
                    { title: 'aaaa', url: 'aaaa' },
                ]
            }
        },  
        // navi: dsu
        { id: 'dsu', label: 'DSU', type: 'foundation', details: { 
                description: `
                ....
                `,                 
                exercises: [
                    { title: 'aaaa', url: 'aaaa' },
                ]
            }
        },        


        { id: 'dag', label: 'Unweighted DAG', type: 'sub_foundation', details: { description: '.....', }},
        { id: 'weighted_undirected_graph', label: 'Weighted Undirected Graph & MST', type: 'sub_foundation', details: { description: '.....', }},
        { id: 'weighted_directed_graph', label: 'Weighted Directed Graph', type: 'sub_foundation', details: { description: '.....', }},

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

        // Root: tree >> graph
        { from: 'tree', to: 'graph'},


        // tree
        { from: 'tree', to: 'trie' }, 
        { from: 'tree', to: 'binary_tree_foundations' }, 
        { from: 'binary_tree_foundations', to: 'heap' }, 

        // trie
        { from: 'trie', to: 'lcp' }, 
        { from: 'lcp', to: 'spell_check' }, 
        { from: 'spell_check', to: 'virtual_trie' }, 

        // graph
        { from: 'graph', to: 'dsu'},

        // Main Graph Types
        { from: 'graph', to: 'dag'},
        { from: 'dag', to: 'weighted_undirected_graph'},
        { from: 'weighted_undirected_graph', to: 'weighted_directed_graph'},

        // Graph: DAG
        { from: 'dag', to: 'topological_sort'},
        { from: 'topological_sort', to: 'transitive_closure'},

        // binary tree
        { from: 'binary_tree_foundations', to: 'binary_tree_intermediate' }, 
        { from: 'binary_tree_foundations', to: 'bst' }, 

        // heap
        { from: 'heap', to: 'merge_k_ways'},
        { from: 'merge_k_ways', to: 'task_scheduler'},

    ]
};