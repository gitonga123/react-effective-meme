const getTodos = (callback) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            callback(null, request.responseText);
        } else if (request.readyState === 4 ) {
            callback("Error: Data not found.", null);
        }
    });
    request.open('GET', 'https://jsonplaceholder.typicode.com/todos');request.send();
}

getTodos((err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
