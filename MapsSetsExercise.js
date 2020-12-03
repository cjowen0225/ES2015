// Quick Question #1
    // {1,2,3,4};

// Quick Question #2
    // "ref"

// Quick Question #3
    // Map(2) {Array(3) => true, Array(3) => false}

// hasDuplicate
let hasDuplicate = array => new Set(array).size !== array.length;

// vowelCount
function vowelCount (str){
    const vowelMap = new.Map();
    for(let char of str){
        let lower = char.toLowerCase();
        if("aeiou".includes(lower)){
            if(vowelMap.has(lower)){
                vowelMap.set(lower, vowelMap.get(lower) + 1);
            }
            else {
                vowelMap.set(lower, 1);
            }
        };
    };
    return vowelMap;
};