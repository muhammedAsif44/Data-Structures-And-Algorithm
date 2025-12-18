var reverse =  function(x){
    let xCopy =  x;
    let rev = 0;
    x=Math.abs(x);

    while(x>0){
        let lastNum = x%10;
        rev = (10*rev)+lastNum;
        x= Math.floor(x/10);
    }

    if(xCopy<0){
        return -rev;

    }
    else
       return rev;

}

console.log(reverse(1234))