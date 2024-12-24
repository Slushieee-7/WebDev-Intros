document.getElementById('save').addEventListener('click', function() {
    const userInput = document.getElementById('input').value;
    localStorage.setItem('saved', userInput);
    alert('Text saved!');
    document.getElementById('input').value = ''; // Clear input after saving
});

// Function to load input from Local Storage
document.getElementById('show').addEventListener('click', function() {
    const savedText = localStorage.getItem('saved'); // Retrieve the text from Local Storage
    document.getElementById('saved').innerText = savedText ? savedText : 'No text saved.'; // Display the saved text
});
