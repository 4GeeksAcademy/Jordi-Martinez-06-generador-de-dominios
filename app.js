let pronoun = ['the', 'our','new','first','latest'];
let adj = ['great', 'big','bright','amazing','stuning'];
let noun = ['jogger', 'racoon','cat','time'];
let ext = ['.com','.net','.gob','.mx','.fm'];

  let selectPronoun =pronoun[Math.floor(Math.random() * pronoun.length)];  
  let selectAdj =adj[Math.floor(Math.random() * adj.length)];  
  let selectNoun =noun[Math.floor(Math.random() * noun.length)];  
  let selectExt =ext[Math.floor(Math.random() * ext.length)];  
  
let newDom = selectPronoun + selectAdj + selectNoun + selectExt;
console.log(selectPronoun + selectAdj + selectNoun + selectExt);
