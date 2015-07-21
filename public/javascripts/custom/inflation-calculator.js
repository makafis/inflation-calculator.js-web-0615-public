// code your functions here


function InflationCalculator(start, end, amount){
  this.start = start;
  this.end = end;
  this.amount = amount;


};

function addPriceToPage(price){
  if (price.includes("$")){
    var returnPrice = price.replace("$","");  
  } else {
    var returnPrice = price;
  };
  // $('#endPrice').val(returnPrice);
  return returnPrice;
};

function fetchOptions(){
  var start = $('#startDate').val();
  var end = $('#endDate').val();
  var amount = $('#startPrice').val();  
  var returnValue = new InflationCalculator(start, end, amount);
  return returnValue;
};

function fetchEndPrice(){


};

function priceFor(param1, param2){
 var apiUrl = 'https://www.statbureau.org/calculate-inflation-price-jsonp?jsoncallback=?';
  $.getJSON(apiUrl, {
      country: 'united-states',
      start: param1.start,
      end: param1.end,
      amount: param1.amount,
      format: true
  }).done(function (data) {

    $('#endPrice').val(data);
  });


};


// var result = inflationCalculator(userInput);