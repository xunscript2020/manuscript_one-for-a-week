export function deepCopy(obj){
    const newObj = {};

    switch( Object.prototype.toString.call(obj[key]) ) {
        case "[object Array]":
           newObj[key] = [];
            obj[key].forEach(item => {
                newObj[key].push(deepCopy(item));
            });
            break;
        case "[object Object]":
            newObj[key] = {};
            for (let kkey in obj[key]){
                newObj[key][kkey] = deepCopy(obj[key][kkey]);
            };
           break;
        default:
            newObj[key] = obj[key];
   } 

    return newObj;
}