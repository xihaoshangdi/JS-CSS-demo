window.dom = {
  test() {
    console.log('暴露测试');
  },
  create(htmlStr) {
    let template = document.createElement('template');
    template.innerHTML = htmlStr.trim();
    return template.content.firstChild;
  },
  append(parent, child) {
    if ('length' in child) {
      //传入的是数组;
      while (child.length) {
        parent.appendChild(child.shift());
      }
    } else {
      //传入的是对象
      parent.appendChild(child);
    }
  },
  after(node, aftNode) {
    //将参照节点设置为当前节点的下一个节点
    //新节点就插入到当前节点的下一个节点之前
    //自然就插在当前节点之后了
    node.parentNode.insertBefore(aftNode, node.next);
  },
  before(node, befNode) {
    node.parentNode.insertBefore(befNode, node);
  },
  wrap(node, htmlStr) {
    let par = dom.create(htmlStr);
    dom.before(node, par);
    par.appendChild(node);
  },
  remove(node) {
    //删除并返回子节点
    node.parentNode.removeChild(node);
    return node;
  },
  empty(node) {
    //删除并返回所有子节点
    const array = [];
    let cur = node.firstChild;
    while (cur) {
      array.push(dom.remove(node.firstChild));
      cur = node.firstChild;
    }
  }
};
