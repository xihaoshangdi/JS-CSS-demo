let htmlBox = document.querySelector('#htmlBox');
let cssBox = document.querySelector('#cssBox');

let htmlText = `/**
* 大家好，我是一个前端的新人.
* 接下来我要表演一下如何制作一个太极图。
* 在这之前，我先调整一下我的编辑器。
**/
#htmlBox {
  position: relative;
  left: 15px;
  top: 50px;
  background-color: #696969;
  color: rgb(199, 237, 204);
  padding: 0.5em;
  transform: rotateY(40deg);
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.2);
}
/**
* 先搞一个div
**/
#contentBox {
  width: 30vw;
  height: 30vw;
  border-radius: 50%;
  border-right: 1px solid black;
}
/**
* 加点颜色
**/
#contentBox {

background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 22%, rgba(0,0,0,1) 50%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%);
}
/**
* 加球
**/
#white {
  background-color: white;
}
#black {
  background-color: black;
}
/**
* 再加球
**/
#white::before {
  content: '';
  display: block;
  height: 5vw;
  width: 5vw;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: black;
}
#black::before {
  content: '';
  display: block;
  height: 5vw;
  width: 5vw;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
}
/**
* 最后让太极旋转起来
**/
#contentBox {
  animation:run 3s linear 0s infinite normal none
}
`;

let strCount = htmlText.length - 1;
let outCount = 0;
let htmlNote = '';
let cssNote = '';

let out = function() {
  if (htmlText[outCount] === '\n') {
    htmlNote += '</br>';
  } else if (htmlText[outCount] === ' ') {
    htmlNote += '&nbsp';
  } else {
    htmlNote += htmlText[outCount];
  }
  cssNote += htmlText[outCount];

  htmlBox.innerHTML = htmlNote;
  cssBox.innerHTML = cssNote;

  if (outCount < strCount) {
    outCount += 1;
    htmlBox.scrollTop = 3000;
    setTimeout(out, 50);
  }
};

out.call(undefined);
