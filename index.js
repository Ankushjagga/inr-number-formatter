
function formatPrice(num) {
    // Parse the number and ensure it's valid
    num = parseFloat(num);
    if (isNaN(num)) return "Invalid number";
  
    // Define the thresholds
    const crore = 1e7;
    const lakh = 1e5;
    const thousand = 1e3;
  
    // Format based on the size of the number
    if (num >= crore) {
      return (num / crore).toFixed(2).replace(/\.00$/, "") + " Cr";
    } else if (num >= lakh) {
      return (num / lakh).toFixed(2).replace(/\.00$/, "") + " L";
    } else if (num >= thousand) {
      return (num / thousand).toFixed(2).replace(/\.00$/, "") + "k";
    } else {
      return num.toFixed(2).replace(/\.00$/, ""); // Less than 1000, return as is
    }
  }
  
  module.exports = formatPrice
  