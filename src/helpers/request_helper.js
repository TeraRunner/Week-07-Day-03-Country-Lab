const RequestHelper = function (url) {
  this.url = url;
};

RequestHelper.prototype.get = function (onComplete) {

  const request = new XMLHttpRequest();
  request.open('GET', this.url); // Gets our page in HTML

  request.setRequestHeader('Accept', 'application/json'); // Only accept JSON

  request.addEventListener('load', () => {
    if (request.status != 200) { // 200 signals successful get/send
      return;
      console.log('Error'); // Debug by logging an error if not correctly sent
    }

    const jsonString = request.responseText; // Response will always be a string
    const data = JSON.parse(jsonString); // So we transform it into an object// Check that it has correctly transformed to object
    onComplete(data); // invoke callback
  })
  request.send();
};

module.exports = RequestHelper;
