// index.js

// Unique function to sort a string
function sortAStr(str) {
  return str.split("").sort().join("");
}
// Unique function to remove duplicate words from a string
function removeDupWordsFromAStr(str){
  return ([...new Set(str.split(" "))]).join(" ");
}
// Unique function to remove duplicate letters from a string
function removeDupLettersFromAStr(str){
  return ([...new Set(str.split(""))]).join("");
}

// Export all functions using a single name
const Prasun = {  
  sortAStr,
  removeDupWordsFromAStr,
  removeDupLettersFromAStr
};

// Export Prasun
export default Prasun;
