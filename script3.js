const computerID = "Computer ID"; 

function ButtonCreate() {
    let myDiv = document.getElementById("buttonpart1");
    let button = document.createElement('BUTTON');
    let text = document.createTextNode("Example");
    button.appendChild(text);
    myDiv.appendChild(button);
}

function addDiv(ID) {
    var objTo = document.getElementById('container');
    
    // Check if a div with this ID already exists
    if (document.getElementById(ID)) return; 

    var divtest = document.createElement("div");
    divtest.id = ID; 
    divtest.classList.add("computer", ID); 
    divtest.innerHTML = `Computer ID: ${ID}`; 
    objTo.appendChild(divtest);
}

window.connectWebSocket = function () {
    const wsAddress = document.getElementById("wsAddress").value;

    if (!wsAddress.startsWith("ws://") && !wsAddress.startsWith("wss://")) {
        alert("Invalid WebSocket address. It should start with ws:// or wss://");
        return;
    }

    const socket = new WebSocket(wsAddress);

    socket.addEventListener('open', function () {
        console.log('Connection established!');
        socket.send(); 
    });

    socket.addEventListener('message', function (event) {
        console.log('Message from server:', event.data);
        
        if (event.data.includes(computerID)) { // Check if message contains "Computer ID"
            let receivedID = event.data.trim(); 
            addDiv(receivedID); 
        }
    });

    socket.addEventListener('error', function (error) {
        console.error('WebSocket error:', error);
    });

    socket.addEventListener('close', function () {
        console.log('WebSocket closed');
    });
};

