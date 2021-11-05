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
    console.log(await results.json());
}
function join() {

}