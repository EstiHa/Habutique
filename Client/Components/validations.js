

function nameValidation(name) {
    name = String(name).trim();
    if (name === "" || name.length < 2) {
        return "אורך השם צריך להכיל לפחות שני תווים";
    }
    if (!(/^[A-Za-zא-ת\s]+$/.test(name))) {
        return "שם יכול להכיל רק אותיות";
    }
    return ('');
}

function addressValidation(address){
    if(address===""){
        return("שדה חובה")}
        return ("")
}

function creditcardNumberValidation(number) {
    if(number===" "){
    return("שדה חובה")}
    else if (number.length>=16 && number.length<=8){
         return ("מספר כרטיס אינו חוקי")
    }
    return ("")
}


function creditcardSecurityValidation( cvc) {
    if (cvc.length!== 3){
        return ("ספרות אבטחה חייבות להכיל 3 ספרות בדיוק")
    }
    return ("")
}

function phonenumberValidation(number){
    var pattern = new RegExp(/^[0-9\b]+$/);
    if(number===""){
        return("שדה חובה")
    }else if (!pattern.test(number)) {
      return("מספר מכיל רק ספרות")}
    // }else if(number.length !== 10){
    //   return("מספר טלפון אינו חוקי")
    // }
  return ("")
  }

function passwordValidation(password) {
    if(password===""){
        return("שדה חובה")
    }else if(password.length <= 6 ){
        return("סיסמה חייבת להכיל לפחות ששה תווים")
    }
    if ( !/[A-Z]/.test(password)){
        return("סיסמה חייבת להכיל אותיות גדולות וקטנות")
    }
    if ( !/[a-z]/.test(password)){
        return("סיסמה חייבת להכיל אותיות גדולות וקטנות")
    }
    if( !/[0-9]/.test(password)) {
        return("סיסמה חייבת להכיל מספר אחד לפחות")
    }
    else {
        return('')
    }  
}


function password2Validation(password,password2){
   return ""
    
}

function emailValidation(email){
    if (email.length < 6){
        return ("כתובת אימייל קצרה מידי");
    }
    var firstAt=email.indexOf('@');
    if (firstAt<1 || firstAt===email.length-1 || firstAt!==email.lastIndexOf('@')){
        return ("כתובת אימייל אינה חוקית");
    }
    var lastDot=email.lastIndexOf('.');
    if (lastDot< firstAt+2){
        return ("סיומת כתובת האימייל אינה חוקית");
    }
    return ("");
}
    
export {
    nameValidation,
    creditcardSecurityValidation,
    creditcardNumberValidation,
    phonenumberValidation,
    addressValidation,
    passwordValidation,
    password2Validation,
    emailValidation
}