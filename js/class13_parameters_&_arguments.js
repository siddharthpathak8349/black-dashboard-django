function MulTable() {
  for (i = 1; i <= 10; i++) {
    document.write(`2 * ${i} = ${2 * i}`);
    document.write("<br>");
  }
  console.log("<br>");
}

MulTable();

//   is functionse sirf hum 2 ka table  hi na sakte hai.

//   per humchata ehi ki mai jo parameter  paas kru uska table likhe .

function MulTable(num) {
  for (i = 1; i <= 10; i++) {
    document.write(`${num} * ${i} = ${num * i}`);
    document.write("<br>");
  }
  console.log("<br>");
}

MulTable(5);

or;

function add(num1, num2) {
  document.write(num1 + num2);
}

/////////////////////////////////////////////////////

//   Arguments :-  * ye hume function ke ander by default milta hai.
//                 * iski help se hum kitne bhi  paramenetr pass kar sakte hai  kisi bhi kaam ke lea .
//                 * ye ek tarah  ka  array type object hai.
