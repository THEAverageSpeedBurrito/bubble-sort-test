'use strict';

//bubble sort

var array = [2,4,1,8,15,7,9];

function swap(arr, idx1, idx2) {
  var val1 = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = val1;
}

function bubbleSort(arr) {
  var swapped;
  do{
    swapped = false;
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] > arr[i+1]){
        swapped = true;
        swap(arr, i, i+1);
      }
    }
  }while(swapped);
  return arr;
}

console.log(bubbleSort(array));
