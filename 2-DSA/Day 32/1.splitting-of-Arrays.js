// 1.take the input 
// 2.store the input
// 3. now traverse the array  and store the value of there index one by one  store that index array and traverse the loop over the array and then push that  inside the resultant array


let arr = [
    [1, 2],
    [3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14, 15]
];


// const result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let result = [];

for(let i =0; i<arr.length; i++){
 let array = arr[i];
 for(let i =0; i<array.length; i++){
    result.push(array[i])
 }
}

console.log("result",result);
