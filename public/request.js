const apiFunction = (url, data, method, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const obj = JSON.parse(xhr.responseText);
      callback(obj);
    }
  };
  xhr.open(method, url);
  xhr.send(data);
};
