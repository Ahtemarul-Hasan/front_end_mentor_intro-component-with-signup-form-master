const email = document.getElementById('email'),
    password = document.getElementById('password'),
    firstName = document.getElementById('first-name'),
    lastName = document.getElementById('last-name'),
    emailValidation = eml => {
        const EMAIL_REGEX =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (EMAIL_REGEX.test(eml.value.trim())) {
            console.log('email-validation-success');
            eml.nextElementSibling.style.display = 'none';
            eml.nextElementSibling.nextElementSibling.style.display = 'none';
        } else {
            console.log('email-validation-failed');
            eml.nextElementSibling.style.display = 'block';
            eml.nextElementSibling.nextElementSibling.style.display = 'block';
        }
    },
    passwordValidation = psw => {
        PASS_REGEX = /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        if (psw.value.trim().match(PASS_REGEX)) {
            console.log('password-validation-success');
            psw.nextElementSibling.style.display = 'none';
            psw.nextElementSibling.nextElementSibling.style.display = 'none';
        } else {
            console.log('password-validation-failed');
            psw.nextElementSibling.style.display = 'block';
            psw.nextElementSibling.nextElementSibling.style.display = 'block';
        }
    },
    credentialValidation = items => {
        items.forEach(item => {
            if (item.value === '') {
                console.log('name-validation-failed');
                item.nextElementSibling.style.display = 'block';
                item.nextElementSibling.nextElementSibling.style.display = 'block';
            } else {
                console.log('name-validation-success');
                item.nextElementSibling.style.display = 'none';
                item.nextElementSibling.nextElementSibling.style.display = 'none';
            }
        });
    },
    submitBtn = document.getElementById('submit-btn').addEventListener('click', e => {
        e.preventDefault();
        emailValidation(email);
        passwordValidation(password);
        credentialValidation([firstName, lastName]);
    });
