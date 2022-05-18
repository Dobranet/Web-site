function postUserData(email, name) {
  const data = { email: email, name: name };

  fetch('http://localhost:12345/users/create', {
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

function createUser(){

  var emailInput = document.getElementById('email').value;
  var nameInput = document.getElementById('name').value;
  var submitButton = document.getElementById('createUserButton')
    .addEventListener('click' , postUserData(emailInput, nameInput));
}