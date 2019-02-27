const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

const Country = function () {
  this.text = null;
};

Country.prototype.getData = function () {
  const request = new RequestHelper('https://restcountries.eu/rest/v2/all');
  request.get((data) => {
    this.text = data;
    PubSub.publish('Country: Countries-Loaded', this.text);

    PubSub.subscribe('SelectView: Index Sent', (event) => {
      const selectedIndex = event.detail;
      this.publishCountryData(selectedIndex);
    });
  })

  Country.prototype.publishCountryData = function (selectedIndex) {
    const selectedCountry = this.text[selectedIndex];
    console.log(selectedCountry);
    PubSub.publish('Country:Object Ready to Send', selectedCountry);
  };
};


module.exports = Country;
