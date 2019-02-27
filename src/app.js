const Country = require('./models/country.js');
const SelectView = require('./views/select_view.js');
const CountryView = require('./views/country_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');
  const country = new Country();
  country.getData();

  const selectElement = document.querySelector('select#countries');
  const selectView = new SelectView(selectElement);
  selectView.bindEvents();

  const countryContainer = document.querySelector('div#country');
  const countryView = new CountryView(countryContainer);
  countryView.bindEvents();
});
