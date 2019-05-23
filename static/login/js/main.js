$(document).ready(function () {
   $("input").on('click',function () {
       this.parentNode.classList.remove("alert-validate")
   })
});



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


function hashing(event) {

    var raw1 = document.getElementById('id_password1').value;
    var raw2 = document.getElementById('id_password2').value;
    var username = document.getElementById('username').value;

    var tag = document.getElementsByTagName('input');
    for (i = 0; i < tag.length; i++) {

        tag[i].parentNode.classList.remove("alert-validate");
    }

    document.getElementById('RegistrationForm').setAttribute("isvalid", "true");

    var regex = /^(.{0,}(([a-zA-Z][^a-zA-Z])|([^a-zA-Z][a-zA-Z])).{4,})|(.{1,}(([a-zA-Z][^a-zA-Z])|([^a-zA-Z][a-zA-Z])).{3,})|(.{2,}(([a-zA-Z][^a-zA-Z])|([^a-zA-Z][a-zA-Z])).{2,})|(.{3,}(([a-zA-Z][^a-zA-Z])|([^a-zA-Z][a-zA-Z])).{1,})|(.{4,}(([a-zA-Z][^a-zA-Z])|([^a-zA-Z][a-zA-Z])).{0,})$/;
    var email_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email_regex.test(username)) {
        if (regex.test(raw1)) {
            if (raw1 !== raw2) {
                document.getElementById('id_password2').parentNode.classList.add("alert-validate");
                document.getElementById('id_password2').parentNode.setAttribute('data-validate','Passwords must be same');
                event.preventDefault();
            } else {
                document.getElementById('id_password1').value = sha512(raw1);
                document.getElementById('id_password2').value = sha512(raw2);
                document.getElementById('RegistrationForm').submit()
            }

        } else {
            document.getElementById('id_password1').parentNode.classList.add("alert-validate");

            document.getElementById('id_password1').parentNode.setAttribute('data-validate','Password Must be atleast 8 characters long, must include atleast a character  and a digit or special characters');
            event.preventDefault();
        }
    } else {
        document.getElementById('username').parentNode.classList.add("alert-validate");

        document.getElementById('username').parentNode.setAttribute('data-validate','Input must be a valid email');
        event.preventDefault();
    }
}

function hashing1(event) {
    var raw1 = document.getElementById('id_password').value;
    document.getElementById('id_password').value = sha512(raw1);
    // console.log(sha512(raw1));


}

