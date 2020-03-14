import './app2.css';
import $ from 'jquery';
import Model from './base/Model';

//通信对象
const eventBus = $(window);
//
const localStoKey = 'tab';
//Model
const model = new Model({
  data: {
    index: parseInt(localStorage.getItem(localStoKey)) || 1
  },
  update: function(index) {
    Object.assign(model.data, index);
    eventBus.trigger('m:updated');
    localStorage.setItem(localStoKey, model.data.index);
  }
});
//View
const view = {
  el: null,
  html(index) {
    return `
  <div>
  <ol class="tab-Bar">
    <li data-index='1' class=${index !== 2 ? 'selector' : ''}>1</li>
    <li data-index='2' class=${index === 2 ? 'selector' : ''}>2</li>
  </ol>
  <ol class="tab-Content">
    <li class=${index !== 2 ? 'active' : ''}>first</li>
    <li class=${index === 2 ? 'active' : ''}>second</li>
  </ol>
  </div>`;
  },
  init(container) {
    view.el = $(container);
  },
  render(index) {
    console.log(index);
    if (view.el.children.length !== 0) {
      view.el.empty();
    }
    $(view.html(index)).appendTo($(view.el));
  }
};

//control 控制
const control = {
  init(container) {
    view.init(container);
    view.render(model.data.index);
    control.autoBindEvents();
    eventBus.on('m:updated', () => {
      view.render(model.data.index);
    });
  },
  events: {
    'click.li': 'select'
  },
  select(e) {
    const index = parseInt(e.currentTarget.dataset.index);
    model.update({ index: index });
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

// $tabBar
//   .children()
//   .eq(index)
//   .trigger('click');
