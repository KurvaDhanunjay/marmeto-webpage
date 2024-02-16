function searchFunction() {
  var input = document.getElementById('search-input');
  var filter = input.value.toUpperCase();
  var resultsDiv = document.getElementById('results');
  fetch(`https://products-api-2ttf.onrender.com/api/products?query=${filter}`)
    .then(response => response.json())
    .then(data => {
      resultsDiv.innerHTML = "";
      data.forEach(result => {
        var div = document.createElement('div');

    var img = document.createElement('img'); 
    img.src = result.image; 
    div.appendChild(img);

    var title = document.createElement('p'); 
    title.textContent = result.title; 
    div.appendChild(title); 
    resultsDiv.appendChild(div);
      });
    });
}

function viewAll() {
  fetch(`https://products-api-2ttf.onrender.com/api/products?query=all`)
    .then(response => response.json())
    .then(data => {
      displayData(data);
    });
}

function watchNow() {
  fetch(`https://products-api-2ttf.onrender.com/api/products?query=watchNow`)
    .then(response => response.json())
    .then(data => {
      displayData(data);
    });
}
function displayData(data) {
  var resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = "";
  data.forEach(result => {
    var div = document.createElement('div');
    div.className = 'results-item';

    var img = document.createElement('img');
    img.src = result.image;
    div.appendChild(img);

    var title = document.createElement('p');
    title.textContent = result.title;
    div.appendChild(title);

    resultsDiv.appendChild(div);
  });
}
