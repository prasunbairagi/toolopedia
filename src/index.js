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
/** Unique function to fetch date only from new Date() or 'yyyy-mm-ddThh:mm:ss.sssZ' 
 * and convert into dd/mm/yyyy */
function convertNewDateIntoDDMMYYYYOnlyWithSlash(date) {
  if(typeof date === 'string'){
      date=new Date(date);
  }
   let day = date.getDate().toString().padStart(2, '0');
   let month = (date.getMonth() + 1).toString().padStart(2, '0');
   let year = date.getFullYear().toString();
   
   return `${day}/${month}/${year}`;
}
/** Unique function to fetch date only from new Date() or 'yyyy-mm-ddThh:mm:ss.sssZ' 
 * and convert into mm/dd/yyyy */
function convertNewDateIntoMMDDYYYYOnlyWithSlash(date) {
  if(typeof date === 'string'){
      date=new Date(date);
  }
   let day = date.getDate().toString().padStart(2, '0');
   let month = (date.getMonth() + 1).toString().padStart(2, '0');
   let year = date.getFullYear().toString();
   
   return `${month}/${day}/${year}`;
}
/** Unique function to fetch date only from new Date() or 'yyyy-mm-ddThh:mm:ss.sssZ' 
 * and convert into yyyy/mm/dd */
function convertNewDateIntoYYYYMMDDOnlyWithSlash(date) {
  if(typeof date === 'string'){
      date=new Date(date);
  }
   let day = date.getDate().toString().padStart(2, '0');
   let month = (date.getMonth() + 1).toString().padStart(2, '0');
   let year = date.getFullYear().toString();
   
   return `${year}/${month}/${day}`;
}

// Export all functions using a single name
const Prasun = {  
  sortAStr,
  removeDupWordsFromAStr,
  removeDupLettersFromAStr,
  convertNewDateIntoDDMMYYYYOnlyWithSlash,
  convertNewDateIntoMMDDYYYYOnlyWithSlash,
  convertNewDateIntoYYYYMMDDOnlyWithSlash
};

// Export Prasun
export default Prasun;
