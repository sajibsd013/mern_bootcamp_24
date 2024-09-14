//find the largest number array;
//const arr= [4,5,6,7,8,9];
// 9

function maxNumber(numbers){
    let max=numbers[0];
    for(let i=0; i<numbers.length; i++){
        const elements= numbers[i];
        if(elements> max){
            max=elements;
        }
    }
    return max;

}
const arr=[4,5,6,7,8,9];
const result= maxNumber(arr)
console.log(result)