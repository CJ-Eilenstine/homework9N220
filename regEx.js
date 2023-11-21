let stringText = document.getElementById("string");
let zipText = document.getElementById("zip");
let ccText = document.getElementById("ccard");
let phoneText = document.getElementById("phone");

// String
function validateString() {
  let vs1 = /ralph/i;
  let vs2 = /^cat/;
  let vs3 = /dog$/;
  let stringVal = stringText.value;

  document.getElementById("stringAns").innerHTML = vs3.test(stringVal);
}

stringText.addEventListener("blur", validateString);

// Zip Code
function validateZip() {
  let zs1 = /^([0-9]{5})([- ]?)([0-9]{4})?$/;
  let zipVal = zipText.value;

  document.getElementById("zipAns").innerHTML = zs1.test(zipVal);
}

zipText.addEventListener("blur", validateZip);

// Credit Card

function validateCC() {
  let cs1 = /^(\d{4})([- ]?)(\d{4})([- ]?)(\d{4})([- ]?)(\d{4})$/;
  let ccVal = ccText.value;

  document.getElementById("ccAns").innerHTML = cs1.test(ccVal);
}

ccText.addEventListener("blur", validateCC);

// Phone Number

function validatePhone() {
  let ps1 = /^([(]?)(\d{3})([)]?)([-. ]?)(\d{3})([-. ]?)(\d{4})$/;
  let phoneVal = phoneText.value;

  document.getElementById("phoneAns").innerHTML = ps1.test(phoneVal);
}

phoneText.addEventListener("blur", validatePhone);
