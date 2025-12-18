//find second largest number in an array

function secondLargest(arr) {
   let firstLargest = -Infinity;
   let secondLargest = -Infinity;

   if(arr.length<2){
    return null;
   }

   for(let i = 0;i<arr.length;i++){

    if(arr[i]>firstLargest){

        secondLargest=firstLargest
        firstLargest=arr[i]

        console.log("firstt"+firstLargest)
        
    }
    else if(arr[i]!= firstLargest && arr[i]>secondLargest){

        secondLargest= arr[i]
        console.log("second"+secondLargest)
    }
   }
   return secondLargest
}

let arr = [4,8,3,10,1];
let result = secondLargest(arr);
console.log(result);
