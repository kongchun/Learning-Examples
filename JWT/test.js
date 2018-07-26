import base64url from "base64url";
import jsSHA from "jsSHA";

var head = {
  "alg": "HS256",
  "typ": "JWT"
}

var PAYLOAD = {
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true
} 

var secret = "secret";

var h = (base64url(JSON.stringify(head))) //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
var p =(base64url(JSON.stringify(PAYLOAD))) //eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9

var shaObj = new jsSHA("SHA-256", "TEXT");
shaObj.setHMACKey((secret), "TEXT");
shaObj.update(h);
shaObj.update(".");
shaObj.update(p);
var hmac = shaObj.getHMAC("HEX");
console.log((hmac))
console.log("TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ")
