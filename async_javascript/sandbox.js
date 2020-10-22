const getTodos = (resource, callback) => {
  const request = new XMLHttpRequest();
  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      callback(null, data);
    } else if (request.readyState === 4) {
      callback("Error: Data not found.", null);
    }
  });
  request.open("GET", resource);
  request.send();
};

getTodos("https://jsonplaceholder.typicode.com/todos", (err, data) => {
  console.log(data);
  getTodos("https://jsonplaceholder.typicode.com/posts", (err, data) => {
    console.log(data);
    getTodos("https://jsonplaceholder.typicode.com/users", (err, data) => {
      console.log(data);
    });
  });
});
