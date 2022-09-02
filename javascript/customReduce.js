const arr = [1,2,3,4,5,6,7,8,9]

const cutomReduce = (arr, intial, callBack)=>{
    let res = intial
    for(var i=0;i<arr.length ;i++){
        res = callBack(res , arr[i])
    }
    return res
}

const sum = (res , current)=> res+current

//console.log(cutomReduce(arr,sum,0))
console.log("SUM =>"+cutomReduce(arr,1, (res,curr)=>res+curr))
console.log()
console.log("Average =>"+cutomReduce(arr,1, (res,curr)=>res+curr)/arr.length)

console.log()
console.log("Multiplication =>"+cutomReduce(arr,1, (res,curr)=>res*curr))
console.log()
