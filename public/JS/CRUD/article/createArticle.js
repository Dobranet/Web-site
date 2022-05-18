function postArticleData(title, content, authorId) {
  const data = { title: title, content: content, authorId: authorId };

  fetch('http://localhost:12345/articles/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => console.log('Result:', data))
    .catch((error) => console.error('Error:', error));
}

function createArticle(){

  var titleInput = document.getElementById('title').value;
  var contentInput = document.getElementById('content').value;
  var authorIdInput = document.getElementById('authorId').value;
  var submitButton = document.getElementById('createArticleButton')
    .addEventListener('click' , postArticleData(titleInput, contentInput, authorIdInput));
}