export default function validate(user) {
    let errors = {};
  
    if (!user.username){
      errors.username = "Introduce your username"
    }else if(!user.password) {
      errors.password = "Write a password"
    }
    return errors;
}