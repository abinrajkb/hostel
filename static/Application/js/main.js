(function ($) {
    'use strict';
    /*==================================================================
        [ Daterangepicker ]*/
    try {
        $('.js-datepicker').daterangepicker({
            "singleDatePicker": true,
            "showDropdowns": true,
            "autoUpdateInput": false,
            locale: {
                format: 'DD/MM/YYYY'
            },
        });

        var myCalendar = $('.js-datepicker');
        console.log(myCalendar)
        var isClick = 0;

        $(window).on('click', function () {
            isClick = 0;
        });

        $(myCalendar).on('apply.daterangepicker', function (ev, picker) {
            isClick = 0;
            $(this).val(picker.startDate.format('DD/MM/YYYY'));

        });

        $('.js-btn-calendar').on('click', function (e) {
            e.stopPropagation();

            if (isClick === 1) isClick = 0;
            else if (isClick === 0) isClick = 1;

            if (isClick === 1) {
                console.log(this);
                $(this).parent().children('.js-datepicker').focus()
            }
        });

        $(myCalendar).on('click', function (e) {
            e.stopPropagation();
            isClick = 1;
        });

        $('.daterangepicker').on('click', function (e) {
            e.stopPropagation();
        });


    } catch (er) {
        console.log(er);
    }
    /*[ Select 2 Config ]
        ===========================================================*/

    try {
        var selectSimple = $('.js-select-simple');

        selectSimple.each(function () {
            var that = $(this);
            var selectBox = that.find('select');
            var selectDropdown = that.find('.select-dropdown');
            selectBox.select2({
                dropdownParent: selectDropdown
            });
        });

    } catch (err) {
        console.log(err);
    }

    $("#Address_For_Communication").on('keydown', function (event) {

        var dInput = document.getElementById('Address_For_Communication').value;
        console.log(dInput)
        var cbox = document.getElementById('Permanent_Address');
        var cInput = cbox.value;
        var k = event.keyCode
        if (event.keyCode === 8) {
            if (cInput === dInput) {
                dInput = dInput.slice(0, -1)
                cbox.value = dInput
            }
        } else if (dInput === cInput) {
            if ((k >= 65 && k <= 90) /* a-z */ || (k >= 48 && k <= 57) /* numbers */ || (k >= 96 && k <= 111) /* numeric keyboard*/
                || k === 59 || k === 61 || k === 188 || k === 190 || k === 191 || k === 191
                || k === 192 || (k >= 219 && k <= 222) || k === 32 /* Comma's,  etc. */) {
                dInput += event.key;
                cbox.value = dInput
            }

        }

    });


    $('.input100').each(function () {
        $(this).on('blur', function () {
            if ($(this).val().trim() != "") {
                $(this).addClass('has-val');
            } else {
                $(this).removeClass('has-val');
            }
        })
    });

    /*==================================================================*/

    var activeItem = $('.bez.active1');
    var activeWidth = $(activeItem).innerWidth();
    var activeHeight = $(activeItem).outerHeight();
    var itemPos = $(activeItem).position();
    $(".selector").css({
        "left": itemPos.left + "px",
        "width": activeWidth + "px",
        "height": activeHeight + "px",
        "top": itemPos + "px"
    });
    $(".selector").append($(".active1").clone());


    $(".bez").on("click", function (e) {
        e.preventDefault();

        $('.bez').removeClass("active1");
        $(this).addClass('active1');
        $(".selector").empty()
        var activeWidth = $(this).outerWidth();
        var itemPos = $(this).position();
        var activeHeight = activeItem.outerHeight();
        $(".selector").css({
            "left": itemPos.left + "px",
            "height": activeHeight + "px",
            "width": activeWidth + "px",
            "top": itemPos.top + "px"
        });
        $(".selector").append($(".active1").clone())
    });

    function toggle() {
        $(".selector").empty()

        var activeWidth = $(".active1").outerWidth();
        var itemPos = $(".active1").position();
        var activeHeight = activeItem.outerHeight();
        $(".selector").css({
            "left": itemPos.left + "px",
            "height": activeHeight + "px",
            "width": activeWidth + "px",
            "top": itemPos.top + "px"
        });
        $(".selector").append($(".active1").clone())
    }

    setInterval(toggle, 400)

    $('.navbar-toggler').on('click', function () {
        setTimeout(toggle, 500)
    })

    $(window).on("resize", function (e) {
        e.preventDefault();
        $(".selector").empty()

        var activeWidth = $(".active1").outerWidth();
        var itemPos = $(".active1").position();
        var activeHeight = activeItem.outerHeight();
        $(".selector").css({
            "left": itemPos.left + "px",
            "height": activeHeight + "px",
            "width": activeWidth + "px",
            "top": itemPos.top + "px"
        });
        $(".selector").append($(".active1").clone())
    })

})(jQuery);


