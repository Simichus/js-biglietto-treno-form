// variables
var nameElement = document.getElementById('name');
var kmsElement = document.getElementById('kms');
var ageElement = document.getElementById('age');
var ticketGenerator = document.getElementById('ticket-generator');
var reset = document.getElementById('reset')


var ticketResult = document.getElementById('ticket-result');
var passengerNameElement = document.getElementById('passenger-name');
var offerElement = document.getElementById('passenger-offer');
var cabinElement = document.getElementById('passenger-cabin');
var trainCodeElement = document.getElementById('train-code');
var ticketPricelement = document.getElementById('ticket-price');
var newTicket = document.getElementById('new-ticket');




ticketGenerator.addEventListener('click', function () {
    var nameValue = nameElement.value;
    var kmsValue = kmsElement.value;
    var ageValue = ageElement.value;
    var price = kmsValue * 0.21;
    var offer = 'Tariffa ordinaria';
    var cabin = Math.floor(Math.random() * 12 + 1);
    var trainCode = Math.floor(Math.random() * 10000 + 90000)

    passengerNameElement.innerHTML = nameValue;

    if (ageValue === 'min') {
        price *= 0.8;
        offer = 'Tariffa minorenni';
    }

    if (ageValue === 'old') {
        price *= 0.6;
        offer = 'Tariffa Over 65';
    }

    offerElement.innerHTML = offer;
    cabinElement.innerHTML = cabin;
    trainCodeElement.innerHTML = trainCode;
    ticketPricelement.innerHTML = price.toFixed(2);

    ticketResult.classList.remove('hidden');

})

reset.addEventListener('click', function () {
    nameElement.value = '';
    kmsElement.value = '10';
    ageElement.value = 'maj';
})

newTicket.addEventListener('click', function () {
    nameElement.value = '';
    ageElement.value = 'maj';

    var result = document.getElementsByClassName('result');
    for (var i = 0; i < result.length; i++) {
        result[i].innerHTML = '';
    }
    ticketResult.classList.add('hidden');
})