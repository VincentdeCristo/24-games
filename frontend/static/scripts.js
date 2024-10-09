function solve() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const num3 = document.getElementById('num3').value;
    const num4 = document.getElementById('num4').value;

    const numbers = [parseInt(num1), parseInt(num2), parseInt(num3), parseInt(num4)];

    // Remove any erroneous styles that may have been added previously
    document.querySelectorAll('input').forEach(input => input.classList.remove('error-input'));

    // Checks if all inputs are valid numbers
    if (numbers.some(num => isNaN(num) || num === "" || num < 0 || num > 99)) {
        document.getElementById('result').textContent = 'Please enter 4 valid numbers between 0 and 99.';
        
        // Add a jitter effect to the fields with incorrect input
        document.querySelectorAll('input').forEach(input => {
            if (isNaN(input.value) || input.value === "" || input.value < 0 || input.value > 99) {
                input.classList.add('error-input');  // Triggering CSS shake animation
            }
        });

        return;
    }

    // Send requests to the backend and process the results
    fetch('/solve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ numbers: numbers })
    })
    .then(response => response.json())
    .then(data => {
        if (data.solution) {
            document.getElementById('result').textContent = `Solution: ${data.solution}`;
        } else {
            document.getElementById('result').textContent = 'No solution found';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('result').textContent = 'Error solving the problem.';
    });
}
