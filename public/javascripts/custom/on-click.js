"use strict";

$(document).ready(function() {

  // add your on click event handler here

  $("#calc").click(function(){

    var x = fetchOptions();
    x.amount = addPriceToPage(x.amount);
    priceFor(x, x);
    // debugger;
  });



  
});