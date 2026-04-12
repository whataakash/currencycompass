// API FETCH CODE
let rates = {};

const api = "https://open.er-api.com/v6/latest/USD";

fetch(api)
.then((res) => res.json())
.then((data) => {
    rates = data.rates;
    rates["USD"] = 1;

    startApp();
})
.catch((err) => {
    console.error("Error:", err);
});
// API FETCH END



// LIGHT MODE DARK MODE TOGGLE
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("change", function () {
    if (toggle.checked) {
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
    }
});
// TOGGLE END



// TABLE 1 + DROPDOWN + CONVERSION
function startApp(){

    const inputCurrency = document.getElementById("inputCurrency");
    const outputCurrency = document.getElementById("outputCurrency");
    const inputAmount = document.getElementById("inputCurrencyAmount");
    const outputAmount = document.getElementById("outputCurrencyAmount");

    const inputDropdown = document.getElementById("inputDropdown");
    const outputDropdown = document.getElementById("outputDropdown");

    const currencyList = Object.keys(rates);

    console.log(currencyList);

//     Function ShowDropDown is used to add the dropdown selection feature to choose the currencies
    function showDropdown(input, dropdown){
        const value = input.value.toLowerCase();

        const filtered = currencyList.filter(c =>
            c.toLowerCase().includes(value)
        );

        dropdown.innerHTML = filtered.map(c =>
            `<div onclick="selectCurrency('${c}', '${input.id}')">${c}</div>`
        ).join("");

        dropdown.style.display = filtered.length ? "block" : "none";
    }

    inputCurrency.addEventListener("input", () => {
        showDropdown(inputCurrency, inputDropdown);
    });

    outputCurrency.addEventListener("input", () => {
        showDropdown(outputCurrency, outputDropdown);
    });


    window.selectCurrency = function(value, id){
        const input = document.getElementById(id);
        input.value = value;

        if(id === "inputCurrency"){
            inputDropdown.style.display = "none";
        } else {
            outputDropdown.style.display = "none";
        }

        convert();
    };

    function convert(){
        const from = inputCurrency.value.toUpperCase();
        const to = outputCurrency.value.toUpperCase();
        const amount = parseFloat(inputAmount.value);

        if(!rates[from] || !rates[to] || isNaN(amount)){
            outputAmount.value = "";
            return;
        }

        const usdAmount = amount / rates[from];
        const result = usdAmount * rates[to];

        outputAmount.value = result.toFixed(2);
    }


const calculateBtn = document.querySelector(".calculate");

calculateBtn.addEventListener("click", convert);
    document.addEventListener("click", (e) => {
        if (!e.target.closest(".currency-selector")) {
            inputDropdown.style.display = "none";
            outputDropdown.style.display = "none";
        }
    });
}