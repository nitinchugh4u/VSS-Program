var countAndSay = function(n) {
    if (n === 1) {
        return "1";
    }

    let current = "1";

    for (let i = 2; i <= n; i++) {
        current = generateNext(current);
    }

    return current;
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

console.log(countAndSay(4)); // Output: "1211"
console.log(countAndSay(6)); // Output: "312211"