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

    $("#commaddress").keydown(function (event) {

        var dInput = document.getElementById('commaddress').value;
        var cbox = document.getElementById('permaddress');
        var cInput = cbox.value;
        var k=event.keyCode
        if (event.keyCode === 8) {
            if (cInput === dInput) {
                dInput = dInput.slice(0,-1)
                cbox.value = dInput
            }
        } else if (dInput === cInput) {
            if ((k >= 65 && k <= 90) /* a-z */ || (k >= 48 && k <= 57) /* numbers */ ||(k >= 96 && k <= 111) /* numeric keyboard*/
                || k === 59 || k === 61 || k === 188 || k === 190 || k === 191 || k === 191
                || k === 192 || (k >= 219 && k <= 222) || k === 32 /* Comma's,  etc. */) {
                dInput += event.key;
                cbox.value = dInput
            }

        }

    });


    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })
    });



    var activeItem = $('.bez.active');
    var activeWidth = $(activeItem).innerWidth();
    var activeHeight = $(activeItem).outerHeight();
    var itemPos = $(activeItem).position();
    $(".selector").css({
        "left": itemPos.left + "px",
        "width": activeWidth + "px",
        "height":activeHeight+"px",
        "top":itemPos+"px"
    });
    $(".selector").append( $(".active").clone());


    $(".bez").on("click",function(e){
        e.preventDefault();

        $('.bez').removeClass("active");
        $(this).addClass('active');
        $(".selector").empty()
        var activeWidth = $(this).outerWidth();
        var itemPos = $(this).position();
        var activeHeight = activeItem.outerHeight();
        $(".selector").css({
            "left":itemPos.left + "px",
            "height":activeHeight+"px",
            "width": activeWidth + "px",
            "top":itemPos.top+"px"
        });
        $(".selector").append( $(".active").clone())
    });

    function toggle() {
        $(".selector").empty()

        var activeWidth = $(".active").outerWidth();
        var itemPos = $(".active").position();
        var activeHeight = activeItem.outerHeight();
        $(".selector").css({
            "left":itemPos.left + "px",
            "height":activeHeight+"px",
            "width": activeWidth + "px",
            "top":itemPos.top+"px"
        });
        $(".selector").append( $(".active").clone())
    }


    $('.navbar-toggler').on('click',function(){
        setTimeout(toggle, 500)
    })

    $(window).on("resize",function (e) {
        e.preventDefault();
        $(".selector").empty()

        var activeWidth = $(".active").outerWidth();
        var itemPos = $(".active").position();
        var activeHeight = activeItem.outerHeight();
        $(".selector").css({
            "left":itemPos.left + "px",
            "height":activeHeight+"px",
            "width": activeWidth + "px",
            "top":itemPos.top+"px"
        });
        $(".selector").append( $(".active").clone())
    })

})(jQuery);






