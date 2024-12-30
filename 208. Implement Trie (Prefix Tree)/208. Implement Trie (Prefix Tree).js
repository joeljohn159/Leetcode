
var Trie = function () {
    this.root = new Map();
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    let map = this.root;
    for (let c of word) {
        if (!map.has(c)){
            map.set(c, new Map)
        }
        map = map.get(c)
    }
    map.set('End', true)
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {

    let map = this.root
    for (let c of word) {
        if (map.has(c)) {
            map = map.get(c)
        } else {
            return false
        }
    }
    if(map.has('End')) return true;
    return false;

};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
let map = this.root
    for (let c of prefix) {
        if (map.has(c)) {
            map = map.get(c)
        } else {
            return false
        }
    }
    return true
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */