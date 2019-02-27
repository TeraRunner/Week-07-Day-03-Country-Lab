const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

const SelectView = function (element) {
  this.element = element;
}

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Country: Countries-Loaded', (event) => {
    console.log('Countries Received by Select View', event.detail);
    const allCountries = event.detail;
    this.populate(allCountries);
  })
};

SelectView.prototype.populate = function (countryData) {
  countryData.forEach((country, index) => {
    const option = document.createElement('option');
    option.textContent = country.name;
    option.value = index;
    this.element.appendChild(option);
  });
};

module.exports = SelectView;
