const arr = [2,4,77,65,9,17,40 , 8, 44]
const isEven = (x)=>{
    return x%2==0
}

const isOdd = (x)=>{
    return x%2!=0
}


const customFilter= (arr, callBack)=>{
    if(arr.length > 0){
        let res = []
        for(val of arr){
            if(callBack(val)) res.push(val)
        }
        return res;
    }
    else console.log("empty arr")
}

console.log(customFilter(arr , isEven))
console.log(customFilter(arr , isOdd))

