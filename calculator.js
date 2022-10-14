window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();

    });
  }
});

function getCurrentUIValues() {
 
 
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),}
  }

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let form = document.getElementById("calc-form");
  let display = document.getElementById('monthly-payment')
  form.addEventListener('submit', (e)=>{
    let amount = e.target[0].value
    let years = e.target[1].value
    let rate = e.target[2].value
    let vl = [amount, years, rate]
    console.log(`amount:${amount}, years:${years}, rate:${rate} `)
   let answered = calculateMonthlyPayment(vl)
   display.innerText = answered
  })


}

// Get the current values from the UI
// Update the monthly payment
function update() {
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
let principle = values[0];
let years = values[1];
let rate = values[2]
let monthlyPayment = (principle + (principle * rate)) / years

let answer = parseInt(principle * rate);
console.log(answer = answer + parseInt(principle))
answer = answer / years
answer = answer / 12

let flanswer = parseFloat(answer)
flanswer = flanswer * 100
console.log(flanswer)
rnum = Math.round(flanswer)
console.log(rnum)
answer = rnum / 100


return answer
} 

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
}

