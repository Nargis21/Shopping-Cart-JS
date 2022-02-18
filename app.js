// Main function of this project
function updateProductNumber(product, isAdd, price) {
    const inputField = document.getElementById(product + '-number');
    let inputValue = inputField.value;
    if (isAdd) {
        inputValue = parseInt(inputValue) + 1;
    }
    else if (inputValue > 0) {
        inputValue = parseInt(inputValue) - 1;
    }
    // Get total number of case or phones
    inputField.value = inputValue;
    const phonePrice = document.getElementById(product + '-total');
    phonePrice.innerText = price * inputValue;
    calculationTotal();
}
// Get input for calculation case or phone number
function getInput(product) {
    const inputField = document.getElementById(product + '-number');
    const inputValue = parseInt(inputField.value);
    return inputValue;
}
// Final calculation Total
function calculationTotal() {
    const phoneTotal = getInput('phone');
    const phoneTotalPrice = phoneTotal * 1219;
    const caseTotal = getInput('case');
    const caseTotalPrice = caseTotal * 59;
    const subTotal = phoneTotalPrice + caseTotalPrice;
    const taxAmount = subTotal / 10;
    const totalPrice = subTotal + taxAmount;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = taxAmount;
    document.getElementById('total-price').innerText = totalPrice;

}


document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', false, 1219)
})
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', true, 1219)
})
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', true, 59);
})
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', false, 59);
})

