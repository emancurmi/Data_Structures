const bubbleSort = require('./bubble')

 function bucket(arr, min, max){
   if(!arr.length || !min || !max){
     return arr
   }
   let bucketCapacity = 5
   let bucketCount = Math.floor((max - min) / bucketCapacity + 1)
   // create an empty array with length of bucketCount
   let buckets = new Array(bucketCount)
   // fill empty array with empty arrays
   for(i = 0; i < buckets.length; i++){
     buckets[i] = []
   }
   // push values from unsorted array into the buckets
   for(i = 0; i < arr.length; i++){
     buckets[Math.floor((arr[i] - min) / bucketCapacity)].push(arr[i])
   }
   // Sort buckets and place back into input array
   arr.length = 0;
   for (i = 0; i < buckets.length; i++) {
     bubbleSort(buckets[i]);
     for (var j = 0; j < buckets[i].length; j++) {
       arr.push(buckets[i][j]);
     }
   }

   return arr;
 }

module.exports = bucket