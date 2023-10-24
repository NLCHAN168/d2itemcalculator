import promptSync from "prompt-sync";

const prompt = promptSync();
let varnum = prompt("How many variables? ");

function itemCreate() {
  let item = [];
  let chanceOfPerf = 1;
  for (let i = 0; i < varnum; i++) {
    let name = prompt("Variable name? ");
    let min = prompt("min value? ");
    let max = prompt("max value? ");
    let val = prompt("value? ");
    chanceOfPerf /= max - min + 1;
    item.push({ [name]: { min: min, max: max, val } });
  }
  chanceOfPerf = chanceOfPerf * 100 + "%";
  item.push({ chanceOfPerf });
  return item;
}

function display() {
  let item = itemCreate();
  for (const key in item) {
    console.log(item[key]);
  }
}

display();
