function getAkan(){
    let birthDay = document.getElementById("birthday").value;
    let gender = document.querySelector('input[name="gender"]').value;
    birthDay.toString();
    let birthDate = birthDay.substr(0,2);
    let birthMonth = birthDay.substr(2,2);
    let birthYear = birthDay.substr(4,4);
    let  x = validateDate(birthDate,birthMonth);
    if (x==1){
        calcAkan();
    }
    else{
        alert("Invalid date!");
    }

    
}
function validateDate(day,month){
    let valid = true;
    if(day <= 0 || day > 31){
        valid = false;
    }
    else if(month <= 0 || month > 12){
        valid = false;
    }
    if(valid == false){
        return -1;
    }
    else{
        return 1;
    }
}
function calcAkan(){

}