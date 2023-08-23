const arr =[1,2,3,4,5];
    const produceElement =(arr=[])=>{
        const res =arr.reduce((acc,val)=>{
            acc=acc*val;
            return acc;
        },1);
        return res;
    };
    console.log(produceElement(arr));