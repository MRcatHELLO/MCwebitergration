// Attach event listener to the input field for the Enter key
document.getElementById('messageInput').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') { // Check if the Enter key is pressed
        document.getElementById('sendButton').click(); // Trigger button click
    }
  });
  
  // Attach event listener to the button
  document.getElementById('sendButton').addEventListener('click', () => {
    const input = document.getElementById('messageInput');
    const message = input.value.trim();
    if (message !== '' && socket.readyState === WebSocket.OPEN) {
        socket.send(message);
        console.log('Sent message:', message);
        displayMessage('You', message); // Show the sent message
        input.value = ''; // Clear the input field
    } else if (socket.readyState !== WebSocket.OPEN) {
        console.log('WebSocket is not open. Current state:', socket.readyState);
    }
});

// Listen for incoming messages
socket.addEventListener('message', (event) => {
    console.log('Received message:', event.data);
    displayMessage('Server', event.data); // Display the received message
});

// Display messages in the message container
function displayMessage(sender, message) {
    const messageContainer = document.getElementById('messageContainer');
    const newMessage = document.createElement('p');
    newMessage.textContent = `${sender}: ${message}`;
    newMessage.classList.add('message');
    messageContainer.appendChild(newMessage);
    messageContainer.scrollTop = messageContainer.scrollHeight; // Scroll to the bottom
}

document.getElementById('lights on').addEventListener('click', () => {
    socket.send("lights on")    
})
document.getElementById('lights off').addEventListener('click', () => {
    socket.send("lights off")    
})