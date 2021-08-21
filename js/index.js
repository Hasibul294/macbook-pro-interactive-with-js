// set customize cost value 
function setCustomizeCost(checkMemory){
    // 8gb memory button 
    if(checkMemory == document.getElementById('8gb-memory-button').innerText){
        const extraMemory = document.getElementById('memory-cost');
        extraMemory.innerText = 0;
        getTotal();
    }
    // 16gb memory button 
    else if(checkMemory == document.getElementById('16gb-memory-button').innerText){
        const extraMemory = document.getElementById('memory-cost');
        extraMemory.innerText = 180;
        getTotal();
    }
    // 256gb ssd button
    else if(checkMemory == document.getElementById('256gb-ssd-button').innerText){
        const extraStorage = document.getElementById('storage-cost');
        extraStorage.innerText = 0;
        getTotal();
    }
    // 512gb ssd button
    else if(checkMemory == document.getElementById('512gb-ssd-button').innerText){
        const extraStorage = document.getElementById('storage-cost');
        extraStorage.innerText = 100;
        getTotal();
    }
    // 1tgb ssd button
    else if(checkMemory == document.getElementById('1tb-ssd-button').innerText){
        const extraStorage = document.getElementById('storage-cost');
        extraStorage.innerText = 180;
        getTotal();
    }
    // free delivery button
    else if(checkMemory == document.getElementById('free-delivery').innerText){
        const extraStorage = document.getElementById('delivery-cost');
        extraStorage.innerText = 0;
        getTotal();
    }
    // cost delivery button
    else if(checkMemory == document.getElementById('cost-delivery').innerText){
        const extraStorage = document.getElementById('delivery-cost');
        extraStorage.innerText = 20;
        getTotal();
    }
}
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
// event handler for all button 
document.getElementById('all-button').addEventListener('click', function(event){
    const checkMemory = event.target.innerText;
    setCustomizeCost(checkMemory);
});
// event handler for promo code button 
document.getElementById('promo-code-button').addEventListener('click', function(){
    const promoCode = 'stevekaku';
    getTotalWithPromoCode(promoCode);
});