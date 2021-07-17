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
const akanMale = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
// alert(akanMale[0]);
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
let days = ["Sat","Sun","Mon","Tue","Wen","Thur","Fri"];
function output(gender,day){
    var toPrint = document.getElementById('akan');
    if(gender=="male"){
        toPrint.innerHTML = "Hi, your Akan name : <i>"+ days[day] + "</i>";
    }
    else if(gender=="female"){
        toPrint.innerHTML = "Hi, your Akan name is : <i>"+ days[day] + "</i>";
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
    let keys = [1,4,4,0,2,5,0,3,6,1,4,6];
    let yr = year % 100;
    let key = keys[month-1];
    let calc1, calc2, calc3;
    let toAdd;
    let toSub;
    dt = parseInt(date);

    switch(parseInt(year/100)){
        case 20:
            toAdd = 6;
            break;
        case 19:
            toAdd = 0;
            break;
        case 18:
            toAdd = 2;
            break;
        case 17:
            toAdd = 4;
            break;
    }
    if(yr%4==0){
        if(month==1 || month==2){
            toSub = 1;
        }
        else{
            toSub = 0;
        }
    }
    else{
        toSub = 0;
    }
    calc1 = parseInt(yr/4) + parseInt(date) + keys[parseInt(month)-1] - toSub + toAdd + parseInt(yr);
    return calc1 % 7;
}