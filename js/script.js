// your_script.js
// Include jQuery dynamically in your JavaScript file
var script = document.createElement('script');
script.src = "https://code.jquery.com/jquery-3.6.0.min.js";
document.head.appendChild(script);

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

$(document).ready(function() {
  // Add a click event handler to the menu items
  $('.menu-item').click(function() {
    // Toggle the description visibility when a menu item is clicked
    $(this).find('p , .cofee , .lattee').slideToggle();
  });
});
$(document).ready(function() {
  // Add hover effect to shop icons
  $('.shop-icon').hover(
    function() {
      $(this).css('transform', 'scale(1.2)'); // Scale up the icon on hover
    },
    function() {
      $(this).css('transform', 'scale(1)'); // Restore original size when not hovered
    }
  );
});
