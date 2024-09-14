//uniqueNumbers [1,2,4,5,2,5]
//output [1,2,4,5]

function uniqueNumbers(numbers){
    let uniqueNumber=[];
    for(let i=0; i<numbers.length; i++){
        const elements=numbers[i];
        if(!uniqueNumber.includes(elements)){
            uniqueNumber.push(elements)
        }
    }
    return uniqueNumber
    
}
const result=[1,2,4,5,2,5];
console.log(uniqueNumbers(result))