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
//contact us page
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
function validateForm() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var comment = document.getElementById('comment').value;

  // Clear previous error messages
  document.getElementById('errorMessages').innerHTML = '';

  // Check if name is empty
  if (name.trim() === '') {
    showError('Name is required');
    return false;
  }

  // Check if email is empty and valid
  if (email.trim() === '') {
    showError('Email is required');
    return false;
  } else if (!isValidEmail(email)) {
    showError('Invalid email format');
    return false;
  }

  // Check if comment is empty
  if (comment.trim() === '') {
    showError('Comment is required');
    return false;
  }

  // Form is valid, you can submit the form or handle it through AJAX
  // For demonstration purposes, we'll just display a success message
  alert('Form submitted successfully!');
  return false; // Prevent form submission for this demo
}

function isValidEmail(email) {
  // Regular expression for basic email validation
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function showError(message) {
  var errorMessageDiv = document.getElementById('errorMessages');
  errorMessageDiv.innerHTML += '<p>' + message + '</p>';
}
//menu page
$(document).ready(function() {
  // Shopping cart array to store selected items
  const cart = [];

  // Add a click event handler to each coffee item
  $('.coffee-item').on('click', function() {
    const itemName = $(this).data('item');
    const itemPrice = $(this).data('price');
    const itemImage = $(this).data('image');
    const itemDescription = $(this).data('description');

    // Update the modal content with the selected coffee item's information
    $('.modal-title').text(itemName);
    $('.modal-image').attr('src', itemImage);
    $('.modal-description').text(itemDescription);

    // Store the selected item's information in the modal's "Add to Order" button
    $('.order-button').data('item', itemName);
    $('.order-button').data('price', itemPrice);

    // Display the modal
    $('#orderModal').fadeIn();
  });

  // Click event handler for the "Add to Order" button in the modal
  $('.order-button').on('click', function() {
    const itemName = $(this).data('item');
    const itemPrice = $(this).data('price');

    // Create an object representing the selected coffee item
    const selectedItem = {
      name: itemName,
      price: itemPrice,
      quantity: 1, // You can set the initial quantity to 1 or implement quantity selection in the modal
    };

    // Add the item to the cart
    cart.push(selectedItem);

    // Save the cart data to localStorage so it persists across pages
    localStorage.setItem('cart', JSON.stringify(cart));

    // Close the modal after adding the item to the cart
    $('#orderModal').fadeOut();

    // Replace the alert with a confirmation message (optional)
    alert(`Added ${itemName} to the order!`);
  });
});

$(document).ready(function() {
  // Shopping cart array to store selected items
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  console.log(cart);

  // Function to update the cart item count
  function updateCartItemCount() {
    const cartItemCount = cart.length;
    $('.cart-item-count').text(cartItemCount);
  }

  // Add a click event handler to each coffee item
  $('.coffee-item').on('click', function() {
    const itemName = $(this).data('coffee-item');
    const itemPrice = $(this).data('coffee-price');
    const itemImage = $(this).data('coffee-image');
    const itemDescription = $(this).data('description');

    // Create an object representing the selected coffee item
    const selectedItem = {
      name: itemName,
      price: itemPrice,
      quantity: 1, // You can set the initial quantity to 1 or implement quantity selection in the modal
      image: itemImage,
      description: itemDescription,
    };

    // Add the item to the cart
    cart.push(selectedItem);

    // Save the cart data to localStorage so it persists across pages
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update the cart item count displayed in the cart icon
    updateCartItemCount();

    // Replace the alert with a confirmation message (optional)
    alert(`Added ${itemName} to the cart!`);
  });

  // Function to update the cart item count on page load
  updateCartItemCount();
});
//shop page
$(document).ready(function() {
  // Event listener for form submission
  $('#gift-card-form').submit(function(e) {
    e.preventDefault();
    
    // Get selected amount
    const selectedAmount = $('#amount').val();
    
    // Display confirmation modal
    $('#confirmation-modal .modal-amount').text('$' + selectedAmount);
    $('#confirmation-modal').show();
  });

  // Close modal on button click
  $('#confirmation-modal button').click(function() {
    $('#confirmation-modal').hide();
  });
});


  // Close modal on button click
  $('#confirmation-modal button').click(function() {
    $('#confirmation-modal').hide();
  });

  // Close cart success modal on button click
  $('#cart-success-modal button').click(function() {
    $('#cart-success-modal').hide();
  });
