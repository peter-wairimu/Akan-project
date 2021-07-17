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
        // alert(day);
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
function calcAkan(day, month, year){
    MM = month;
    DD = day;
    CC = year.substr(0,2);
    YY = year.substr(2,2);
    // alert(CC)
    let d1 = ( ( (CC/4) -2*CC-1) + Math.ceil((5*YY/4) ) + Math.ceil((26*(MM+1)/10)) + DD ) % 7
    // alert(d1);
    return d1;
}
function output(gender,day){
    
    if(gender=="male"){
        alert(akanMale[day]);
    }
    else if(gender=="female"){
        alert(akanFemale[day]);
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