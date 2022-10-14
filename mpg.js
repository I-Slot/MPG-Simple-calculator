"use strict"

document.getElementById("calc").onclick = calcMPG;
// document.getElementById("reset").onclick = reset;

function calcMPG() {
    // alert("You get it!")
    
    const miles = parseFloat(document.getElementById("miles").value);
    const gallons = parseFloat(document.getElementById("gallons").value);
    console.log(miles + " :", gallons);
    console.log(typeof (miles, gallons));
    
    
    // Make sure input is valid
    if (isNaN(miles) || isNaN(gallons)){
        alert("Enter a valid number in both input");
    } else {
        const mpg = parseInt(miles / gallons);
        console.log(mpg);
        // document.getElementById("mpg").textContent = `${miles} miles per ${gallons} gallon is ${mpg}`;
        document.getElementById("mpg").textContent = mpg.toFixed(1) + " miles per gallon";
        
    }
}

function reset() {
    document.getElementById("miles").value = "";
    document.getElementById("gallons").value = "";
    document.getElementById("mpg").innerText = "";
    document.getElementById("reset").textContent = "";
    
}