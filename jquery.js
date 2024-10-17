$(document).ready(function () {
    // Espressioni regolari per la validazione
    const LETTERS_REGEX = /^[a-zA-Z]+$/;
    const PHONE_REGEX = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    const CF_REGEX = /^[A-Z]{6}[0-9]{2}[A-Z][0-9]{2}[A-Z][0-9]{3}[A-Z]$/i;
    const STREET_REGEX = /^[A-Za-z0-9 ]+$/;
  
    // Funzione per validare i campi di input
    function validateField(input, regex, errorId) {
      const value = input.val();
      if (regex.test(value)) {
        $(errorId).hide();
        input.css("border", "2px solid #4B6043");
      } else {
        $(errorId).show();
        input.css("border", "2px solid #A52A2A");
      }
    }
  
    // Validazione dei campi al momento dell'input
    $("#nameIn").on("input", function () {
      validateField($(this), LETTERS_REGEX, "#nameError");
    });
  
    $("#surnameIn").on("input", function () {
      validateField($(this), LETTERS_REGEX, "#surnameError");
    });
  
    $("#phoneIn").on("input", function () {
      validateField($(this), PHONE_REGEX, "#phoneError");
    });
  
    $("#streetIn").on("input", function () {
      validateField($(this), STREET_REGEX, "#streetError");
    });
  
    $("#cFiscIn").on("input", function () {
      validateField($(this), CF_REGEX, "#cFiscError");
    });
  
    $("#ageIn").on("input", function () {
      const age = $(this).val();
      const parentInfo = $("#parentInfo");
  
      if (age >= 0 && age <= 99) {
        $("#ageError").hide();
        if (age < 18) {
          parentInfo.show();
          $(".pInfos").attr("required", "required");
        } else {
          parentInfo.hide();
          $(".pInfos").removeAttr("required");
        }
      } else {
        $("#ageError").show();
        parentInfo.hide();
      }
    });
  
    // Funzione di validazione finale prima dell'invio
    $("#submitBtn").on("click", function () {
      // Qui puoi aggiungere ulteriori controlli prima dell'invio del modulo
      alert("Form submitted!");
    });
  });
  