<h1 align="center"> <code>inr-number-formatter</code> </h1>

A simple utility to format numbers with Indian number like `k`, `L`, and `Cr`.

## Installation
You can install the package using npm:
```bash
npm install indian-number-format
```
## Example 
```js
const  formatPrice  = require('inr-number-formatter');

// Format numbers with Indian numbers
console.log(formatPrice(123456789)); // Output: "12.35 Cr"
console.log(formatPrice(1234567));   // Output: "12.35 L"
console.log(formatPrice(12345));     // Output: "12.35k"
console.log(formatPrice(123));       // Output: "123"
```

### Contact:
-For any questions or feedback, please contact ankushjagga97@gmail.com.
