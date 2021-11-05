async function create() {
    let name = prompt("Enter a room name");
    const options = {
        method: 'POST',
        body: JSON.stringify({"name": name}),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    let results = await fetch("/create", options);
    let res = await results.json();
    if(res.success) {
        window.location.href = "/servers/" + name;
    }
}
async function join() {
    let name = prompt("Enter Room Code");
    window.location.href = "/servers/" + name;
}