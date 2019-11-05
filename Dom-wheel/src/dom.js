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
  },
  attr(node, object, value) {
    if (arguments.length === 3) {
      node.setAttribute(object, value);
    } else if (arguments.length === 2) {
      if (typeof object === 'string') {
        return node.getAttribute(object);
      } else if (typeof object === 'object') {
        for (key in object) {
          node.setAttribute(key, object[key]);
        }
      }
    }
  },
  text(node, value) {
    if (arguments.length === 1) {
      if ('innerText' in node) {
        return node.innerText;
      } else {
        return node.textContent;
      }
    } else if (arguments.length === 2) {
      if ('innerText' in node) {
        node.innerText = value;
      } else {
        node.textContent = value;
      }
    }
  },
  html(node, htmlStr) {
    if (arguments.length === 1) {
      return node.innerHTML;
    } else if (arguments.length === 2) {
      node.innerHTML = htmlStr;
    }
  },
  style(node, name, value) {
    if (arguments.length === 3) {
      //node, 'color', 'red'
      node.style[name] = value;
    } else if (arguments.length === 2) {
      if (typeof name === 'string') {
        return node.style[name];
      } else if (typeof name === 'object') {
        for (key in name) {
          node.style[key] = name[key];
        }
      }
    }
  },
  class: {
    add(node, className) {
      node.classList.add(className);
    },
    remove(node, className) {
      node.classList.remove(className);
    }
  },
  on(node, event, fn) {
    node.addEventListener(event, fn);
  },
  off(node, event) {
    node.removeEventListener(event, fn);
  },
  find(query) {
    return document.querySelector(query);
  },
  parent(node) {
    return node.parentNode;
  },
  children(node) {
    return Array.from(node.children);
  },
  sibliings(node) {
    let childList = dom.children(node.parentNode);
    childList.splice(childList.indexOf(node), 1);
    return childList;
  },
  next(node) {
    return node.nextElementSibling;
  },
  previous(node) {
    return node.previousElementSibling;
  },
  each(nodeList, fn) {
    for (let i = 0; i < nodeList.length; i++) {
      fn.call(null, nodeList[i], fn);
    }
  },
  index(node) {
    let childList = dom.children(node.parentNode);
    return childList.indexOf(node);
  }
};
