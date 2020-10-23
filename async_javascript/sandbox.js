// async & await

const getTodos = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todoss');
    const data = await response.json();
    return data;
}

getTodos().then(data => {
    data.forEach(element => {
        console.log(element.title);
    });
}).catch(err => {
    console.log(err.message);
})