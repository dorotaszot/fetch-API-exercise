
document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJSON);

// Get locat text file data
function getText() {
  fetch('test.txt')
    .then(function (response) {
      return response.text();
    })
    .then(function (data) {
      document.getElementById('output').innerText = data;
    });
};

// Get local JSON data
function getJSON() {
  fetch('posts.json')
    .then(function (response) {
      return response.json();
    })
    .then(function (posts) {
      let output = '';
      posts.forEach(function (post) {
        output += `
        <li>${post.title}</li>
        <li>${post.body}</li>
        `
      })

      document.getElementById('output').innerHTML = output;
    })
}

