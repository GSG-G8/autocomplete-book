
(() => {
  const querySearch = document.querySelector('.query-search');
  const output = document.querySelector('.output');
  const books = document.querySelector('.books');
  const btn = document.querySelector('.btn');
  querySearch.addEventListener('keyup', () => {
    const url = '/books';
    const inputValue = querySearch.value;

    apiFunction(url, inputValue, 'POST', (result) => {
      const list = document.createElement('datalist');
      list.setAttribute('id', 'result-list');
      result.forEach((item) => {
        const title = document.createElement('option');
        title.setAttribute('value', item);
        list.appendChild(title);
      });
      output.appendChild(list);
      output.replaceChild(list, output.lastChild);
    });
  });

  btn.addEventListener('click', () => {
    books.textContent = '';
    const urlBooks = `https://www.googleapis.com/books/v1/volumes?q=${querySearch.value}`;
    apiFunction(urlBooks, [], 'GET', (obj) => {
      const item = document.createElement('div');
      item.classList.add('item');

      const img = document.createElement('img');
      img.src = obj.items[0].volumeInfo.imageLinks.thumbnail;
      img.classList.add('cover');
      item.appendChild(img);

      const title = document.createElement('strong');
      title.textContent = `Title: ${obj.items[0].volumeInfo.title}`;
      item.appendChild(title);

      const authors = document.createElement('p');
      authors.textContent = `Authors: ${obj.items[0].volumeInfo.authors}`;
      item.appendChild(authors);
      books.appendChild(item);
    });
  });
})();
