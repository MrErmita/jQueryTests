function optim(id, regex, error) {
  if (regex.test(id.value)) {
    $(id).css({
      "border": "2px solid #4B6043", "background-color": "#95BB72"});
    $(error).css("display", "none");
    console.log("ok");
  } else {
    $(id).css({
      "border": "2px solid #A52A2A", "background-color": "#FFC0C0"});
    $(error).css("display", "block");
    console.log("no");
  }
}

$(document).ready(function () {
  const LETTERS_REGEX = /^[a-zA-Z]+$/;
  const PHONE_REGEX = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
  const STREET_REGEX = /^[A-Za-z0-9 , / ]+$/;
  const CF_REGEX = /^[A-Z]{6}[0-9]{2}[A-Z][0-9]{2}[A-Z][0-9]{3}[A-Z]$/i;

  //controllo generale per tutti i campi
  $("#nameIn").on("input", function () {
    optim(this, LETTERS_REGEX, "#nameError");
    console.log(this.value);
  });
  $("#surnameIn").on("input", function () {
    optim(this, LETTERS_REGEX, "#surnameError");
    console.log(this.value);
  });
  $("#phoneIn").on("input", function () {
    optim(this, PHONE_REGEX, "#phoneError");
    console.log(this.value);
  });
  $("#streetIn").on("input", function () {
    optim(this, STREET_REGEX, "#streetError");
    console.log(this.value);
  });
  $("#cFiscIn").on("input", function () {
    optim(this, CF_REGEX, "#cFiscError");
    console.log(this.value);
  });

  //controllo specifico per l'età
  $("#ageIn").on("input", function () {
    let age = parseInt(this.value);
    let pInfoElements = $(".pInfos");
    if(!isNaN(age) && age > 0 && age < 100) {
      
    }
  });
});
