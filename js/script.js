$(document).ready(function() {

})
<script>
$(document).ready(function() {
    var $button = $('<button>' , {
        text: 'Order Now' ,
        class: 'myButton' ,
        click: function() {
            alert('Thank you for ordering!');
        }
    });
    $('#button').append($button);
});
$(document).ready(function() {
  // Intercept the form submission
  $('#contactForm').submit(function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    var formData = $(this).serialize();

    // Send the form data to the server-side script (submit_form.php)
    $.ajax({
      type: 'POST',
      url: $(this).attr('action'),
      data: formData,
      success: function(response) {
        // Show a success message or any server-side response
        $('#responseMessage').html(response);
      },
      error: function() {
        // Handle errors, if any
        $('#responseMessage').html('An error occurred while processing the form.');
      }
    });
  });
});
