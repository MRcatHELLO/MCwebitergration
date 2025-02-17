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
      input.value = ''; // Clear the input field

      // Add message to the document (optional UI update)
      let newElement = document.createElement('p');
      newElement.textContent = message;

      // Adjust the word spacing for the new element
      newElement.style.wordSpacing = '2px'; // Reduce spacing between words
      document.body.appendChild(newElement);
  } else if (socket.readyState !== WebSocket.OPEN) {
      console.log('WebSocket is not open. Current state:', socket.readyState);
  }
});
