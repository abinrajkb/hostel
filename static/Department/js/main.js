$(document).ready(function () {
    $(".checkmark").on('change', function () {
        create_send_data(this)
    });

    $(".checkmark1").on('change', function () {
        create_send_data(this)
    });

    $(".checkmark2").on('change', function () {
        create_send_data(this)
    });
    $(".login100-form-btn").on('click', function () {

    });
});

$(document).ready(function () {
    $("#myInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#minimal-tbody tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

function create_send_data(object) {
    var row = $(object).parent().parent().parent();
    var reg_no = row.children(".reg_no").text();
    var pincode = row.children(".pincode").children().val();

    var attendance = row.children(".attendance").children().children().is(":checked");
    var year_back = row.children(".year_back").children().children().is(":checked");
    var category = row.children(".category").children().children().is(":checked");
    console.log(reg_no);

}