function printShopConsole(shop) { 
  var hours = shop.open + " to " + shop.close;
  
/* print shop info to the console */
  console.log("Shop: " + shop.name);
  console.log("Shop #: " + shop.no);
  console.log("Hours:              " + hours);
  console.log("Minimum Cust/Hr:    " + shop.mincph);
  console.log("Maximum Cust/Hr:    " + shop.maxcph);
  console.log("Donuts/Customer: " + shop.dpc);
  console.log("Customers/Hour:     " + shop.cph);
  console.log("Total Hours Open:   " + shop.totalHours);
  console.log("Donuts/Day:      " + shop.donutsPerDay());
  console.log("Donuts/Hour:     " + shop.donutsPerHour());
  console.log(" ");
}
/* test */

/* getHours takes store open and close time and returns total number of hours open */
function getHours(open,close) { /* "7:00 AM","6:00 PM" */
  return close - open;
}

function addShop(shop) { 
  var hours = shop.open + " to " + shop.close;
  
/* print a copy to the DOM */
  var table = document.getElementById("myTable");
  var row = table.insertRow(-1);
  row.insertCell(-1).innerHTML = '<strong>' + shop.no + '</strong>';
  row.insertCell(-1).innerHTML = '<strong>' + shop.name + '</strong>';
  row.insertCell(-1).innerHTML = hours;
  row.insertCell(-1).innerHTML = shop.mincph;
  row.insertCell(-1).innerHTML = shop.maxcph;
  row.insertCell(-1).innerHTML = shop.dpc;
  row.insertCell(-1).innerHTML = shop.cph;
  row.insertCell(-1).innerHTML = shop.totalHours;
  row.insertCell(-1).innerHTML = shop.donutsPerDay();
  row.insertCell(-1).innerHTML = shop.donutsPerHour();

  $(row).data('shop',shop).click(function(){
    $(this).toggleClass('selected');
    $("#detailTable tr:nth-of-type(2)").remove();
    showDetail($(this).data('shop'));
  });
}

function showDetail(shop) { /* this detail is from the shop clicked on */
  var hours = shop.open + " to " + shop.close;
  var table = document.getElementById("detailTable");
  var selected = $('.selected').removeClass('selected');
  var row = table.insertRow(-1);
  row.insertCell(-1).innerHTML = '<strong>' + shop.no + '</strong>';
  row.insertCell(-1).innerHTML = '<strong>' + shop.name + '</strong>';
  row.insertCell(-1).innerHTML = hours;
  row.insertCell(-1).innerHTML = shop.mincph;
  row.insertCell(-1).innerHTML = shop.maxcph;
  row.insertCell(-1).innerHTML = shop.dpc;
  row.insertCell(-1).innerHTML = shop.cph;
  row.insertCell(-1).innerHTML = shop.totalHours;
  row.insertCell(-1).innerHTML = shop.donutsPerDay();
  row.insertCell(-1).innerHTML = shop.donutsPerHour();

}

function Shop (name,open,close,mincph,maxcph,dpc) {
  shopCount+= 1;
  this.name = name;
  this.no = shopCount;
  this.open = open;
  this.close = close;
  this.mincph = mincph;
  this.maxcph = maxcph;
  this.dpc = dpc;
  this.cph = Math.floor(Math.random() * (maxcph - mincph + 1)) + mincph;
  this.totalHours = getHours(open,close);
  this.donutsPerDay = function() {
    return Math.floor(this.totalHours * this.cph * this.dpc) + 1;
  }
  this.donutsPerHour = function() {
    return Math.floor(this.cph * this.dpc);
  }
}

/* Create objects for each location */

var shopCount = 0;
var shops = [];

shops[0] = new Shop("Downtown",7,18,8,43,4.5);
shops[1] = new Shop("Capitol Hill",7,18,4,37,2.0);
shops[2] = new Shop("South Lake Union",7,18,9,23,6.33);
shops[3] = new Shop("Wedgewood",7,18,2,28,1.25);
shops[4] = new Shop("Ballard",7,18,8,58,3.75);
shops[5] = new Shop("Portland",7,18,4,45,6.25);
shops[6] = new Shop("Hillsboro",7,18,6,27,7.25);
shops[7] = new Shop("Beaverton",7,18,5,17,5.55);
shops[8] = new Shop("Birmingham",7,18,4,45,6.25);

/* Simulate a day's worth of baking */

for (var cntr = 0; cntr < shops.length; cntr++) {
  addShop(shops[cntr]);
}