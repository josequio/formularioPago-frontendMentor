const cardFrontalNumber = document.querySelector('.card-frontal-number');
const frontalName = document.querySelector('.frontal-name');
const frontalDateMonth = document.querySelector('.frontal-date-month');
const frontalDateYear = document.querySelector('.frontal-date-year');
// ------------------------------
const formContainer  = document.querySelector('.form-container');
const formContinue = document.querySelector('.form-continue');
// -----------------------------------s
const form = document.getElementById('form');
form.addEventListener('submit',function(e){
    e.preventDefault();
    let cardholderName = document.getElementById('cardholder-name').value;
    let cardNumber = document.getElementById('card-number').value;
    let month = document.getElementById('month').value;
    let year = document.getElementById('year').value;
    let cvc = document.getElementById('cvc').value;

    console.log(cardholderName);
    console.log(cardNumber);
    console.log(month);
    console.log(year);
    console.log(cvc);

    cardFrontalNumber.textContent =cardholderName ;
    frontalName.textContent = cardNumber;
    frontalDateMonth.textContent = month;
    frontalDateYear.textContent = year;
    // reemplazar form con form continue
    formContainer.style.display = 'none';
    formContinue.style.display = 'flex';
   
});

//  formContainer.style.display = 'none';
//  formContinue.style.display = 'flex';
// console.log(formContainer)
// --------------------container form y container-continue
// const formContainer  = document.querySelector('.form-container');
// const formContinue = document.querySelector('.form-continue');

// const formSubmit = document.querySelector('.form-submit');
// // formContinue.style.display = 'none';
// formSubmit.addEventListener('click',function(e){
//     if(formContainer.style.display != 'none'){
//         formContainer.style.display = 'none';
//         formContinue.style.display = 'flex';
//     }

// });
