$(document).ready(function () {
    $("form#programming-language").submit(function (event) {
        var code = $("input:radio[name=code]:checked").val();
        var person = $("input:radio[name=person]:checked").val();
        var app = $("input:radio[name=app]:checked").val();
        var system = $("input:radio[name=system]:checked").val();
        var city = $("input:radio[name=city]:checked").val();


        if (code === "1" && person === "1" && app === "2") {
            $("#two, #three").hide();
            $("#one").show();
        } else if (code === "4" && person === "2" && app === "2") {
            $("#one, #three").hide();
            $("#two").show();
        } else if (code === "3" && person === "1" && app === "1") {
            $("#one, #two").hide();
            $("#three").show();
        } else if (code === "3" && person === "1" && city === "1") {
            $("#one, #two").hide();
            $("#three").show();
        }
        event.preventDefault();
    });

});
