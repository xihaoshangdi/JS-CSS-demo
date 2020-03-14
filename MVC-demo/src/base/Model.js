class Model {
  constructor(options) {
    ['data', 'add', 'del', 'update', 'get'].forEach(key => {
      if (key in options) {
        this[key] = options[key];
      }
    });
  }
  add() {
    console && console.error && console.error('未实现add方法');
  }
  del() {
    console && console.error && console.error('未实现add方法');
  }
  update() {
    console && console.error && console.error('未实现add方法');
  }
  get() {
    console && console.error && console.error('未实现add方法');
  }
}

export default Model;
