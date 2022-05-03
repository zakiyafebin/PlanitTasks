function getString(prompt) {
    let readlineSync = require('readline-sync');
    return String(readlineSync.question(prompt));
}
let myString = getString("Enter your string: ");


let str = myString.toLocaleLowerCase();
const countChar = (str) => {
    const counts = {};
    for (const s of str) {
      if (counts[s]) {
        counts[s]++
      } else {
        counts[s] = 1
      }
    }
    //console.log(counts);
    let max = 0;
    for(const i of Object.values(counts)){
        if (max<i){
            max = i;
        }

    }
    //console.log(max);
    for(const [key,value] of Object.entries(counts)){
        //console.log(key,value);
        if(value == max){
            console.log(`The character with highest number of occurences is: ${key}`);
            break;
        }
    }
  }
  
  countChar(str);