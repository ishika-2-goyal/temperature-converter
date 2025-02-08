const temperatureInput=document.getElementById('temperature');
const fromUnit=document.getElementById('fromUnit');
const toUnit=document.getElementById('toUnit');
const convertButton=document.getElementById('converterButton');
const resultDisplay=document.getElementById('result');

function checkfields(){
    if(temperatureInput.value && fromUnit.value && toUnit.value){
        convertButton.disabled=false;
    }else{
        convertButton.disabled=true;
    }
}
temperatureInput.addEventListener('input',checkfields);
fromUnit.addEventListener('change',checkfields);
toUnit.addEventListener('change',checkfields);
function convertTemperature(temp,from,to){
    if(from ===to){
        return temp;

    }

let convertedTemp;
if(from ==='Fahrenheit'){
    if(to ==='Celsius'){
        convertedTemp = (temp - 32) * 5 / 9;
    } else if (to === 'Kelvin') {
      convertedTemp = (temp - 32) * 5 / 9 + 273.15;
    }
  }
  else if (from === 'Celsius') {
    if (to === 'Fahrenheit') {
      convertedTemp = (temp * 9 / 5) + 32;
    } else if (to === 'Kelvin') {
      convertedTemp = temp + 273.15;
    }
  }
  else if (from === 'Kelvin') {
    if (to === 'Fahrenheit') {
      convertedTemp = (temp - 273.15) * 9 / 5 + 32;
    } else if (to === 'Celsius') {
      convertedTemp = temp - 273.15;
    }
  }
  return convertedTemp;
}
convertButton.addEventListener('click', function (e) {
  e.preventDefault();
  const temperature = parseFloat(temperatureInput.value);
  const from = fromUnit.value;
  const to = toUnit.value;
  const convertedValue = convertTemperature(temperature, from, to);
  resultDisplay.textContent = `Converted Temperature: ${convertedValue.toFixed(2)} ${to}`;
});


 
    

