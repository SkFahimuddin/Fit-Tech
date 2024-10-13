function handleForm(event) {
    event.preventDefault(); // Prevent page reload

    // Get input values
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    localStorage.setItem('weight', weight);
    localStorage.setItem('height', height);

    // Validate inputs
    if (height && weight) {
        // Redirect to catagory.html if inputs are valid
        window.location.href = 'templates/catagory/catagory.html';
    }
}