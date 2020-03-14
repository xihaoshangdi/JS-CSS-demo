import './app1.css';
import $ from 'jquery'; //js引入js
import Model from './base/Model';

//通信对象
const eventBus = $(window);

//model 数据
const model = new Model({
  data: {
    result: parseInt(localStorage.getItem('result'))
  },
  update: function(number) {
    Object.assign(model.data, number);
    eventBus.trigger('m:updated');
    localStorage.setItem('result', model.data.result);
  }
});

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
    view.el = $(container);
  },

  render(number) {
    if (view.el.children.length !== 0) {
      view.el.empty();
    }
    $(view.html.replace('{{result}}', number)).appendTo($(view.el));
  }
};
//control 控制
const control = {
  init(container) {
    view.init(container);
    view.render(model.data.result);
    control.autoBindEvents();
    eventBus.on('m:updated', () => {
      view.render(model.data.result);
    });
  },
  events: {
    'click.#add': 'add',
    'click.#sub': 'sub',
    'click.#mul': 'mul',
    'click.#divide': 'divide'
  },
  add() {
    model.update({ result: model.data.result + 1 });
  },
  sub() {
    model.update({ result: model.data.result - 1 });
  },
  mul() {
    model.update({ result: model.data.result * 2 });
  },
  divide() {
    model.update({ result: model.data.result / 2 });
  },
  autoBindEvents() {
    let key, list;
    for (key in control.events) {
      list = key.split('.');
      view.el.on(list[0], list[1], control[control.events[key]]);
    }
  }
};

export default control;
