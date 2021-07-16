function getAkan(){
    let birthDay = document.getElementById("birthday").value;
    birthDay.toString();
    let birthDate = birthDay.substr(0,2);
    let birthMonth = birthDay.substr(2,2);
    let birthYear = birthDay.substr(4,4);
    alert(birthDate);
    alert(birthMonth);
    alert(birthYear);

    
}