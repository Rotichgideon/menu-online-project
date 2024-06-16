// Get all buttons with id 'btn'
const buttons = document.querySelectorAll('#btn');
// Get the total price span element
const totalPriceElement = document.getElementById('total-price');
// Initialize total price variable
let totalPrice = 0;

// Loop through each button
buttons.forEach(button => {
    // Add click event listener to each button
    button.addEventListener('click', () => {
        // Toggle the 'clicked'
        button.classList.toggle('clicked');
        
        // Get the price from data attribute of the clicked button
        const price = parseFloat(button.getAttribute('data-price'));
        
        // Check if the button is clicked
        if(button.classList.contains('clicked')) {
            // Add the price to total price
            totalPrice += price;
        } else {
            // Subtract the price from total price if button is unclicked
            totalPrice -= price;
        }
        
        // Update the total price element
        totalPriceElement.textContent = totalPrice.toFixed(2);
    });
});

// Function to reset button states and total price
function resetOrder() {
    // Remove 'clicked' class from all buttons
    buttons.forEach(button => {
        button.classList.remove('clicked');
    });
    // Reset total price to 0
    totalPrice = 0.00;
    totalPriceElement.textContent = totalPrice.toFixed();
}

// Function to submit order
function submitOrder() {
    // Here you can implement the logic to submit the order
    alert('Order Submitted!');
    // Reset button states and total price
    resetOrder();
}

// Get the submit order button
const submitOrderButton = document.getElementById('submit-order');
// Add click event listener to submit order button
submitOrderButton.addEventListener('click', submitOrder);