function load_subcategory() {
    var cat = document.getElementById("Category");
    var strUser = cat.options[cat.selectedIndex].value;
    console.log(strUser);
    if (strUser === "OBC") {
        document.getElementById("id_Sub_Category").style.display = "block";
        document.getElementById("subcategory").setAttribute('required', true);
        document.getElementById("subcategory").disabled = false;

    } else {
        document.getElementById("id_Sub_Category").style.display = "none";
        document.getElementById("subcategory").setAttribute("required", false);
        document.getElementById("subcategory").disabled = true;

    }
}

function new_function() {

    var tag = document.getElementsByTagName('input');
    for (i = 0; i < tag.length; i++) {

        tag[i].parentNode.classList.remove("alert-validate");
        if (tag[i].value.length == 0 && !tag[i].hidden) {
            tag[i].parentNode.classList.add("alert-validate");
            console.log(tag[i].name);
        }
    }
    var tag = document.getElementsByTagName('select');
    for (i = 0; i < tag.length; i++) {

        tag[i].parentNode.classList.remove("alert-validate");
        if (tag[i].value.length == 0 && !tag[i].hidden) {
            tag[i].parentNode.classList.add("alert-validate");
            console.log(tag[i].name);
        }
    }
    var tag = document.getElementsByTagName('textarea');
    for (i = 0; i < tag.length; i++) {

        tag[i].parentNode.classList.remove("alert-validate");
        if (tag[i].value.length == 0 && !tag[i].hidden) {
            tag[i].parentNode.classList.add("alert-validate");
            console.log(tag[i].name);
        }
    }

    validate()

}

function validate() {

    num_regex = /^[0-9]*$/;
    pin_regex = /^\d{6}$/;
    numfield = document.getElementById('num').value;
    pinfield = document.getElementById('pin').value;
    document.getElementById('num').parentNode.classList.add("alert-validate");
    document.getElementById('pin').parentNode.classList.add("alert-validate");
    console.log(pinfield.length);
    console.log(numfield.length);
    if (pinfield.length > 0) {
        console.log('haha');
        document.getElementById('pin').parentNode.classList.remove("alert-validate");
        if (!pin_regex.test(pinfield)) {
            console.log('hehe');
            document.getElementById('pin').parentNode.classList.add("alert-validate");
            event.preventDefault();
        }
    }


    if (numfield.length > 0) {
        document.getElementById('num').parentNode.classList.remove("alert-validate");
        if (!num_regex.test(numfield)) {
            document.getElementById('num').parentNode.classList.add("alert-validate");
            event.preventDefault();
        }
    }
}

