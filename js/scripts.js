$(document).ready(function () {
    $("form#programming-language").submit(function (event) {
        var days = $("input:radio[name=days]:checked").val();
        var person = $("input:radio[name=person]:checked").val();
        var brand = $("input:radio[name=brand]:checked").val();


        if (days === "1" && person === "1" && brand === "3") {
            $("#two, #three").hide();
            $("#one").show();
        } else if (days === "4" && person === "2" && brand === "2") {
            $("#one, #three").hide();
            $("#two").show();
        } else if (days === "3" && person === "1" && brand === "4") {
            $("#one, #two").hide();
            $("#three").show();
        }

        event.preventDefault();
    });

});
