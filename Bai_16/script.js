$(document).ready(function(){

    let count = 0;

    function updateCounter(){
        $("#counter").text(count);

        if(count > 0){
            $("#counter").css("color", "green");
        }
        else if(count < 0){
            $("#counter").css("color", "red");
        }
        else{
            $("#counter").css("color", "black");
        }
    }

    $("#increase").click(function(){
        count++;
        updateCounter();
    });

    $("#decrease").click(function(){
        count--;
        updateCounter();
    });

    $("#reset").click(function(){
        count = 0;
        updateCounter();
    });

    $("#increase10").click(function(){
        count += 10;
        updateCounter();
    });

});