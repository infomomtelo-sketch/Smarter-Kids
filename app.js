```javascript
// Ensure the DOM is fully loaded before executing scripts
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element by its ID
    const button = document.getElementById('alertButton');

    // Add an event listener to the button for the 'click' event
    button.addEventListener('click', function() {
        // Show an alert message when the button is clicked
        alert('Button clicked!');
    });
});
```
