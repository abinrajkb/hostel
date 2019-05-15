document.getElementById("log_btn").onclick = function () {
    document.getElementById("Login").style.display = "block";
    document.getElementById("SignUp").style.display = "none";
    document.getElementById("log_btn").style.color = "black";
    document.getElementById("reg_btn").style.color = "#8f8e8d";

};
document.getElementById("reg_btn").onclick = function () {

    document.getElementById("Login").style.display = "none";
    document.getElementById("SignUp").style.display = "block";
    document.getElementById("log_btn").style.color = "#8f8e8d";
    document.getElementById("reg_btn").style.color = "black";


};

//
// document.getElementById("otp_btn").onclick = function () {
//
//     document.getElementById("otp").style.display = "block";
//     document.getElementById("otp_btn").hidden = true;
//     document.getElementById("submit_btn").hidden = false;
//
// };

function hashing(event) {

    var raw1 = document.getElementById('id_password1').value;
    var raw2 = document.getElementById('id_password2').value;
    var username = document.getElementById('username').value;
    document.getElementById('RegistrationForm').setAttribute("isvalid", "true");
    document.getElementById('id_password2').setAttribute("onfocus", "setCustomValidity('')");
    document.getElementById('username').setAttribute('onfocus', "setCustomValidity('')");
    document.getElementById('id_password1').setAttribute('onfocus', "setCustomValidity('')");
    var regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    var email_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email_regex.test(username)) {
        if (regex.test(raw1)) {
            if (raw1 != raw2) {
                document.getElementById('id_password2').setCustomValidity('Passwords must be same');
                event.preventDefault();
            } else {
                document.getElementById('id_password1').value = sha512(raw1);
                document.getElementById('id_password2').value = sha512(raw2);
                document.getElementById('RegistrationForm').submit()
            }

        } else {
            document.getElementById('id_password1').setCustomValidity('Password Must be atleast 8 characters long, must include atleast a letter and alphabet');
            event.preventDefault();
        }
    }
    else{
            document.getElementById('username').setCustomValidity('Input must be a valid email');
            event.preventDefault();
        }
}

function hashing1(event) {
    var raw1 = document.getElementById('id_password').value;
    document.getElementById('id_password').value = sha512(raw1);
    console.log(sha512(raw1));


}

// document.getElementById("login_submit").addEventListener("click", function(event){
//       event.preventDefault()
//     });

// pbkdf2_sha256$150000$ezeFBzpfUhta$a1dcgbMe1jzS8SXfymx8BDyLsdpTifJxZSTEdHp+3kI=