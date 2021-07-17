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
        alert(day);
        output(gender,day);
    }
    else{
        alert("Invalid date!");
    }

    
}
const akanMale = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
alert(akanMale[0]);
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
    alert(CC)
    d = ( ( (CC/4) -2*CC-1) + ((5*YY/4) CC ) + ((26*(MM+1)/10)) + DD );
    alert(d%7);
    return d;
}
function output(gender,day){
    if(gender=="male"){
        alert(akanMale[day]);
    }
    else if(gender=="female"){
        alert(akanFemale[day]);
    }
    else{
        alert("error");
    }
}