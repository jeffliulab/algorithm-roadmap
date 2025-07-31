class TrieNode:
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