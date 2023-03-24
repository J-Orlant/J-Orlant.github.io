let name_inp = document.getElementById("name");
let email = document.getElementById("email");
let age = document.getElementById("age");
let password = document.getElementById("password");
let confirm_password = document.getElementById("confirm-password");
let checkbox = document.getElementById("checkbox");
let btn_regis = document.getElementById("btn-regis");

let errorMessage = "";

name_inp.addEventListener("keyup", function() {
    if(name_inp.value.length < 8) {
        name_inp.parentElement.classList.add("error");
        errorMessage = "'Email must contain 8 characters or more'"
        name_inp.parentElement.style.setProperty("--error-message", errorMessage);
    } else {        
        name_inp.parentElement.classList.remove("error");
        errorMessage = "";
    }
})

email.addEventListener("keyup", function() {
    if(email.value.length < 8) {
        errorMessage = "Email must contain 8 characters or more"
    }

    if(!email.value.includes("@gmail.com")) {
        email.parentElement.classList.add("error");
        errorMessage = "'Please input the valid email format'"
        email.parentElement.style.setProperty("--error-message", errorMessage);
    } else  {
        email.parentElement.classList.remove("error");
        errorMessage = ""
    }
})

age.addEventListener("keyup", function() {
    if(age.value < 18 || age.value > 90) {
        age.parentElement.classList.add("error");
        errorMessage = "'The minimal age is 18 and more'"
        age.parentElement.style.setProperty("--error-message", errorMessage);
    } else {
        age.parentElement.classList.remove("error");
        errorMessage = ""
    }
})

password.addEventListener("keyup", function() {
    if(password.value.length < 8) {
        password.parentElement.classList.add("error");
        errorMessage = "'Password must contain 8 characters or more'"
        password.parentElement.style.setProperty("--error-message", errorMessage);
    } else {
        password.parentElement.classList.remove("error");
        errorMessage = ""
    }
})

confirm_password.addEventListener("keyup", function() {
    if(confirm_password.value != password.value || confirm_password.value.length < 8) {
        console.log("masok")
        confirm_password.parentElement.classList.add("error");
        errorMessage = "'Password not macth'"
        confirm_password.parentElement.style.setProperty("--error-message", errorMessage);
    } else {
        confirm_password.parentElement.classList.remove("error");
        errorMessage = ""
    }
})

function validateInput() {
    const getAll = document.querySelectorAll(".form-group");

    for(let i = 0; i < getAll.length; i++) {
        if(getAll[i].classList.contains("error")) return [false, getAll[i]];
    }

    return true;
}

btn_regis.addEventListener("click", function(event) {
    if(!checkbox.checked) {
        alert("Ceklis bang");
    } else {
        const [condition, element] = validateInput();
        
        if(!condition) {
            console.log(element.childNodes[3])
            element.childNodes[3].focus();
            event.preventDefault();
        } else {
            document.getElementById("form-action").submit();
        }
    }
})
