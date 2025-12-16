/*write a function that returns the number of  
 negative numbers in an array */

 
 function countNegatives(arr){
    let count=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]<0){
            count=count+1;
            console.log("count=="+count)
            
        }
       
    }

     return count;
 }

  let arr = [2,-9,17,0,1,-4,8]

 console.log(countNegatives(arr))

 