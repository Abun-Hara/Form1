document.getElementById('firstName').addEventListener('input', function(){
        validateFirstName();
    checkAllFields();
});
document.getElementById('lastName').addEventListener('input', function(){
        validateLastName();
    checkAllFields();
});
document.getElementById('email').addEventListener('input', function(){
        validateEmail();
    checkAllFields();
});
document.getElementById('phone').addEventListener('input', function(){
        validatePhone();
    checkAllFields();
});
document.getElementById('age').addEventListener('input', function(){
        validateAge();
    checkAllFields();
});
document.getElementById('password').addEventListener('input', function(){
        validatePassword();
    checkAllFields();
});

    function validateFirstName() {
        const firstName = document.getElementById('firstName').value.trim();
        const fNamePattern = /^[A-Za-z]+$/;
        if (fNamePattern.test(firstName)) {
            displayValidation('firstNameValidation',`<i class="fa-regular fa-circle-check"></i>`, true);
        } else {
            displayValidation('firstNameValidation', `<i class="fa-regular fa-circle-xmark"></i>`, false);
        }
    }
    function validateLastName() {
        const lastName = document.getElementById('lastName').value.trim();
        const lNamePattern = /^[A-Za-z]+$/;
        if (lNamePattern.test(lastName)) {
            displayValidation('lastNameValidation',`<i class="fa-regular fa-circle-check"></i>`, true);
        } else {
            displayValidation('lastNameValidation', `<i class="fa-regular fa-circle-xmark"></i>`, false);
        }
    }
    function validateEmail() {
         const email = document.getElementById('email').value; 
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        if (emailPattern.test(email)) { 
            displayValidation('emailValidation',`<i class="fa-regular fa-circle-check"></i>`, true);

         } else {
             displayValidation('emailValidation', `<i class="fa-regular fa-circle-xmark"></i>`, false); 
            } }
    function validatePhone(){
       const phone= document.getElementById('phone').value.trim();
       const PhonePattern=/^\d{10}$/;
       if(PhonePattern.test(phone)){
        displayValidation('phoneValidation',`<i class="fa-regular fa-circle-check"></i>`,true);
       }else{
        displayValidation('phoneValidation', `<i class="fa-regular fa-circle-xmark"></i>`,false);
       }
    }        
   function validateAge(){
    const age=document.getElementById('age').value;
    if(age > 0 && age <=150){
        displayValidation('ageValidation',`<i class="fa-regular fa-circle-check"></i>`, true);
    }else {
        displayValidation('ageValidation', `<i class="fa-regular fa-circle-xmark"></i>`, false);
    }
   }
   function validatePassword(){
    const password=document.getElementById('password').value;
    const passwordPattern=/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\w_]).{8,}$/;
    if(passwordPattern.test(password)){
        displayValidation('passWordValidation',`<i class="fa-regular fa-circle-check"></i>`, true)
    }else{
        displayValidation('passWordValidation', `<i class="fa-regular fa-circle-xmark"></i>`, false)
    }
   }
function displayValidation(elementId, message, isValid) {
    const element = document.getElementById(elementId);
    element.innerHTML = message;
    element.style.display = 'block';  // Show the validation message

    if (isValid) {
        element.classList.remove('invalid');
        element.classList.add('valid');
    } else {
        element.classList.remove('valid');
        element.classList.add('invalid');
    }
}
function checkAllFields(){
    const fNameValid=document.getElementById('firstNameValidation').classList.contains('valid');
    const lNameValid=document.getElementById('lastNameValidation').classList.contains('valid');
    const emailValid=document.getElementById('emailValidation').classList.contains('valid');
    const phoneValid=document.getElementById('phoneValidation').classList.contains('valid');
    const ageValid=document.getElementById('ageValidation').classList.contains('valid');
    const passwordValid=document.getElementById('passWordValidation').classList.contains('valid');
    const submitButton=document.getElementById('submitButton');
    if(fNameValid && lNameValid && emailValid && phoneValid && ageValid && passwordValid){
        submitButton.disabled = false;
    }else{
        submitButton.disabled = true;
    }
}
