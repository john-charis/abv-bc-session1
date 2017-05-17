'use strict'
module.exports.aritGeo = function(arr){
    let initialDifference = arr[1]-arr[0];
    let finalDifference = arr[arr.length-1]-arr[arr.length-2];
    let initialRatio = arr[1]/arr[0];
    let finalRatio = arr[arr.length-1]/arr[arr.length-2];
    if(arr.length===0){
        return 0;
    }
    else if(initialDifference==finalDifference){
        return "Arithmetic";
    }
    else if(initialRatio==finalRatio){
        return "Geometric";
    }
    else{
        return -1;
    }
}