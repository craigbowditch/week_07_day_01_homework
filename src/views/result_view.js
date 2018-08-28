const PubSub = require('../helpers/pub_sub.js')

const ResultView = function() {

};

ResultView.prototype.bindEvents = function() {
  PubSub.subscribe('WordCounter:result', (event) => {
    const result = event.detail;
    this.updateView(result);

  })
};


ResultView.prototype.updateView = function(result) {
  const resultElement = document.querySelector('#result');
  if (result === 1) {
    resultElement.textContent = `There is ${result} word`;
  } else {
    resultElement.textContent =`There are ${result} words`;
  }

};


module.exports = ResultView;
