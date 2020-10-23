// Fetch Api
fetch('https://jsonplaceholder.typicode.com/todos').then(response => {
    return response.json();
}).then(data => {
    data.forEach(element => {
        console.log(element.title);
    });
}).catch(err => {
    console.log(err);
});
