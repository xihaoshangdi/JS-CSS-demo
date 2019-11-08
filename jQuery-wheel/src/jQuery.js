window.jquery = function(Operator) {
  let elements;
  if (typeof Operator === 'string') {
    elements = document.querySelectorAll(Operator);
  } else if (Operator instanceof Array) {
    elements = Operator;
  }
  return {
    print() {
      console.log(elements);
    },
    each(fn) {
      for (let i = 0; i < elements.length; i++) {
        fn.call(null, elements[i], i);
      }
    },
    find(selectStr) {
      let List = [];
      //这里的this：
      //{print: ƒ, each: ƒ, find: ƒ, addClass: ƒ, removeClass: ƒ, …}
      //是jquery返回的一个可操作对象
      //elements是被jquery操作的对象
      List.oldJqueryElements = this;

      this.each(element => {
        List.push(...element.querySelectorAll(selectStr));
      });
      return jquery(List);
    },
    addClass(className) {
      this.each(node => {
        node.classList.add(className);
      });
      return this;
    },
    removeClass(className) {
      this.each(node => {
        node.classList.remove(className);
      });
      return this;
    },
    parent() {
      let par = [];
      this.each(node => {
        if (par.indexOf(node.parentNode) < 0) {
          par.push(node.parentNode);
        }
      });
      return jquery(par);
    },
    children() {
      let child = [];
      this.each(node => {
        child.push(...node.children);
      });
      return jquery(child);
    },
    end() {
      return this.oldJqueryElements;
    },
    oldJqueryElements: elements.oldJqueryElements
  };
};
window.$ = window.jquery;
