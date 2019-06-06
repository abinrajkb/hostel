function load_data() {
    var dept = document.getElementById("dept").value;
    var course = document.getElementById("course").value;
    var gender = document.getElementById("gender").value;
    var csrf = document.getElementsByName("csrfmiddlewaretoken")[0].value;
    $.ajax("/office/getdata/", {
        method: "post",
        data: {
            dept: dept,
            course: course,
            gender: gender,
            csrfmiddlewaretoken: csrf,
        },

        success: function (data) {

            $("#minimal-tbody").html(data);


            $(".allotment_submit").on("click", function () {
                var select = $($(this).parent().parent()).children(".rs-select2").children(".hostel").val();
                var reg = $($(this).parent().parent()).children(".reg_no").text();
                var ischeck = $($(this).parent().parent()).children(".allot").children(".cont1").children(".alloted").is(":checked");
                var room = $($(this).parent().parent()).children(".room_no").children(".room").val();
                $.ajax("/office/savedata/", {
                    method: "post",
                    data: {
                        select: select,
                        reg: reg,
                        ischeck: ischeck,
                        room: room,
                        csrfmiddlewaretoken: csrf
                    }
                });

            });
        }
    });
}


function load_course_and_date() {
    load_courses();
    load_data();

}

function changeColor(btn) {
    var ischeck = $($(btn).parent().parent()).children(".allot").children(".cont1").children(".alloted").is(":checked");
    var select = $($(btn).parent().parent()).children(".rs-select2").children(".hostel").val();
    if (ischeck) {
        if (select != null) {
            console.log(ischeck);
            btn.style.backgroundColor = "#b5b3b2";
        }
    } else {
        btn.style.backgroundColor = "#57b846";
    }

}

function load_dept_office() {

    var departments = [
        "DDU Kaushal Kendras (DDUKK)",
        "Department of Applied Chemistry",
        "Department of Applied Economics",
        "Department of Atmospheric Sciences",
        "Department of Biotechnology",
        "Department of Chemical Oceanography",
        "Department of Computer Applications",
        "Department of Computer Science",
        "Department of Electronics",
        "Department of Hindi",
        "Department of Instrumentation",
        "Department of Marine Biology, Microbiology and Biochemistry",
        "Department of Marine Geology and Geophysics",
        "Department of Mathematics",
        "Department of Physical Oceanography",
        "Department of Physics",
        "Department of Polymer Science and Rubber Technology",
        "Department of Ship Technology",
        "Department of Statistics",
        "Inter University Centre for IPR Studies (IUCIPRS)",
        "International School of Photonics",
        "National Centre for Aquatic Animal Health (NCAAH)",
        "School of Engineering",
        "School of Environmental Studies",
        "School of Industrial Fisheries",
        "School of Legal Studies",
        "School of Management Studies"];
    var dept_select = document.getElementById("dept");
    var i;
    for (i in departments) {
        var options = document.createElement("option");
        options.text = departments[i];
        options.value = departments[i];
        dept_select.add(options);
    }

    load_courses()

}

