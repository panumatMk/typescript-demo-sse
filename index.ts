// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;


const eventsource = new EventSource(`https://simple-node-api-1234567890.herokuapp.com/events`)

eventsource.onmessage = (msg) => {
    const node = document.createElement("div");
    node.innerHTML = `value: ${JSON.parse(msg.data).value}`;
    appDiv.appendChild(node);
}
