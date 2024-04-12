document.addEventListener('DOMContentLoaded', function () {
    // Get all buttons with class 'btn'
    const buttonsContainer = document.getElementById('#btn');
    // Get the total price span element
    const totalPriceElement = document.getElementById('total-price');
    // Initialize total price variable
    let totalPrice = 0;

    // Fetch button data from the server
    fetch('https://menu-online-project-1.onrender.com/menu') // Assuming your JSON server is running locally on port 3000 and serves menu data from '/menu' endpoint
        .then(response => response.json())
        .then(data => {
            // Create buttons based on data fetched from the server
            data.forEach(menuItem => {
                const button = document.createElement('button');
                button.textContent = menuItem.name + ' - sh ' + menuItem.price;
                button.setAttribute('data-price', menuItem.price);
                button.classList.add('#btn');
                buttonsContainer.appendChild(button);
            });

            // Get all buttons after they have been created
            const buttons = document.querySelectorAll('#btn');

            // Loop through each button
            buttons.forEach(button => {
                // Add click event listener to each button
                button.addEventListener('click', () => {
                    // Toggle the 'clicked' class
                    button.classList.toggle('clicked');

                    // Get the price from data attribute of the clicked button
                    const price = parseFloat(button.getAttribute('data-price'));

                    // Update the total price based on button state
                    if (button.classList.contains('clicked')) {
                        totalPrice += price;
                    } else {
                        totalPrice -= price;
                    }

                    // Update the total price element
                    totalPriceElement.textContent = totalPrice.toFixed(2);
                });
            });
        })
        .catch(error => {
            console.error('Error fetching button data:', error);
        });

    // Function to reset button states and total price
    function resetOrder() {
        // Remove 'clicked' class from all buttons
        const buttons = document.querySelectorAll('#btn');
        buttons.forEach(button => {
            button.classList.remove('clicked');
        });
        // Reset total price to 0
        totalPrice = 0;
        totalPriceElement.textContent = totalPrice.toFixed(2);
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
});