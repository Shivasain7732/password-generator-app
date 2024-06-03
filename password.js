const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const symbolSet = "~!@#$%^&*()_+/";

const passwordBox = document.getElementById("pass_box");
const totalChar = document.getElementById("total_char");
const upperCase = document.getElementById("uppercase");
const lowerCase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols")

// console.log(totalChar);

// for(let i=1; i>=totalChar.value; i++);

getRondomData = (dataSet) =>{
    return dataSet[Math.floor(Math.random()*dataSet.length)];

}
// getRondomData(numberSet); 

const generateRandomPassword = (password = "") =>{
    if(upperCase.checked){
        password += getRondomData(upperSet);
    }
    if(lowerCase.checked){
        password += getRondomData(lowerSet);
    }
    if(numbers.checked){
        password += getRondomData(numberSet);
    }
    if(symbols.checked){
        password += getRondomData(symbolSet);
    }
    if(password.length < totalChar.value){
        return generateRandomPassword(password);
    }
    // console.log(truncateString(password, totalChar.value));
    passwordBox.innerText = password;
}
document.getElementById("btn").addEventListener(
    "click",
    function(){
        generateRandomPassword();
    }
)

function truncateString(str, num){
    if(str.length > num){
        let subStr = str.substring(0, num);
        return subStr;
    }else{
        return str;
    }
}
// generateRandomPassword();