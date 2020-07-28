Array.prototype.sreduce = function (cb, initVal){
    const len = this.length;
    if( len === 0 && initVal === undefined){
        throw new TypeError('Reduce of empty array with no initial value at Array.reduce')
    }
    //假设数组长度为5 只有一个有效元素？
    if( (len === 1 && initVal === undefined) ){
        return this[0];
    }
    if ( (len === 0 && initVal !== undefined) ){
        return initVal;
    }
    let pre = initValue;
    for ( let i = 0; i < len; i++ ){
        if( !initVal){
            pre = this[i];
            continue;
        }
        pre = cb(pre, this[i], i, this);
    }
    return pre
}