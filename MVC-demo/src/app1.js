import './app1.css';
import $ from 'jquery'; //js引入js

//model 数据
const model = {
  data: {
    result: parseInt(localStorage.getItem('result'))
  }
};

//view 视图
const view = {
  el: null,
  html: `
  <div>
    <div id="outputAreas">
      <span id="result">{{result}}</span>
    </div>
    <div id="operateArea">
      <button id="add">+1</button>
      <button id="sub">-1</button>
      <button id="mul">×2</button>
      <button id="divide">÷2</button>
    </div>
  </div>
`,
  init(container) {
    view.container = $(container);
    view.render();
  },

  render() {
    if (view.el === null) {
      //初次渲染
      view.el = $(view.html.replace('{{result}}', model.data.result)).appendTo(
        $(view.container)
      );
    } else {
      const newElement = $(view.html.replace('{{result}}', model.data.result));
      view.el.replaceWith(newElement);
      view.el = newElement;
    }
  }
};
//control 控制
const control = {
  init(container) {
    view.init(container);
    control.bindEvents();
  },
  bindEvents() {
    view.container.on('click', '#add', () => {
      model.data.result += 1;
      view.render();
    });
    view.container.on('click', '#sub', () => {
      model.data.result -= 1;
      view.render();
    });
    view.container.on('click', '#mul', () => {
      model.data.result *= 2;
      view.render();
    });
    view.container.on('click', '#divide', () => {
      model.data.result /= 2;
      view.render();
    });
  }
};

export default control;
