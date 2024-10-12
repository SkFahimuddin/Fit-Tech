function handleForm(event) {
    event.preventDefault(); // Prevent page reload

    // Get input values
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;

    // Validate inputs
    if (height && weight) {
        // Redirect to catagory.html if inputs are valid
        window.location.href = 'templates/catagory/catagory.html';
    } else {
        // Alert if inputs are missing
        alert("Please fill in both height and weight fields.");
    }
}