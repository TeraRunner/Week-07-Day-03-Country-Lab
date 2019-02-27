const PubSub = require('../helpers/pub_sub.js');

const CountryView = function (container) {
  this.container = container;
}

CountryView.prototype.bindEvents = function () {
  PubSub.subscribe('Country:Object Ready to Send', (event) => {
    const chosenCountry = event.detail;
    console.log(chosenCountry);
    this.render(chosenCountry);
  })
};

CountryView.prototype.render = function (country) {
  this.container.innerHTML = '';

  const countryName = this.createElement('h1', country.name);
  this.container.appendChild(countryName);

  const img = this.createImage(country);
  this.container.appendChild(img);

  const countryRegionTitle = this.createElement('h2', 'Region:');
  this.container.appendChild(countryRegionTitle);

  const countryRegion = this.createElement('p', country.region);
  this.container.appendChild(countryRegion);

  const countryLanguagesTitle = this.createElement('h2', 'Languages:');
  this.container.appendChild(countryLanguagesTitle);

  const languageList = this.createLanguageList(country.languages);
  this.container.appendChild(languageList);
};

CountryView.prototype.createElement = function (elementType, text) {
  const element = document.createElement(elementType);
  element.textContent = text;
  return element;
};

CountryView.prototype.createLanguageList = function (languages) {
  const list = document.createElement('ul');

  languages.forEach((language) => {
    const listItem = document.createElement('li');
    listItem.textContent = language.name;
    list.appendChild(listItem);
  });

  return list;
};

CountryView.prototype.createImage = function (country) {
  const img = document.createElement('img');
  img.src = country.flag;
  return img;
};

module.exports = CountryView;
