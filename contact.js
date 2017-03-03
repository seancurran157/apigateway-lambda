$(document).ready(function() {
  var contactForm = $("#contactForm");
  var URL = "API-URL";
  //We set our own custom submit function
  contactForm.on("submit", function(e) {
    //Prevent the default behavior of a form
    e.preventDefault();
    //Get the values from the form
    var data = {
      name: $('#name-input').val(),
      contact: $('#email-input').val(),
      message: $('#message-input').val(),
      publish: $('#publish-input').val(),
      recaptcha: grecaptcha.getResponse()
    }
    //Our AJAX POST
    $.ajax({
      type: 'POST',
      url: URL,
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify(data),
      success: function() {
        console.log("OUR FORM SUBMITTED CORRECTLY");
      }
    })
  });
});
