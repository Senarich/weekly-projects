const currencyFirstEL = document.getElementById("currency-first");
const worthFirstEL = document.getElementById("worth-first");
const currencySecondEL = document.getElementById("currency-second");
const worthSecondEL = document.getElementById("worth-second");
const exchangeRateEl = document.getElementById("exchange-rate");

updateRate();

function updateRate() {
  fetch(
    `https://v6.exchangerate-api.com/v6/25f736aeb867b28549e8bc7c/latest/${currencyFirstEL.value}`
  )
    .then((Response) => Response.json())
    .then((data) => {
      const rate = data.conversion_rates[currencySecondEL.value];

      exchangeRateEl.innerText = `1 ${currencyFirstEL.value} = ${
        rate + " " + currencySecondEL.value
      }`;
      worthSecondEL.value = (worthFirstEL.value * rate).toFixed(2);
    });
}

currencyFirstEL.addEventListener("change", updateRate);
currencySecondEL.addEventListener("change", updateRate);
worthFirstEL.addEventListener("input", updateRate);
worthSecondEL.addEventListener("input", updateRate);
