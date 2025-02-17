

window.connectWebSocket = function () {
    const wsAddress = document.getElementById("wsAddress").value; // Get user input

    if (!wsAddress.startsWith("ws://") && !wsAddress.startsWith("wss://")) {
        alert("Invalid WebSocket address. It should start with ws:// or wss://");
        return;
    }


    const socket = new WebSocket(wsAddress);

    socket.addEventListener('open', function (event) {
    console.log('Connection established!');
    socket.send('');
    });

    socket.addEventListener('message', function (event) {
    console.log('Message from server:', event.data);
    });
    // Assume 'socket' is your existing WebSocket connection
    if (socket.readyState === WebSocket.OPEN) {
    socket.send('Your message here'); // Sending a message
    } else {
    console.log('WebSocket is not open. Current state: ' + socket.readyState);
    }
}


// Close the connection when done
// socket.close();
