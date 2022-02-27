// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;


const eventsource = new EventSource(`https://tranquil-stream-88961.herokuapp.com/events`)

eventsource.onmessage = (msg) => {
    const node = document.createElement("div");
    node.innerHTML = `value: ${JSON.parse(msg.data).value}`;
    appDiv.appendChild(node);
}
