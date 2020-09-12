
document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJSON);
document.getElementById('button3').addEventListener('click', getExternalAPI);

// Get locat text file data
function getText() {
  fetch('test.txt')
    .then(response => response.text())
    .then(data => document.getElementById('output').innerText = data);
};

// Get local JSON data
function getJSON() {
  fetch('posts.json')
    .then(response => response.json())
    .then(posts => {
      let output = '';
      posts.forEach(post => {
        output += `
        <li>${post.title}</li>
        <li>${post.body}</li>
        `
      })

      document.getElementById('output').innerHTML = output;
    })
}

// Get external API data
function getExternalAPI() {
  fetch("https://api.github.com/users")
    .then(response => response.json())
    .then(users => {
      let output = '';
      users.forEach(user => {
        output += `
      <li>${user.login}</li>
      `
      })
      document.getElementById('output').innerHTML = `<p>GitHub Users:</p> ${output}`;

    })
}