 function ans(n){
    
    if(n==1){
        return "1";
    }
    let send= "1";
    

 for(let i=2; i<=n; i++){
    
   send = generateNext(send);

}

return send;
};



function generateNext(str) {
        let result = "";
        let count = 1;
    
        for (let i = 0; i < str.length; i++) {
            if (str[i] === str[i + 1]) {
                count++;
            } else {
                result += count + str[i];
                count = 1;
            }
        }
    
        return result;
    }

// console.log(countAndSay("2")); //  3113112221232112111312211312113211 
// console.log(countAndSay("222221"))   //314211102