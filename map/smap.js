Array.prototype.smap = function ( cb, thisArg=undefined ) {
    const arr = [];
    const len = this.length;
    for( let i = 0; i < this.length; i++){
        if(this.length !== len){
            len--;
            // [empty, 6]
            arr.push(undefined);
            continue;
        }
        //从未赋过值和赋值为undefined怎么区分？
        if( this[i] === undefined ){
            arr.push(undefined);
            continue;
        }
        const item = cb.call(thisArg, this[i], i, this );
        arr.push(item);
    }
    return arr;
}
