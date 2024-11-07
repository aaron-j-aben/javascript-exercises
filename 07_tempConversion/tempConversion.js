const convertToCelsius = function(tempF) {
  const tempInCelsius = (tempF - 32) * (5/9);

  return Number(tempInCelsius.toFixed(1));
};

const convertToFahrenheit = function(tempC) {
  const tempInFahrenheit = (tempC + 32) * 1.8;

  return Number(tempInFahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
