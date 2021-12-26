// Remember, we're gonna use strict mode in all scripts now!
"use strict";

/*
const x = "23";
if (x !== 3) console.log(`23`);
console.log(`Love is `);
console.log(``);

*/
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForcast = function (temp) {
  let str = "";

  for (let i = 0; i < temp.length; i++) {
    str += `${temp[i]}°C in ${i + 1} days ...\n`;
  }
  console.log(str);
};

printForcast(data2);
