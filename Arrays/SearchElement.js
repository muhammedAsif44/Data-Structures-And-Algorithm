/*write a function that search for  an element in an array and returns the index,
 if the element is not present then just return -1 */

 let arr = [4,2,0,10,8,30]

 function searchElement(arr,x){
    for(let i = 0;i<=arr.length;i++){
        if(arr[i]==x){
             return i
        } 
    }
    return -1;
     
 }

 console.log(searchElement(arr,13))

 