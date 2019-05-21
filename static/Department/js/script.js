// var xhrObject = new XMLHttpRequest();
//
// xhrObject.onreadystatechange = function() {
//     if (xhrObject.readyState === 4) {
//         if (xhrObject.status === 200 || xhrObject.status === 304) {
//
//             console.log(l);
//
//         }
//     }
// };
//
// xhrObject.open(
//     "GET",
//     "https://codepen.io/chriscoyier/pen/difoC.html",
//     true
// );
// xhrObject.send();
//

//





l = [
    {
        "regno": 0,
        "name": "English",
        "pin": 682033,
        "att": true,
        "year_back": false,
        "cat":true

    },
    {
        "regno": 1,
        "name": "Spanish",
        "pin": 682011,
        "att": true,
        "year_back": false,
        "cat":true
    },
    {
        "regno": 2,
        "name": "Portuguese",
        "pin": 856011,
        "att": true,
        "year_back": false,
        "cat":true
    },
    {
        "regno": 3,
        "name": "Galician Language",
        "pin": 888888,
        "att": true,
        "year_back": false,
        "cat":true
    },
    {
        "regno": 4,
        "name": "French",
        "pin": 111111,
        "att": true,
        "year_back": false,
        "cat":true
    },
    {
        "regno": 5,
        "name": "German",
        "pin": 222222,
        "att": true,
        "year_back": false,
        "cat":true
    },
    {
        "regno": 6,
        "name": "Russian",
        "pin": 6811111,
        "att": true,
        "year_back": false,
        "cat":true
    }
]



function populate() {
    tbody = document.getElementById("minimal-tbody");
    for (var i = 0; i < l.length; i++) {
        s = `<td style="" class="reg_no">`+l[i].regno+`</td>
                <td style="">`+l[i].name+`</td>
                <td style=""><input type="number"> </td>

                <td style=""><label class="cont" >
                <input type="checkbox" checked="checked">
                <span class="checkmark"></span></label></td>


                <td style=""><label class="cont1" >
                <input type="checkbox" >
                <span class="checkmark1"></span></label></td>
                
                
                
                <td style=""><label class="cont2">GEN
                <input type="checkbox" checked="checked">
                <span class="checkmark2"></span></label></td>
                
                
                <td style=""><button class="login100-form-btn" id="button_submit" onclick="submitted()">Submit</button> </td>`
        tbody.innerHTML+=s
    }

}
populate()

// <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js">
//     $(".checkmark").on('click',function () {
//         console.log(this.checked)
//     })
//     </script>

// function submitted() {
//     btn=document.getElementsByClassName("login100-form-btn")
//     i=$(this).parent().parent().children('.reg_no')
//
//     console.log(i)
//
//     console.log($(i).parent().parent().children(button_submit).text)
//
//
//     btn.style.backgroundColor="grey"
// }