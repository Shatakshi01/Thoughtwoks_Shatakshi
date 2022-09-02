const arr = [2,4,10,5,7,43]

var customForEach = (arr,callBack)=>{
    for(var i=0;i<arr.length ;i++){
        callBack(arr[i])
    }
}

customForEach(arr ,x=>{console.log(x+1)})
console.log("============")
customForEach(arr ,(x)=>console.log(x**2))