export function throttle(fn, delay) {
   let timer = null;
   return function(){
       if(!timer){
        let arg = argument;
        timer = setTimeout( ()=>{
            fn(arg);
            clearTimeout(timer);
        })
       }
   }
}