function getTotal(){
    let totalCost = 1299;  
    const memoryCost = parseFloat(document.getElementById('memory-cost').innerText);
    const storageCost = parseFloat(document.getElementById('storage-cost').innerText);
    const deliveryCost = parseFloat(document.getElementById('delivery-cost').innerText);
    const totalCostText = document.getElementById('total-cost');
    const totalCostAmount =memoryCost + storageCost + deliveryCost + totalCost;
    totalCostText.innerText = totalCostAmount;
    return totalCostAmount;
}
document.getElementById('8gb-memory-button').addEventListener('click', function(){
    const extraMemory = document.getElementById('memory-cost');
    extraMemory.innerText = 0;
    const totalPrice = getTotal();
});

document.getElementById('16gb-memory-button').addEventListener('click', function(){
    const extraMemory = document.getElementById('memory-cost');
    extraMemory.innerText = 180;
    const totalPrice = getTotal();
});

document.getElementById('256gb-ssd-button').addEventListener('click', function(){
    const extraStorage = document.getElementById('storage-cost');
    extraStorage.innerText = 0;
    const totalPrice = getTotal();

});

document.getElementById('512gb-ssd-button').addEventListener('click', function(){
    const extraStorage = document.getElementById('storage-cost');
    extraStorage.innerText = 100;
    const totalPrice = getTotal();

});

document.getElementById('1tb-ssd-button').addEventListener('click', function(){
    const extraStorage = document.getElementById('storage-cost');
    extraStorage.innerText = 180;
    const totalPrice = getTotal();

});

document.getElementById('free-delivery').addEventListener('click', function(){
    const deliveryCharge = document.getElementById('delivery-cost');
    deliveryCharge.innerText = 0;
    const totalPrice = getTotal();
});

document.getElementById('cost-delivery').addEventListener('click', function(){
    const deliveryCharge = document.getElementById('delivery-cost');
    deliveryCharge.innerText = 20;
    const totalPrice = getTotal();
});

