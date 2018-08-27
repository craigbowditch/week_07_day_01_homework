const PubSub = require('../helpers/pub_sub.js');

const WordCounter = function() {

};


WordCounter.prototype.bindEvents = function() {
  PubSub.subscribe('InputView:text-inputted', (event) => {
    const inputtedText = event.detail;
    const result = this.wordCount(inputtedText);
    PubSub.publish("wordCounter:result", result);
  })
};


WordCounter.prototype.wordCount = function(text) {
  const textCopy = text.split(' ');
  const wordCount = textCopy.length;
  return wordCount;
}



module.exports = WordCounter;
