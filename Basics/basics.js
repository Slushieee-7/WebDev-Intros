function changeImage(choice) {
    const imageElement = document.getElementById('image'); // Get the image element
    switch (choice) {
        case 'rock':
            imageElement.src = 'rock.png'; // Change to rock image
            break;
        case 'paper':
            imageElement.src = 'paper.png'; // Change to paper image
            break;
        case 'scissors':
            imageElement.src = 'scissors.png'; // Change to scissors image
            break;
        default:
            console.log('Invalid choice');
    }
}

//we use switch case to easily switch to the specific image of the button
//document.getElementById() - is the syntax when the code needs to get the element of the assigned ID
                        //  - in this example, the code will get now rely on the ID named 'image' at the HTML file
//imageElement.src = 'filename' - is the syntax that if the respective button is pressed, then returned its choice, it will display their respective image
