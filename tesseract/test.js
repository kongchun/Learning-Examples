// const ocrad = require('async-ocrad');
 
// async function simpleExample() {
//     const text = await ocrad('2.png');
//     console.log(text);
// }
 
// simpleExample();

import Tesseract from 'tesseract.js';
 
Tesseract.recognize(
  '1.png',
  'eng',
  { logger: m => console.log(m) }
).then(({ data: { text } }) => {
  console.log(text);
})