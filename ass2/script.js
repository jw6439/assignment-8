let div1 = document.getElementById('div1'); // 获取第一个空div
let div2 = document.getElementById('div2'); // 获取第二个空div
let div3 = document.getElementById('div3'); // 获取第三个空div

let eles = document.getElementsByTagName('p'); // // 获取页面中所有的p标签

// button1（点击第一个按钮执行的方法）
document.getElementById('btn1').onclick = function() {
  div1.innerHTML = 'There are ' + eles.length + ' p tags on this page'; // 在第一个空div里显示消息
}

// button2（点击第二个按钮执行的方法）
let navs = document.getElementById('navs'); // 获取id为navs的元素
let lis = navs.getElementsByTagName('li'); // 获取navs元素里面所有的li标签
document.getElementById('btn2').onclick = function() {
  div2.innerHTML = 'There are ' + lis.length + ' li elements in the id named navs';// 在第二个空div里显示消息
}

// button3（点击第三个按钮执行的方法）
let box = document.getElementById('box'); // 获取id为box的元素
let tit = box.getElementsByTagName('h2'); // 获取box元素里面所有的h2标签
document.getElementById('btn3').onclick = function() {
  div3.innerHTML = 'There are ' + tit.length + ' h2 elements in the id named box';// 在第三个空div里显示消息
}