function load_courses() {
    var courses = {
        "DDU Kaushal Kendras (DDUKK)": ["M.Voc", "B.Voc"],
        "Department of Applied Chemistry": ["M.Sc", "Integrated M.Sc", "M.Phil", "Ph.D"],
        "Department of Applied Economics": ["M.A", "M.Phil", "Ph.D"],
        "Department of Atmospheric Sciences": ["M.Sc", "M.Tech", "Ph.D"],
        "Department of Biotechnology": ["M.Sc", "Ph.D"],
        "Department of Chemical Oceanography": ["M.Sc", "M.Phil", "Ph.D"],
        "Department of Computer Applications": ["MCA", "MSc", "Ph.D"],
        "Department of Computer Science": ["M.Tech", "Ph.D"],
        "Department of Electronics": ["M.Sc", "M.Tech", "Ph.D"],
        "Department of Hindi": ["M.A", "M.Phil", "Ph.D"],
        "Department of Instrumentation": ["B.Tech", "M.Tech", "M.Sc", "Ph.D"],
        "Department of Marine Biology, Microbiology and Biochemistry": ["M.Sc", "M.Tech", "Ph.D"],
        "Department of Marine Geology and Geophysics": ["M.Sc", "Ph.D"],
        "Department of Mathematics": ["M.Sc", "M.Phil", "Ph.D"],
        "Department of Physical Oceanography": ["M.Sc", "M.Tech", "Ph.D"],
        "Department of Physics": ["M.Sc", "M.Phil", "Ph.D"],
        "Department of Polymer Science and Rubber Technology": ["B.Tech", "M.Tech", "Ph.D"],
        "Department of Ship Technology": ["B.Tech", "M.Tech"],
        "Department of Statistics": ["M.Sc", "M.Tech", "Ph.D"],
        "Inter University Centre for IPR Studies (IUCIPRS)": ["LLM", "Ph.D"],
        "International School of Photonics": ["Integrated M.Sc", "Ph.D"],
        "National Centre for Aquatic Animal Health (NCAAH)": ["M.Tech", "Ph.D"],
        "School of Engineering": ["Civil Engg.(B.Tech)",
            "Computer Science & Engg.(B.Tech)",
            "Electrical and Electronics Engg.(B.Tech)",
            "Electronics & Communication Engg.(B.Tech)",
            "Information Technology(B.Tech)",
            "Mechanical Engg.(B.Tech)",
            "Safety & Fire Engg(B.Tech)",
            "Civil Engg.(M.Tech)",
            "Computer Science & Engg.(M.Tech)",
            "Electrical and Electronics Engg.(M.Tech)",
            "Electronics & Communication Engg.(M.Tech)",
            "Information Technology(M.Tech)",
            "Mechanical Engg.(M.Tech)",
            "Safety & Fire Engg(M.Tech)"],
        "School of Environmental Studies": ["M.Sc", "M.Tech", "Ph.D"],
        "School of Industrial Fisheries": ["M.Sc", "M.Phil", "Ph.D"],
        "School of Legal Studies": ["LLB", "LLM"],
        "School of Management Studies": ["MBA", "Ph.D"]
    };
    var course = document.getElementById("course");
    var i;
    course.innerHTML = "";
    var d = document.getElementById("dept");
    var dep = d.options[d.selectedIndex].value;
    for (i in courses[dep]) {
        var divs = `<div class="row d-flex text-left">
                        <div class="col col-md-1 ">
                            <input type="checkbox" value="` + courses[dep][i] + `">
                        </div>
                        <div class="col col-md-11">
                            ` + courses[dep][i] + `
                        </div>
                    </div>`;

        course.innerHTML += (divs);
    }
    // options = document.createElement("option");
    // options.text = "other";
    // options.value = "other";
    //
    // course.appendChild(options);
    // if (dep === "other") {
    //     for (i in courses[dep]) {
    //         options = document.createElement("option");
    //         options.text = courses[dep][i];
    //         options.value = courses[dep][i];
    //         course.add(options);
    //     }
    //     var elem = document.getElementById('dept_oth');
    //     elem.style.display = 'block';
    //     course_option()
    // }


}

function course_option() {
    var course = document.getElementById("course").value;
    if (course === "other") {
        var elem = document.getElementById('course_oth');
        elem.style.display = 'block'
    }

}

function hashing() {
    console.log('hiii');
    var raw1 = document.getElementById('password1').value;
    var raw2 = document.getElementById('password2').value;
    console.log(raw1);
    console.log(raw2);
    // var username = document.getElementById('username').value;
    //
    // var tag = document.getElementsByTagName('input');
    // for (i = 0; i < tag.length; i++) {
    //
    //     tag[i].parentNode.classList.remove("alert-validate");
    // }
    //
    // document.getElementById('RegistrationForm').setAttribute("isvalid", "true");
    // if (email_regex.test(username)) {
    //     if (regex.test(raw1)) {
    //         if (raw1 !== raw2) {
    //             document.getElementById('id_password2').parentNode.classList.add("alert-validate");
    //             document.getElementById('id_password2').parentNode.setAttribute('data-validate', 'Passwords must be same');
    //             event.preventDefault();
    //         } else {
    //             document.getElementById('id_password1').value = sha512(raw1);
    //             document.getElementById('id_password2').value = sha512(raw2);
    //             document.getElementById('RegistrationForm').submit()
    //         }
    //
    //     } else {
    //         document.getElementById('id_password1').parentNode.classList.add("alert-validate");
    //
    //         document.getElementById('id_password1').parentNode.setAttribute('data-validate', 'Password Must be atleast 8 characters long, must include atleast a character  and a digit or special characters');
    //         event.preventDefault();
    //     }
    // } else {
    //     document.getElementById('username').parentNode.classList.add("alert-validate");
    //
    //     document.getElementById('username').parentNode.setAttribute('data-validate', 'Input must be a valid email');
    //     event.preventDefault();
    // }
}





load_dept_office()
