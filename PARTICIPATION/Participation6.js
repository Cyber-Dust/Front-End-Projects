// Week 6 - February 15th
// karljian@usc.edu
// Karl Jiang
// dvolk@usc.edu
// Dasean Volk

if (/{6,12}/.test(password) && /[a-zA-Z0-9_]/.test(password) && /\d{2}/.test(password)) {
    console.log('Secure password');
} else {
    console.log('Insecure password');
}