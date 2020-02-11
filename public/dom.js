const request = (url, data) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const obj = JSON.parse(xhr.responseText);
    }
  };
  xhr.open('POST', url, true);
  xhr.send(data);
};
const querySearch = document.querySelector('.query-search');
querySearch.addEventListener('keyup', () => {
  const inputValue = querySearch.value;
  const url = '/book';
  request(url, inputValue);
});
