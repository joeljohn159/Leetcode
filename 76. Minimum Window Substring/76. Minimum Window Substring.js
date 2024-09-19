/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if(t.length > s) return '';
    let countT = new Map;
    t.split('').forEach(char => countT.set(char, (countT.get(char) || 0) + 1 ))

    let window = new Map;
    let need = countT.size;
    let have = 0;
    let res = [-1, -1]
    let resLength = Infinity
    let left = 0;

    for(let right = 0; right<s.length; right++){
        let c = s[right];
        window.set(c, (window.get(c) || 0) + 1);
        if(countT.has(c) && countT.get(c) === window.get(c)){
            have += 1;
        }

        while (have === need){
            if((right - left + 1) < resLength){
                res = [left, right];
                resLength = right - left + 1
            }

            window.set(s[left], window.get(s[left]) - 1 );
            if (countT.has(s[left]) &&   window.get(s[left]) < countT.get(s[left])){
                have -= 1;
            }
            left += 1
        


        }
    }
    return resLength === Infinity ? "" : s.substring(res[0],res[1]+1)
};

