getBlock.onclick = () => {
  const request = new XMLHttpRequest();
  request.open('GET', 'block.html');
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const element = document.createElement('div');
      element.innerHTML = request.response;
      container.appendChild(element);
    }
  };
  request.send();
};
getCss.onclick = () => {
  const request = new XMLHttpRequest();
  request.open('GET', 'block.css');
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const element = document.createElement('style');
      element.innerHTML = request.response;
      container.appendChild(element);
    }
  };
  request.send();
};
getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open('GET', 'block.js');
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const element = document.createElement('script');
      element.innerHTML = request.response;
      container.appendChild(element);
    }
  };
  request.send();
};
