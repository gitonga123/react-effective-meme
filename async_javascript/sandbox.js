const getTodos = resource => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject("Error: Data not found.", null);
      }
    });
    request.open("GET", resource);
    request.send();
  });
};

getTodos('https://jsonplaceholder.typicode.com/todos').then(data => {
  data.forEach(element => {
    console.log(element.title);
  });
  return getTodos('https://jsonplaceholder.typicode.com/users');
}).then(data => {
  data.forEach(element => {
    console.log(element.id);
  });
  return getTodos('https://jsonplaceholder.typicode.com/posts');
}).then(data => {
  data.forEach(element => {
    console.log(element.id);
  });
}).catch(error => {
  console.log(error);
});