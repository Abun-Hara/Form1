document.getElementById('firstName').addEventListener('input', function() {
    validateFirstName();
    checkAllFields();
});

document.getElementById('password').addEventListener('input', function() {
    validatePassword();
    checkAllFields();
});

document.getElementById('phoneNumber').addEventListener('input', function() {
    validatePhoneNumber();
    checkAllFields();
});

document.getElementById('age').addEventListener('input', function() {
    validateAge();
    checkAllFields();
});

document.getElementById('comments').addEventListener('input', function() {
    validateComments();
    checkAllFields();
});

function validateFirstName() {
    const firstName = document.getElementById('firstName').value;
    const namePattern = /^[A-Za-z]+$/;
    if (namePattern.test(firstName)) {
        displayValidation('firstNameValidation', 'Right', true);
    } else {
        displayValidation('firstNameValidation', 'Wrong', false);
    }
}

function validatePassword() {
    const password = document.getElementById('password').value;
    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (passwordPattern.test(password)) {
        displayValidation('passwordValidation', 'Right', true);
    } else {
        displayValidation('passwordValidation', 'Wrong', false);
    }
}

function validatePhoneNumber() {
    const phoneNumber = document.getElementById('phoneNumber').value;
    const phonePattern = /^\d+$/;
    if (phonePattern.test(phoneNumber)) {
        displayValidation('phoneValidation', 'Right', true);
    } else {
        displayValidation('phoneValidation', 'Wrong', false);
    }
}

function validateAge() {
    const age = document.getElementById('age').value;
    if (age >= 0 && age <= 120) {
        displayValidation('ageValidation', 'Right', true);
    } else {
        displayValidation('ageValidation', 'Wrong', false);
    }
}

function validateComments() {
    const comments = document.getElementById('comments').value;
    if (comments.length >= 50) {
        displayValidation('commentsValidation', 'Right', true);
    } else {
        displayValidation('commentsValidation', 'Wrong', false);
    }
}

function displayValidation(elementId, message, isValid) {
    const element = document.getElementById(elementId);
    element.textContent = message;
    element.style.display = 'block';  // Show the validation message

    if (isValid) {
        element.classList.remove('invalid');
        element.classList.add('valid');
    } else {
        element.classList.remove('valid');
        element.classList.add('invalid');
    }
}

function checkAllFields() {
    const firstNameValid = document.getElementById('firstNameValidation').classList.contains('valid');
    const passwordValid = document.getElementById('passwordValidation').classList.contains('valid');
    const phoneValid = document.getElementById('phoneValidation').classList.contains('valid');
    const ageValid = document.getElementById('ageValidation').classList.contains('valid');
    const commentsValid = document.getElementById('commentsValidation').classList.contains('valid');

    const submitButton = document.getElementById('submitButton');
    if (firstNameValid && passwordValid && phoneValid && ageValid && commentsValid) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}
