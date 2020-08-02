function debounce(fn, delay){
    let time = null;
    return function() {
        let context = this;
        let args = arguments;     
        clearTimeout(timer);
        timer = setTimeout(function(){
            fn.apply(context, args);
        }, delay)
    }
}