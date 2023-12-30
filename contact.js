const form = document.getElementById("form-container")
const fname = document.getElementById("fname")
const lname = document.getElementById("lname")
const email = document.getElementById("email")
const country = document.getElementById("country")
const subject = document.getElementById("subject")

const fnameError = document.getElementById("fnameError")
const lnameError = document.getElementById("lnameError")
const emailError = document.getElementById("emailError")
const countryError = document.getElementById("countryError")





const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateForm(event) {
    event.preventDefault();
   if(!isNaN(fname.value) || fname.value == '')
    fnameError.textContent='Enter Valid Name'
   else
   fnameError.textContent=''

    if(!isNaN(lname.value) || lname.value == '')
        lnameError.textContent='Enter Valid Name'
    else
    lnameError.textContent=''

    if(!emailRegex.test(email.value) || email.value == ''){
    console.log(emailRegex.test(email.value));
      emailError.textContent='Enter Valid Email'}
    else 
    emailError.textContent=''

    if(country.value=='')
    countryError.textContent='Choose a country'

else
    countryError.textContent=''

}



