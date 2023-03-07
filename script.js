const inputBill = document.getElementById('bill');
const inputPeople = document.getElementById('people-number');
const showError = document.querySelector('label span');

const btn5 = document.querySelector('.btn-5');
const btn10 = document.querySelector('.btn-10');
const btn15 = document.querySelector('.btn-15');
const btn25 = document.querySelector('.btn-25');
const btn50 = document.querySelector('.btn-50');
const inputCustom = document.getElementById('custom');

const resultTipAmount = document.getElementById('tip-amount');
const resultTotal = document.getElementById('total');
const btnReset = document.querySelector('.btn__reset');

let billAmount, peopleNumber, CustomPercent, tipPerson, tipTotal, totalPerson;

/* Reset Functions */
const resetInputValues = () => {
  inputBill.value = '';
  inputPeople.value = '';
  inputPeople.classList.remove('empty');
  inputCustom.value = '';
  showError.classList.remove('empty');
}
const resetPercentageBtns = () => {
  percentageBtns.forEach((btn) => {
    btn.classList.remove('selected');
  });
}
const resetResultValues = () => {
  resultTipAmount.value = '$0.00';
  resultTotal.value = '$0.00';
}

/* Activate reset button */
inputBill.addEventListener('change', () => {
  billAmount = Number(inputBill.value);
  peopleNumber = Number(inputPeople.value);

  if (billAmount !== 0 && peopleNumber === 0) {
    btnReset.removeAttribute('disabled');

    inputPeople.classList.add('empty');
    showError.classList.add('empty');
  }
});

/* Validate number of people (!== 0) */
inputPeople.addEventListener('change', () => {
  peopleNumber = Number(inputPeople.value);

  if (peopleNumber !== 0) {
    inputPeople.classList.remove('empty');
    showError.classList.remove('empty');
  } else if (peopleNumber === 0) {
    inputPeople.classList.add('empty');
    showError.classList.add('empty');
  }
});