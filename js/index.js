// Total price function 
function getTotal(){
    let totalCost = 1299;

    const memoryCost = parseFloat(document.getElementById('memory-cost').innerText);
    const storageCost = parseFloat(document.getElementById('storage-cost').innerText);
    const deliveryCost = parseFloat(document.getElementById('delivery-cost').innerText);

    const totalCostText = document.getElementById('total-price');
    const totalCostAmount =memoryCost + storageCost + deliveryCost + totalCost;
    totalCostText.innerText = totalCostAmount;

    const total = document.getElementById('total');
    total.innerText = totalCostAmount;

    return totalCostAmount;
}
// total cost after adding promo code function 
function getTotalWithPromoCode(promoCode){
    const promoCodeInputField = document.getElementById('promo-code-input');
    if(promoCodeInputField.value == promoCode){
        const totalPrice = getTotal();
        const total = document.getElementById('total');
        const promoCodeAmount = totalPrice * .2;
        const totalCostAmount = totalPrice - promoCodeAmount;
        total.innerText = totalCostAmount;
        document.getElementById('error-massage').style.display = 'none';
    }
    else{
        document.getElementById('error-massage').style.display = 'block';
        console.log('error massage');
    }
    promoCodeInputField.value = '';

}
// event handler for 8gb memory button 
document.getElementById('8gb-memory-button').addEventListener('click', function(){
    const extraMemory = document.getElementById('memory-cost');
    extraMemory.innerText = 0;
    const totalPrice = getTotal();
});
// event handler for 16gb memory button 
document.getElementById('16gb-memory-button').addEventListener('click', function(){
    const extraMemory = document.getElementById('memory-cost');
    extraMemory.innerText = 180;
    const totalPrice = getTotal();
});
// event handler for 256gb ssd button 
document.getElementById('256gb-ssd-button').addEventListener('click', function(){
    const extraStorage = document.getElementById('storage-cost');
    extraStorage.innerText = 0;
    const totalPrice = getTotal();

});
// event handler for 512gb ssd button 
document.getElementById('512gb-ssd-button').addEventListener('click', function(){
    const extraStorage = document.getElementById('storage-cost');
    extraStorage.innerText = 100;
    const totalPrice = getTotal();

});
// event handler for 1tb ssd button 
document.getElementById('1tb-ssd-button').addEventListener('click', function(){
    const extraStorage = document.getElementById('storage-cost');
    extraStorage.innerText = 180;
    const totalPrice = getTotal();

});
// event handler for free delivery button 
document.getElementById('free-delivery').addEventListener('click', function(){
    const deliveryCharge = document.getElementById('delivery-cost');
    deliveryCharge.innerText = 0;
    const totalPrice = getTotal();
});
// event handler for cost delivery button 
document.getElementById('cost-delivery').addEventListener('click', function(){
    const deliveryCharge = document.getElementById('delivery-cost');
    deliveryCharge.innerText = 20;
    const totalPrice = getTotal();
});
// event handler for promo code button 
document.getElementById('promo-code-button').addEventListener('click', function(){
    const promoCode = 'stevekaku';
    getTotalWithPromoCode(promoCode);
});

