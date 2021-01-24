const fs = require('fs');

function between(min, max) {  
    return Math.floor(
      Math.random() * (max - min + 1) + min
    )
}
const bingo= ['B','I','N','G','O'];

const bingo_num = bingo[between(0,4)] +"-"+between(1,100);
console.log("RANDOM BiNgO is: "+ bingo_num);

fs.writeFile('audit.log', bingo_num+"\n",{ flag: 'a+' }, err => {
  if (err) {
    console.error(err)
    return
  }
  //file written successfully
});