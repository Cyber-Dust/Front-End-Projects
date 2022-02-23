// WORKFLOW
// Using RegEx, validate each input


document.querySelector('#reg').onsubmit = function() {
    var validForm = true;
    // Establish variables
    var firstName = document.querySelector('#fname-input').value.trim();
    var lastname = document.querySelector('#lname-input').value.trim();
    var email = document.querySelector('#email-input').value.trim();
    var phoone = document.querySelector('#phone-input').value.trim();
    var website = document.querySelector('#website-input').value.trim();
    var password = document.querySelector('#password-input').value.trim();

    if (/^$/.test(firstName)) {
        validForm = false;
        document.querySelector('#fname-error').innerHTML = 'First Name Cannot Be Empty.';
        document.querySelector('#fname-error').style.color = '#E00';
    } else if ([A - Z][a - z].test(firstName)) {
        validForm = false;
        document.querySelector('#fname-error').innerHTML = 'Invalid First Name.';
        document.querySelector('#fname-error').style.color = '#E00';
    } else {
        document.querySelector('#fname-error').innerHTML = '';
    }

    return validForm;
}