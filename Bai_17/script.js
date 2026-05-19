$(document).ready(function(){

    function updateBill(){

        let finalTotal = 0;

        $(".product").each(function(){

            let price = parseInt($(this).attr("data-price"));

            let quantity =
                parseInt($(this).find(".quantity").text());

            let total = price * quantity;

            $(this).find(".total").text(total);

            finalTotal += total;
        });

        $("#finalTotal").text(finalTotal);
    }

    $(".plus").click(function(){

        let quantityElement =
            $(this).siblings(".quantity");

        let quantity =
            parseInt(quantityElement.text());

        quantity++;

        quantityElement.text(quantity);

        updateBill();
    });

    $(".minus").click(function(){

        let quantityElement =
            $(this).siblings(".quantity");

        let quantity =
            parseInt(quantityElement.text());

        if(quantity > 1){
            quantity--;
        }

        quantityElement.text(quantity);

        updateBill();
    });

});