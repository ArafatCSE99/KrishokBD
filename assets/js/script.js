function GetTodaysMarketPrice()
{
    $("#Content").hide(300);

    $.get("API/GetTodaysMarketPrice.php", function(data, status){
        $("#Content").html(data);
        $("#Content").show(300);
    });
}

function GetPaddy() 
{
    $("#Content").hide(300);

    $.get("API/GetPaddy.php", function(data, status){
        $("#Content").html(data);
        $("#Content").show(300);
    });
}
