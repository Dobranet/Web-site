function getFromAPI() {
  const randomUserId = Math.floor(Math.random() * 5) + 1;
  console.log('Random authorId: ' + randomUserId);
  return fetch('http://localhost:12345/articles/user/' + randomUserId)
    .then(function (response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .then(function (json) {
      console.log(json);
      return json;
    });
}

function appendNewRows(Data) {
  const header = document
    .getElementById('header__template')
    .content.cloneNode(true);
  const container = document.querySelector('.table');
  const template = document.querySelector('#fetch-row');
  container.appendChild(header);

  for (let i = 0; i < Data.length; i++) {
    const clone = template.content.cloneNode(true);
    const authorId = clone.querySelector('.table__row__authorId');
    const articleId = clone.querySelector('.table__row__articleId');
    const title = clone.querySelector('.table__row__title');
    const published = clone.querySelector('.table__row__published');

    authorId.innerHTML = Data[i]['authorId'];
    articleId.innerHTML = Data[i]['id'];
    title.innerHTML = Data[i]['title'];
    published.innerHTML = Data[i]['published'];

    container.appendChild(clone);
  }
}

function removeLoadingAndDisplayTable() {
  document.querySelector('.fetch__spinner').style.display = 'none';
  document.querySelector('.fetch__table').style.display = 'inherit';
}

function displayError() {
  document.querySelector('.fetch__table').style.display = 'none';
  document.querySelector('.fetch__spinner').style.display = 'none';
  document.querySelector('.fetch__oops').style.display = 'inherit';
}

function refresh() {
  document.querySelector('.fetch__table').style.display = 'inherit';
  document.querySelector('.fetch__spinner').style.display = 'inherit';
  document.querySelector('.fetch__oops').style.display = 'none';
}

function deleteOldRows() {
  document.querySelector('.fetch__table').style.display = 'none';
  document.querySelector('.fetch__table').innerHTML = '';
}

function run() {
  refresh();
  deleteOldRows();
  getFromAPI()
    .then(function (data) {
      appendNewRows(data);
    })
    .then(() => removeLoadingAndDisplayTable())
    .catch(() => displayError());
}
