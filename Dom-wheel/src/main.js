// console.log('测试');
let NodeList = [];
let Node;
let cur;

//dom
dom.test();

//create;
console.log(dom.create(`<div>creat 函数测试</div>`));

//append
Node = dom.create(`<h6>append函数测试</h6>`);
for (let i = 0; i < 5; i++) {
  NodeList.push(dom.create(`<h6>append函数测试${i}</h6>`));
}
//单
cur = document.querySelector('#add');
dom.append(cur, Node);
//多
cur = document.querySelector('#add');
dom.append(cur, NodeList);

//after
Node = dom.create(`<div id="a3">我是第三个</div>`);
cur = document.querySelector('#a2');
dom.after(cur, Node);

//before
cur = document.querySelector('#a2');
Node = dom.create(`<div id="a1">我是第一个</div>`);
dom.before(cur, Node);

// wrap
cur = document.querySelector('#pos');
dom.wrap(cur, `<div id="warp-pos"></div>`);

//remove
cur = document.querySelector('#d2');
dom.remove(cur);

//empty
cur = document.querySelector('#del');
dom.empty(cur);

//attr
cur = document.querySelector('#r1');

dom.attr(cur, 'style', 'color:yellow');
console.log(dom.attr(cur, 'style'));
dom.attr(cur, { style: 'color:red', name: 'xihaoshangdi', title: 'TestFn' });

//text
cur = document.querySelector('#r2');
console.log(dom.text(cur));
dom.text(cur, 'r2#');

//html
cur = document.querySelector('#r3');
console.log(dom.html(cur));
dom.html(cur, '<h1>r3#</h1>');

//style
cur = document.querySelector('#r4');
dom.style(cur, 'color', 'red');
console.log(dom.style(cur, 'color'));
dom.style(cur, { color: 'green', 'font-size': '30px' });

////class

//add
cur = document.querySelector('#r5');
dom.class.add(cur, 'test');
//remove
cur = document.querySelector('#r5');
dom.class.remove(cur, 'test');

//on
cur = document.querySelector('#r6');
fn = () => {
  console.log('被点击了');
};
dom.on(cur, 'click', fn);
//off
cur = document.querySelector('#r6');
dom.off(cur, 'click');

//find
cur = dom.find('#qer');
console.log(cur);

//parent
cur = dom.parent(dom.find('#q1'));
console.log(cur);

//children
cur = dom.children(dom.find('#qer'));
console.log(cur);

//sibiling
cur = dom.sibliings(dom.find('#q2'));
console.log(cur);

//next
cur = dom.next(dom.find('#q3'));
console.log(cur);

//previous
cur = dom.previous(dom.find('#q4'));
console.log(cur);

//each
fn = n => {
  dom.style(n, 'color', 'red');
};
cur = dom.each([dom.find('#qer')], fn);

//index
cur = dom.index(dom.find('#q5'));
console.log(cur);
