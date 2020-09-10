document.getElementById('button1').addEventListener('click', getText);

function getText() {
  fetch('test.txt')
    .then(function (response) {
      return response.text();
    })
    .then(function (data) {
      document.getElementById('output').innerText = data;
      // console.log(data);
    });
};
