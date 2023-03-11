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
const showTip = document.querySelector('.show-tip');
const showTotal = document.querySelector('.show-total');

let billAmount, peopleNumber, CustomPercent, tipAmount, tipPerson, totalPerson;

/* Reset Function */
const resetValues = () => {
  inputBill.value = '';
  inputPeople.value = '';
  inputPeople.classList.remove('empty');
  inputCustom.value = '';
  showError.classList.remove('empty');

  percentageBtns.forEach((btn) => {
    btn.classList.remove('selected');
  });

  showTip.textContent = '$0.00';
  showTotal.textContent = '$0.00';
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

/* Select Tip */
const percentageBtns = [btn5, btn10, btn15, btn25, btn50, inputCustom];
let percent = 0;

percentageBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.classList.add('selected');
    percentageBtns.forEach((btnSelected) => {
      if (btnSelected !== btn) {
        btnSelected.classList.remove('selected');
      }
    });
    if (btn.id !== 'custom') {
      percent = Number(btn.innerHTML);
    }
  });
});

/* Calculate tip and total */
const inputs = [inputBill, inputPeople, inputCustom];

inputs.forEach((input) => {
  input.addEventListener('change', () => {
    billAmount = Number(inputBill.value);
    peopleNumber = Number(inputPeople.value);
    CustomPercent = Number(inputCustom.value);

    if (CustomPercent > 100) {
      alert('Percentage cannot be greater than 100!');
      resetValues();
    }

    if (percent === 0) {
      percent = CustomPercent;
    }

    if (billAmount !== 0 && peopleNumber !== 0 && percent !== 0) {
      tipAmount = billAmount * (percent / 100);
      tipPerson = tipAmount / peopleNumber;
      totalPerson = (billAmount + tipAmount) / peopleNumber;

      showTip.textContent = '$' + tipPerson.toFixed(2);
      showTotal.textContent = '$' + totalPerson.toFixed(2);
    }
  }); 
});

btnReset.addEventListener('click', resetValues);