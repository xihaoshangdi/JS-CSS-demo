window.onload = function() {
  //获取屏幕可视区
  let width = document.documentElement.clientWidth;
  let height = document.documentElement.clientHeight;
  //获取画板
  let canvas = document.getElementById('canvas');
  canvas.width = width;
  canvas.height = height;
  let ctx = canvas.getContext('2d');

  //色彩和样式
  ctx.fillStyle = 'black';
  ctx.strokeStyle = 'black';

  //Drawbox();
  Drawline();
  //绘制矩形
  function Drawbox() {
    let box = [];
    canvas.onmousedown = function(e) {
      let paintting = true;
      box.push(e.x, e.y);
      line = [e.x, e.y];

      canvas.onmousemove = function(e) {
        if (paintting) {
          ctx.beginPath();
          ctx.setLineDash([12, 3, 3]);
          ctx.moveTo(line[0], line[1]);
          ctx.lineTo(e.x, e.y);
          line = [e.x, e.y];
          ctx.stroke();
        }
      };

      if (box.length === 4) {
        width = box[2] - box[0];
        height = box[3] - box[1];
        ctx.fillRect(box[0], box[1], width, height);
        box = [];
        paintting = false;
      }
    };
  }
  //绘制线
  function Drawline() {
    let paintting = false;
    let line;

    let check = 'ontouchstart' in document.documentElement;

    if (!check) {
      canvas.onmousedown = function(e) {
        paintting = true;
        line = [e.x, e.y];
      };
      canvas.onmousemove = function(e) {
        if (paintting) {
          //线条属性
          ctx.lineWidth = 8;
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';
          //
          ctx.beginPath();
          ctx.moveTo(line[0], line[1]);
          ctx.lineTo(e.x, e.y);
          line = [e.x, e.y];
          ctx.stroke();
        }
      };
      canvas.onmouseup = function(e) {
        paintting = false;
      };
    } else {
      canvas.ontouchstart = function(e) {
        paintting = true;
        line = [e.touches[0].clientX, e.touches[0].clientY];
      };
      canvas.ontouchmove = function(e) {
        let x = e.touches[0].clientX;
        let y = e.touches[0].clientY;
        if (paintting) {
          //线条属性
          ctx.lineWidth = 8;
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';
          //
          ctx.beginPath();
          ctx.moveTo(line[0], line[1]);
          ctx.lineTo(x, y);
          line = [x, y];
          ctx.stroke();
        }
      };
    }
  }
};
