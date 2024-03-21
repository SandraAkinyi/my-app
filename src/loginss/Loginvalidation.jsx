function validation(values){
    let error ={}
    const userId_pattern = /^[a-zA-Z0-9_]{3,20}$/;  // Example pattern, adjust as needed
    const password_pattern = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;  // Example pattern, adjust as needed
    
    
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