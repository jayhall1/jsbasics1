const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
console.log("welcome to the password validator tool")
reader.question("create password", function(answer){
    if (answer.length >= 10){
        console.log("password accepted")
    } else{
        console.log("password unnacceptble");
    }
})