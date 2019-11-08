const btn = document.createElement('button');
btn.id = 'GetJson';
btn.innerText = 'GetJson';
operate.appendChild(btn);
n = 1;
GetJson.onclick = () => {
  if (n <= 2) {
    const request = new XMLHttpRequest();
    request.open('GET', `book${n}.json`);
    request.onreadystatechange = () => {
      if (request.readyState === 4 && request.status === 200) {
        // 对Json数据做处理
        card.innerText = '';
        let JsonObj = JSON.parse(request.response);
        for (let i = 0; i < JsonObj.result.length; i++) {
          const data = document.createElement('li');
          data.innerText = JsonObj.result[i];

          card.appendChild(data);
          console.log();
        }
      }
    };
    request.send();
    n += 1;
  } else {
    alert('已经没有数据了');
  }
};
