function reverseString (s){
    let arr = s.split('');
    let len = arr.length 
    let halflen = Math.floor(len/2) ;

    for(let i = 0;i<halflen;i++){
        let temp = arr[i];
        arr[i] = arr[len-1-i];
        arr[len-1-i]=temp;
    }
    return arr.join('')
}

console.log(reverseString("cat"))