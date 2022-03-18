export default function validate(user) {
    let errors = {};
  
    if (!user.email){
      errors.email = "Introduce your e-mail"
    }else if(!/\S+@\S+\.\S+/.test(user.email)){
        errors.email = "Invalid e-mail";
    }
    if(!user.password) {
      errors.password = "Write a password"
    }else if(!/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/.test(user.password)){
      errors.password = "Passwords must be At least 8 characters long, max length anything.\n Include at least 1 lowercase letter. 1 capital letter. 1 number. 1 special character !@#$%^&*"
    }
    return errors;
}