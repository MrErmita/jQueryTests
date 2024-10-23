function optim(id, regex, error) {
  if (regex.test(id.value)) {
    $(id).css({
      border: "2px solid #4B6043",
      "background-color": "#95BB72",
    });
    $(error).css("display", "none");
    console.log("ok");
  } else {
    $(id).css({
      border: "2px solid #A52A2A",
      "background-color": "#FFC0C0",
    });
    $(error).css("display", "block");
    console.log("no");
  }
}

$(document).ready(function () {
  const LETTERS_REGEX = /^[a-zA-Z]+$/;
  const PHONE_REGEX = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
  const STREET_REGEX = /^[A-Za-z0-9 , / ]+$/;
  const CF_REGEX = /^[A-Z]{6}[0-9]{2}[A-Z][0-9]{2}[A-Z][0-9]{3}[A-Z]$/i;

  //*controllo generale per tutti i campi
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

  //*controllo specifico per l'età
  $("#ageIn").on("input", function () {
    let age = parseInt(this.value);
    let pInfoElements = $(".pInfos");

    if (age > 0 && age < 100) {
      $(this).css({
        border: "2px solid #4B6043",
        "background-color": "#95BB72",
      });
      if (age < 18) {
        $("#parentInfo").css("display", "flex");
        $("#ageError").hide();
        pInfoElements.attr("required", true);
      } else {
        $("#parentInfo").hide();
        pInfoElements.removeAttr("required");
      }
    } else {
      $(this).css({
        border: "2px solid #A52A2A",
        "background-color": "#FFC0C0",
      });
      $("#parentInfo").hide();
      $("#ageError").show();
      pInfoElements.removeAttr("required");
    }
  });

  $("#submitBtn").on("click", function () {
    let name = $("#nameIn").val();
    let surname = $("#surnameIn").val();
    let phone = $("#phoneIn").val();
    let cf = $("#cFiscIn").val();
    let street = $("#streetIn").val();
    let age = parseInt($("#ageIn").val());

    if (
      LETTERS_REGEX.test(name) &&
      LETTERS_REGEX.test(surname) &&
      PHONE_REGEX.test(phone) &&
      CF_REGEX.test(cf) &&
      street
    ) {
      $("#form").css("display", "none");

      cf = cf.toUpperCase();

      let kurivoltQty = parseInt($("#kurivoltQty").val());
      let dragoBiancoQty = parseInt($("#dragoBiancoQty").val());
      let kaiserUtopiaQty = parseInt($("#kaiserUtopiaQty").val());

      let price = 0;
      price += kurivoltQty * 10;
      price += dragoBiancoQty * 1999.99;
      price += kaiserUtopiaQty * 945.25;

      $("#recap").html(`
    <p style="font-size: 16px; color: #333;"><strong>Nome:</strong> ${name}</p>
    <p style="font-size: 16px; color: #333;"><strong>Cognome:</strong> ${surname}</p>
    <p style="font-size: 16px; color: #333;"><strong>Numero di telefono:</strong> ${phone}</p>
    <p style="font-size: 16px; color: #333;"><strong>Codice Fiscale:</strong> ${cf}</p>
    <p style="font-size: 16px; color: #333;"><strong>Indirizzo:</strong> ${street}</p>
    <p style="font-size: 16px; color: #333;"><strong>Età:</strong> ${age}</p>
    <hr style="border: 1px solid #95BB72;">
    <p style="font-size: 16px; color: #333;"><strong>Quantità Kurivolt:</strong> ${kurivoltQty}</p>
    <p style="font-size: 16px; color: #333;"><strong>Quantità Drago Bianco:</strong> ${dragoBiancoQty}</p>
    <p style="font-size: 16px; color: #333;"><strong>Quantità Utopia Kaiser:</strong> ${kaiserUtopiaQty}</p>
    <hr style="border: 1px solid #95BB72;">
    <p style="font-size: 18px; color: #4B6043; font-weight: bold;">Totale: €${price.toFixed(
      2
    )}</p>
  `);

      $("#order").css("display", "flex");
    }
  });
});
