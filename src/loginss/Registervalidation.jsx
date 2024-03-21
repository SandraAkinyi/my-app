function validation(values){
    let error ={}
    const userId_pattern = /^[a-zA-Z0-9_]{3,20}$/;  // Example pattern, adjust as needed
    const password_pattern = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;  // Example pattern, adjust as needed
    const phoneNumber_pattern = /^\d{10}$/;


    if(values.username=== ""){
        error.username = "Enter your username"
    }

   else {
        error.username = ""
    }
    

    if(values.phoneNumber=== ""){
        error.phoneNumber = "Enter phone Number"
    }

    else if (!phoneNumber_pattern.test(values.phoneNumber)) {
        error.phoneNumber = "Please enter phone Number"
    }else {
        error.phoneNumber = ""
    }


    if(values.userId=== ""){
        error.userId = "Kindly enter userId"
    }

    else if (!userId_pattern.test(values.userId)) {
        error.userId = "Please enter a userId"
    }else {
        error.userId = ""
    }

    if(values.password=== ""){
        error.password = "Please enter a password"
    }

    else if (!password_pattern.test(values.password)) {
        error.password = "userId doesnot match"
    }else {
        error.password = ""
    }
    return error;
}
export default validation;