let str = "[](){}"

function  balance (str){
    let arr = str.split("");
    console.log(arr);

    const stack = [];

    for(let i =0; i<arr.length; i++){

        const currentElement = arr[i];
        const recentlyPushedStackElem = stack[stack.length-1];


        if(recentlyPushedStackElem==="{" && currentElement==="}"){
            stack.pop();
            continue;
        }

        if(recentlyPushedStackElem==="[" && currentElement==="]"){
            stack.pop();
            continue;
        }

        if(recentlyPushedStackElem==="(" && currentElement===")"){
            stack.pop();
            continue;
        }

        stack.push(currentElement);
}
return stack.length===0;
}

console.log(balance(str));
