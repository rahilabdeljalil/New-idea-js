
// input
let inputVal = document.getElementById("input-numb") 

// input
let Btn = document.getElementById("converty")

// units
let lengthEl = document.getElementById("length")
let valumneEl = document.getElementById("valumne")
let massEl = document.getElementById("mass")

let meter = 3.281 
let liter = 0.264 
let kilogram = 2.204 


// btn func
Btn.addEventListener('click', function(){
   let values = inputVal.value; 

//    lenght first 
   lengthEl.innerHTML = `
    <div class="units">
    <div>
       <h1>length (Meter/Feet)</h1>
       <p> ${values} meter = ${(values * meter).toFixed(2)} feet  | ${values} feet = ${(values / meter).toFixed(2)} meters </p>
    <div>
    <div>
   `
    valumneEl.innerHTML = `
    <div class="units">
    <div>
       <h1>Volume (Liters/Gallons)</h1>
       <p> ${values} liter = ${(values * liter).toFixed(2)} gallons  | ${values} gallons = ${(values / liter).toFixed(2)} meters </p>
    <div>
    <div>
   `
    massEl.innerHTML = `
    <div class="units">
    <div>
       <h1>Mass (Kilograms/Pounds)</h1>
       <p> ${values} kilos = ${(values * kilogram).toFixed(2)} pounds  | ${values} pounds = ${(values / kilogram).toFixed(2)} kilos </p>
    <div>
    <div>
   `

})

