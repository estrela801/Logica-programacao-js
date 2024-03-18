const temperatura = window.prompt('Digite a temperatura');
const atual = window.prompt('Digite a unidade atual');
const conversao = window.prompt('Digite a unidade desejada, Celsius, Fahrenheit ou Kelvin');

const calculoCelsius1 = (temperatura * 9 / 5) + 32,
 calculoCelsius2 = temperatura + 273,
 calculoFahrenheit1 = (temperatura - 32) * 5 / 9,
 calculoFahrenheit2 = (temperatura + 459.67) * 5 / 9,
 calculoKelvin1 = temperatura - 273.15,
 calculoKelvin2 = temperatura * 9 / 5 - 459.67;

// Celsius	Fahrenheit	tF = (tC * 9/5) + 32
// Celsius	Kelvin	tK = tC + 273.15
// Fahrenheit	Celsius	tC = (tF - 32) * 5/9
// Fahrenheit	Kelvin	tK = (tF + 459.67) * 5/9
// Kelvin	Celsius	tC = tK - 273.15
// Kelvin	Fahrenheit	tF = tK * 9/5 - 459.67



if ('atual = celsius || Celsius && conversao = Fahrenheit || farenheit || fahrenheit') {
    window.alert(`A temperatura atual em Celsius é ${calculoCelsius1}`); //foi

} else if ('atual = celsius || Celsius && conversao = Kelvin || kevin || kelvin') {
    window.alert(`A temperatura atual em Celsius é ${calculoCelsius2}`);

} else if ('atual = Fahrenheit||fahrenheit && conversao = celsius||Celsius ') {
    window.alert(`A temperatura atual em Fahrenheit é ${calculoFahrenheit1}`);

} else if ('atual = Fahrenheit||fahrenheit && conversao = Kelvin||kelvin') {
    window.alert(`A temperatura atual em Fahrenheit é ${calculoFahrenheit2}`);

} else if ('atual = Kelvin||kelvin && conversao = Celsius||celsius') {
    window.alert(`A temperatura atual em Kelvin é ${calculoKelvin1}`);

} else if ('atual = Kelvin|| kelvin && conversao = Fahrenheit||farenheit') {
    window.alert(`A temperatura atual em Kelvin é ${calculoKelvin2}`);

} else {
    window.alert(`incapaz de reconhecer`);
}


