function getAkan(){
    let birthDay = document.getElementById("birthday").value;
    let gender = getGender(document.querySelectorAll('input[name="gender"]'));
    birthDay.toString();
    let birthDate = birthDay.substr(0,2);
    let birthMonth = birthDay.substr(2,2);
    let birthYear = birthDay.substr(4,4);
    let  x = validateDate(birthDate,birthMonth);
    if (x==1){
        let day = calcAkan(birthDate, birthMonth, birthYear);
        alert(day);
        output(gender,day);
    }
    else{
        alert("Invalid date!");
    }

    
}
const akanMale = ["Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame","Kwasi"];
// alert(akanMale[0]);
const akanFemale = ["Adwoa","Abenaa","Akua","Yaa","Afua","Ama","Akosua"];
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
function output(gender,day){
    var toPrint = document.getElementById('akan');
    if(gender=="male"){
        toPrint.innerHTML = "Your Akan name is : "+ akanMale[day];
    }
    else if(gender=="female"){
        toPrint.innerHTML = "Your Akan name is : "+ akanFemale[day];
    }
    else{
        alert("Invalid gender");
    }
}
function getGender(ele){
    if (ele[0].checked){
        return "male";
    }
    else if(ele[1].checked){
        return "female";
    }
    else{
        return "";
    }
}
function calcAkan(date,month,year){
    let y0 = year - (14 - month) / 12;
    let x = y0 + y0/4 - y0/100 + y0/400;
    let m0 = month + 12*((14 - month)/12) - 2;
    // let day = (date + x + %7;
    let res = date + x
    let resInt = parseInt(Math.floor(res))
    let resInt2 = parseInt(Math.floor((31*m0)/12))
    return (resInt + resInt2) % 7;
}