function load_state() {
    load_subcategory()
    districts = {
        "Andhra Pradesh": ["Anantapur", "Chittoor", "East Godavari", "Guntur",
            "Krishna",
            "Kurnool",
            "Nellore",
            "Prakasam",
            "Srikakulam",
            "Visakhapatnam",
            "Vizianagaram",
            "West Godavari",
            "YSR Kadapa"],
        "Arunachal Pradesh": [
            "Tawang",
            "West Kameng",
            "East Kameng",
            "Papum Pare",
            "Kurung Kumey",
            "Kra Daadi",
            "Lower Subansiri",
            "Upper Subansiri",
            "West Siang",
            "East Siang",
            "Siang",
            "Upper Siang",
            "Lower Siang",
            "Lower Dibang Valley",
            "Dibang Valley",
            "Anjaw",
            "Lohit",
            "Namsai",
            "Changlang",
            "Tirap",
            "Longding"],
        "Assam": [
            "Baksa",
            "Barpeta",
            "Biswanath",
            "Bongaigaon",
            "Cachar",
            "Charaideo",
            "Chirang",
            "Darrang",
            "Dhemaji",
            "Dhubri",
            "Dibrugarh",
            "Goalpara",
            "Golaghat",
            "Hailakandi",
            "Hojai",
            "Jorhat",
            "Kamrup Metropolitan",
            "Kamrup",
            "Karbi Anglong",
            "Karimganj",
            "Kokrajhar",
            "Lakhimpur",
            "Majuli",
            "Morigaon",
            "Nagaon",
            "Nalbari",
            "Dima Hasao",
            "Sivasagar",
            "Sonitpur",
            "South Salmara-Mankachar",
            "Tinsukia",
            "Udalguri",
            "West Karbi Anglong"],
        "Bihar": [
            "Araria",
            "Arwal",
            "Aurangabad",
            "Banka",
            "Begusarai",
            "Bhagalpur",
            "Bhojpur",
            "Buxar",
            "Darbhanga",
            "East Champaran (Motihari)",
            "Gaya",
            "Gopalganj",
            "Jamui",
            "Jehanabad",
            "Kaimur (Bhabua)",
            "Katihar",
            "Khagaria",
            "Kishanganj",
            "Lakhisarai",
            "Madhepura",
            "Madhubani",
            "Munger (Monghyr)",
            "Muzaffarpur",
            "Nalanda",
            "Nawada",
            "Patna",
            "Purnia (Purnea)",
            "Rohtas",
            "Saharsa",
            "Samastipur",
            "Saran",
            "Sheikhpura",
            "Sheohar",
            "Sitamarhi",
            "Siwan",
            "Supaul",
            "Vaishali",
            "West Champaran"],
        "Chandigarh (UT)": [
            "Chandigarh"],
        "Chhattisgarh": [
            "Balod",
            "Baloda Bazar",
            "Balrampur",
            "Bastar",
            "Bemetara",
            "Bijapur",
            "Bilaspur",
            "Dantewada (South Bastar)",
            "Dhamtari",
            "Durg",
            "Gariyaband",
            "Janjgir-Champa",
            "Jashpur",
            "Kabirdham (Kawardha)",
            "Kanker (North Bastar)",
            "Kondagaon",
            "Korba",
            "Korea (Koriya)",
            "Mahasamund",
            "Mungeli",
            "Narayanpur",
            "Raigarh",
            "Raipur",
            "Rajnandgaon",
            "Sukma",
            "Surajpur  ",
            "Surguja"],
        "Dadra and Nagar Haveli (UT)": [
            "Dadra & Nagar Haveli"],
        "Daman and Diu (UT)": [
            "Daman",
            "Diu"],
        "Delhi (NCT)": [
            "Central Delhi",
            "East Delhi",
            "New Delhi",
            "North Delhi",
            "North East  Delhi",
            "North West  Delhi",
            "Shahdara",
            "South Delhi",
            "South East Delhi",
            "South West  Delhi",
            "West Delhi"],
        "Goa": [
            "North Goa",
            "South Goa"],
        "Gujarat": [
            "Ahmedabad",
            "Amreli",
            "Anand",
            "Aravalli",
            "Banaskantha (Palanpur)",
            "Bharuch",
            "Bhavnagar",
            "Botad",
            "Chhota Udepur",
            "Dahod",
            "Dangs (Ahwa)",
            "Devbhoomi Dwarka",
            "Gandhinagar",
            "Gir Somnath",
            "Jamnagar",
            "Junagadh",
            "Kachchh",
            "Kheda (Nadiad)",
            "Mahisagar",
            "Mehsana",
            "Morbi",
            "Narmada (Rajpipla)",
            "Navsari",
            "Panchmahal (Godhra)",
            "Patan",
            "Porbandar",
            "Rajkot",
            "Sabarkantha (Himmatnagar)",
            "Surat",
            "Surendranagar",
            "Tapi (Vyara)",
            "Vadodara",
            "Valsad"],
        "Haryana": [
            "Ambala",
            "Bhiwani",
            "Charkhi Dadri",
            "Faridabad",
            "Fatehabad",
            "Gurgaon",
            "Hisar",
            "Jhajjar",
            "Jind",
            "Kaithal",
            "Karnal",
            "Kurukshetra",
            "Mahendragarh",
            "Mewat",
            "Palwal",
            "Panchkula",
            "Panipat",
            "Rewari",
            "Rohtak",
            "Sirsa",
            "Sonipat",
            "Yamunanagar"],
        'Himachal Pradesh': [
            "Bilaspur",
            "Chamba",
            "Hamirpur",
            "Kangra",
            "Kinnaur",
            "Kullu",
            "Lahaul &amp; Spiti",
            "Mandi",
            "Shimla",
            "Sirmaur (Sirmour)",
            "Solan",
            "Una"],
        "Jammu and Kashmir": [
            "Anantnag",
            "Bandipore",
            "Baramulla",
            "Budgam",
            "Doda",
            "Ganderbal",
            "Jammu",
            "Kargil",
            "Kathua",
            "Kishtwar",
            "Kulgam",
            "Kupwara",
            "Leh",
            "Poonch",
            "Pulwama",
            "Rajouri",
            "Ramban",
            "Reasi",
            "Samba",
            "Shopian",
            "Srinagar",
            "Udhampur"],
        "Jharkhand": [
            "Bokaro",
            "Chatra",
            "Deoghar",
            "Dhanbad",
            "Dumka",
            "East Singhbhum",
            "Garhwa",
            "Giridih",
            "Godda",
            "Gumla",
            "Hazaribag",
            "Jamtara",
            "Khunti",
            "Koderma",
            "Latehar",
            "Lohardaga",
            "Pakur",
            "Palamu",
            "Ramgarh",
            "Ranchi",
            "Sahibganj",
            "Seraikela-Kharsawan",
            "Simdega",
            "West Singhbhum"],
        "Karnataka": [
            "Bagalkot",
            "Ballari (Bellary)",
            "Belagavi (Belgaum)",
            "Bengaluru (Bangalore) Rural",
            "Bengaluru (Bangalore) Urban",
            "Bidar",
            "Chamarajanagar",
            "Chikballapur",
            "Chikkamagaluru (Chikmagalur)",
            "Chitradurga",
            "Dakshina Kannada",
            "Davangere",
            "Dharwad",
            "Gadag",
            "Hassan",
            "Haveri",
            "Kalaburagi (Gulbarga)",
            "Kodagu",
            "Kolar",
            "Koppal",
            "Mandya",
            "Mysuru (Mysore)",
            "Raichur",
            "Ramanagara",
            "Shivamogga (Shimoga)",
            "Tumakuru (Tumkur)",
            "Udupi",
            "Uttara Kannada (Karwar)",
            "Vijayapura (Bijapur)",
            "Yadgir"],
        "Kerala": [
            "Alappuzha",
            "Ernakulam",
            "Idukki",
            "Kannur",
            "Kasaragod",
            "Kollam",
            "Kottayam",
            "Kozhikode",
            "Malappuram",
            "Palakkad",
            "Pathanamthitta",
            "Thiruvananthapuram",
            "Thrissur",
            "Wayanad"],
        "Lakshadweep (UT)": [
            "Agatti",
            "Amini",
            "Androth",
            "Bithra",
            "Chethlath",
            "Kavaratti",
            "Kadmath",
            "Kalpeni",
            "Kilthan",
            "Minicoy"],
        "Madhya Pradesh": [
            "Agar Malwa",
            "Alirajpur",
            "Anuppur",
            "Ashoknagar",
            "Balaghat",
            "Barwani",
            "Betul",
            "Bhind",
            "Bhopal",
            "Burhanpur",
            "Chhatarpur",
            "Chhindwara",
            "Damoh",
            "Datia",
            "Dewas",
            "Dhar",
            "Dindori",
            "Guna",
            "Gwalior",
            "Harda",
            "Hoshangabad",
            "Indore",
            "Jabalpur",
            "Jhabua",
            "Katni",
            "Khandwa",
            "Khargone",
            "Mandla",
            "Mandsaur",
            "Morena",
            "Narsinghpur",
            "Neemuch",
            "Panna",
            "Raisen",
            "Rajgarh",
            "Ratlam",
            "Rewa",
            "Sagar",
            "Satna",
            "Sehore",
            "Seoni",
            "Shahdol",
            "Shajapur",
            "Sheopur",
            "Shivpuri",
            "Sidhi",
            "Singrauli",
            "Tikamgarh",
            "Ujjain",
            "Umaria",
            "Vidisha"],
        "Maharashtra": [
            "Ahmednagar",
            "Akola",
            "Amravati",
            "Aurangabad",
            "Beed",
            "Bhandara",
            "Buldhana",
            "Chandrapur",
            "Dhule",
            "Gadchiroli",
            "Gondia",
            "Hingoli",
            "Jalgaon",
            "Jalna",
            "Kolhapur",
            "Latur",
            "Mumbai City",
            "Mumbai Suburban",
            "Nagpur",
            "Nanded",
            "Nandurbar",
            "Nashik",
            "Osmanabad",
            "Palghar",
            "Parbhani",
            "Pune",
            "Raigad",
            "Ratnagiri",
            "Sangli",
            "Satara",
            "Sindhudurg",
            "Solapur",
            "Thane",
            "Wardha",
            "Washim",
            "Yavatmal"],
        "Manipur": [
            "Bishnupur",
            "Chandel",
            "Churachandpur",
            "Imphal East",
            "Imphal West",
            "Jiribam",
            "Kakching",
            "Kamjong",
            "Kangpokpi",
            "Noney",
            "Pherzawl",
            "Senapati",
            "Tamenglong",
            "Tengnoupal",
            "Thoubal",
            "Ukhrul"],
        "Meghalaya": [
            "East Garo Hills",
            "East Jaintia Hills",
            "East Khasi Hills",
            "North Garo Hills",
            "Ri Bhoi",
            "South Garo Hills",
            "South West Garo Hills ",
            "South West Khasi Hills",
            "West Garo Hills",
            "West Jaintia Hills",
            "West Khasi Hills"],
        "Mizoram": [
            "Aizawl",
            "Champhai",
            "Kolasib",
            "Lawngtlai",
            "Lunglei",
            "Mamit",
            "Saiha",
            "Serchhip"],
        "Nagaland": [
            "Dimapur",
            "Kiphire",
            "Kohima",
            "Longleng",
            "Mokokchung",
            "Mon",
            "Peren",
            "Phek",
            "Tuensang",
            "Wokha",
            "Zunheboto"],
        "Odisha": [
            "Angul",
            "Balangir",
            "Balasore",
            "Bargarh",
            "Bhadrak",
            "Boudh",
            "Cuttack",
            "Deogarh",
            "Dhenkanal",
            "Gajapati",
            "Ganjam",
            "Jagatsinghapur",
            "Jajpur",
            "Jharsuguda",
            "Kalahandi",
            "Kandhamal",
            "Kendrapara",
            "Kendujhar (Keonjhar)",
            "Khordha",
            "Koraput",
            "Malkangiri",
            "Mayurbhanj",
            "Nabarangpur",
            "Nayagarh",
            "Nuapada",
            "Puri",
            "Rayagada",
            "Sambalpur",
            "Sonepur",
            "Sundargarh"],
        "Puducherry (UT)": [
            "Karaikal",
            "Mahe",
            "Pondicherry",
            "Yanam"],
        "Punjab": [
            "Amritsar",
            "Barnala",
            "Bathinda",
            "Faridkot",
            "Fatehgarh Sahib",
            "Fazilka",
            "Ferozepur",
            "Gurdaspur",
            "Hoshiarpur",
            "Jalandhar",
            "Kapurthala",
            "Ludhiana",
            "Mansa",
            "Moga",
            "Muktsar",
            "Nawanshahr (Shahid Bhagat Singh Nagar)",
            "Pathankot",
            "Patiala",
            "Rupnagar",
            "Sahibzada Ajit Singh Nagar (Mohali)",
            "Sangrur",
            "Tarn Taran"],
        "Rajasthan": [
            "Ajmer",
            "Alwar",
            "Banswara",
            "Baran",
            "Barmer",
            "Bharatpur",
            "Bhilwara",
            "Bikaner",
            "Bundi",
            "Chittorgarh",
            "Churu",
            "Dausa",
            "Dholpur",
            "Dungarpur",
            "Hanumangarh",
            "Jaipur",
            "Jaisalmer",
            "Jalore",
            "Jhalawar",
            "Jhunjhunu",
            "Jodhpur",
            "Karauli",
            "Kota",
            "Nagaur",
            "Pali",
            "Pratapgarh",
            "Rajsamand",
            "Sawai Madhopur",
            "Sikar",
            "Sirohi",
            "Sri Ganganagar",
            "Tonk",
            "Udaipur"],
        "Sikkim": [
            "East Sikkim",
            "North Sikkim",
            "South Sikkim",
            "West Sikkim"],
        "Tamil Nadu": [
            "Ariyalur",
            "Chennai",
            "Coimbatore",
            "Cuddalore",
            "Dharmapuri",
            "Dindigul",
            "Erode",
            "Kanchipuram",
            "Kanyakumari",
            "Karur",
            "Krishnagiri",
            "Madurai",
            "Nagapattinam",
            "Namakkal",
            "Nilgiris",
            "Perambalur",
            "Pudukkottai",
            "Ramanathapuram",
            "Salem",
            "Sivaganga",
            "Thanjavur",
            "Theni",
            "Thoothukudi (Tuticorin)",
            "Tiruchirappalli",
            "Tirunelveli",
            "Tiruppur",
            "Tiruvallur",
            "Tiruvannamalai",
            "Tiruvarur",
            "Vellore",
            "Viluppuram",
            "Virudhunagar"],
        "Telangana": [
            "Adilabad",
            "Bhadradri Kothagudem",
            "Hyderabad",
            "Jagtial",
            "Jangaon",
            "Jayashankar Bhoopalpally",
            "Jogulamba Gadwal",
            "Kamareddy",
            "Karimnagar",
            "Khammam",
            "Komaram Bheem Asifabad",
            "Mahabubabad",
            "Mahabubnagar",
            "Mancherial",
            "Medak",
            "Medchal",
            "Nagarkurnool",
            "Nalgonda",
            "Nirmal",
            "Nizamabad",
            "Peddapalli",
            "Rajanna Sircilla",
            "Rangareddy",
            "Sangareddy",
            "Siddipet",
            "Suryapet",
            "Vikarabad",
            "Wanaparthy",
            "Warangal (Rural)",
            "Warangal (Urban)",
            "Yadadri Bhuvanagiri"],
        "Tripura": [
            "Dhalai",
            "Gomati",
            "Khowai",
            "North Tripura",
            "Sepahijala",
            "South Tripura",
            "Unakoti",
            "West Tripura"],
        "Uttarakhand": [
            "Almora",
            "Bageshwar",
            "Chamoli",
            "Champawat",
            "Dehradun",
            "Haridwar",
            "Nainital",
            "Pauri Garhwal",
            "Pithoragarh",
            "Rudraprayag",
            "Tehri Garhwal",
            "Udham Singh Nagar",
            "Uttarkashi"],
        "Uttar Pradesh": [
            "Agra",
            "Aligarh",
            "Allahabad",
            "Ambedkar Nagar",
            "Amethi (Chatrapati Sahuji Mahraj Nagar)",
            "Amroha (J.P. Nagar)",
            "Auraiya",
            "Azamgarh",
            "Baghpat",
            "Bahraich",
            "Ballia",
            "Balrampur",
            "Banda",
            "Barabanki",
            "Bareilly",
            "Basti",
            "Bhadohi",
            "Bijnor",
            "Budaun",
            "Bulandshahr",
            "Chandauli",
            "Chitrakoot",
            "Deoria",
            "Etah",
            "Etawah",
            "Faizabad",
            "Farrukhabad",
            "Fatehpur",
            "Firozabad",
            "Gautam Buddha Nagar",
            "Ghaziabad",
            "Ghazipur",
            "Gonda",
            "Gorakhpur",
            "Hamirpur",
            "Hapur (Panchsheel Nagar)",
            "Hardoi",
            "Hathras",
            "Jalaun",
            "Jaunpur",
            "Jhansi",
            "Kannauj",
            "Kanpur Dehat",
            "Kanpur Nagar",
            "Kanshiram Nagar (Kasganj)",
            "Kaushambi",
            "Kushinagar (Padrauna)",
            "Lakhimpur - Kheri",
            "Lalitpur",
            "Lucknow",
            "Maharajganj",
            "Mahoba",
            "Mainpuri",
            "Mathura",
            "Mau",
            "Meerut",
            "Mirzapur",
            "Moradabad",
            "Muzaffarnagar",
            "Pilibhit",
            "Pratapgarh",
            "RaeBareli",
            "Rampur",
            "Saharanpur",
            "Sambhal (Bhim Nagar)",
            "Sant Kabir Nagar",
            "Shahjahanpur",
            "Shamali (Prabuddh Nagar)",
            "Shravasti",
            "Siddharth Nagar",
            "Sitapur",
            "Sonbhadra",
            "Sultanpur",
            "Unnao",
            "Varanasi"],
        "West Bengal": [
            "Alipurduar",
            "Bankura",
            "Birbhum",
            "Burdwan (Bardhaman)",
            "Cooch Behar",
            "Dakshin Dinajpur (South Dinajpur)",
            "Darjeeling",
            "Hooghly",
            "Howrah",
            "Jalpaiguri",
            "Kalimpong",
            "Kolkata",
            "Malda",
            "Murshidabad",
            "Nadia",
            "North 24 Parganas",
            "Paschim Medinipur (West Medinipur)",
            "Purba Medinipur (East Medinipur)",
            "Purulia",
            "South 24 Parganas",
            "Uttar Dinajpur (North Dinajpur)"]

    };

    console.log(districts)
    var state_select = document.getElementById("state");
    var i;
    for (i in districts) {
        var options = document.createElement("option");
        options.text = i;
        options.value = i;
        state_select.add(options);
    }
    load_district()
}


function load_district() {

    var district = document.getElementById("district");
    var i;
    district.innerHTML = "";
    var d = document.getElementById("state");
    var st = d.options[d.selectedIndex].value;
    for (i in districts[st]) {
        var options = document.createElement("option");
        options.text = districts[st][i];
        options.value = districts[st][i];
        district.add(options);
    }
}

function load_dept() {

    load_state();
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

    load_course()

}

function load_course() {

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
            "Civil Engg.(B.Tech)",
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
        var options = document.createElement("option");
        options.text = courses[dep][i];
        options.value = courses[dep][i];
        course.add(options);
    }
}



