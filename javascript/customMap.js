
const customMap = (arr,cBFun)=>{
    let res=[]
    for(let val of arr){
        res.push(cBFun(val)) // callbacking function 
    }
    return res;
}
let arr = [2,4,10,5,7,43]
let double = (x)=>{
    return x*2
}
let triple = (x)=>{
    return x*3
}
let half=(x)=>{
    return x/2
}
console.log(customMap(arr , x=>x*2))
console.log(customMap(arr , triple))
console.log(customMap([2,12,80,46], half))
console.log(customMap(customMap(arr , double) , half))
