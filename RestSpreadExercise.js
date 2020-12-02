let filterOutOdds = (...arguments) => arguments.filter(num => num % 2 ===0); 

let findMin = (...nums) => Math.min(...nums);

let mergeObjects = (obj, nextObj) => ({...obj,...nextObj});

let doubleAndReturnArgs = (array, ...args) => [...array, ...args.map(nums => nums * 2)];

let removeRandom = (items) => { let rmItem = Math.floor(math.random() * items.length);
    return [...items.slice(0,rmItem), ...items.slice(rmItem + 1,items.length()-1)];
};

let extend = (array1,array2) => {
    return [...array1,...array2];
};

let addKeyValue = (obj, key, value) => {
    let createdObj = {...obj};
    createdObj[key] = value;
    return createdObj;
};

let removeKey = (obj, key) => {
    let createdObj = {...obj};
    delete createdObj[key];
    return createdObj;
};

let combine = (obj1, obj2) => {
    return {...obj1, ...obj2};
};

let update = (obj, key, val) => {
    let createdObj = {...obj};
    createdObj[key] = val;
    return createdObj;
}

/* Would this work for "addKeyValue" and "update"?
let update = (obj, key, val) => {
    let createdObj = {...obj, key: val};
    */