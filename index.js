function getAkan(){
    let birthDay = document.getElementById("birthday").value;
    let gender = document.querySelector('input[name="gender"]').value;
    birthDay.toString();
    let birthDate = birthDay.substr(0,2);
    let birthMonth = birthDay.substr(2,2);
    let birthYear = birthDay.substr(4,4);
    let  x = validateDate(birthDate,birthMonth);
    if (x==1){
        calcAkan(birthDate, birthMonth, birthYear);
    }
    else{
        alert("Invalid date!");
    }

    
}
const akanMale = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
const akanFemale = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
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
function calcAkan(day, month, year){
    MM = month;
    DD = day;
    CC = year.substr(0,2);
    YY = year.substr(2,2);
    d = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;
    return d;
}