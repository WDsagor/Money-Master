
// Expenses calculate & value update
document.getElementById('costCal').addEventListener("click", function(){
    const incomeAmout = document.getElementById('incomeValue');
    const totalIncomeAmout = parseInt(incomeAmout.value);
    const toatalFoodCost = convertValue('foodCost');
    const totalRentCost = convertValue('rentCost');
    const totalClothCost = convertValue('clothCost');

    // Error HTMLHeading
    if(toatalFoodCost>=0 && totalRentCost>= 0 && totalClothCost>=0){
        const totalExenses = toatalFoodCost + totalRentCost + totalClothCost;
        const balance = totalIncomeAmout - totalExenses;
        const expenses = document.getElementById('totalExenses');
        if(totalIncomeAmout >= totalExenses){
            expenses.innerText = totalExenses;
            document.getElementById('balance').innerText = balance;
            document.getElementById('remainBalance').innerText = balance;
        }
        else{
            alert("You haven't enough Income balance")
        }
    }
    else{
        alert("Please input possetive value")
    }
});

// Save Deposit & value update
document.getElementById("saveBtn").addEventListener('click', function(){
    const incomeAmout = document.getElementById('incomeValue');
    const totalIncomeAmout = parseInt(incomeAmout.value);
    const saveParsent = convertValue('saveParsent');
    const saveAmount = totalIncomeAmout*(saveParsent/100);
    // Error HTMLHeading
    if(saveAmount>0 ){
        const balanceAmount = document.getElementById('balance').innerText
        const convertAmount = parseInt(balanceAmount)
        if(balanceAmount>=saveAmount){
            document.getElementById('saveAmount').innerText = saveAmount;
            document.getElementById('remainBalance').innerText = convertAmount-saveAmount;
        }
        else{
            alert("You haven't enough balance")
        }
    }
    else{
        alert("Please input possetive value in Save")
    }
})
// Value Convert Function
function convertValue (inputId){
    const selectId = document.getElementById(inputId);
    const convert = parseInt(selectId.value);
    selectId.value = "";
    return convert;
     
};


// const incomeAmout = document.getElementById('incomeValue');
// const foodCost = document.getElementById('foodCost');
// const rentCost = document.getElementById('rentCost');
// const clothCost = document.getElementById('clothCost');