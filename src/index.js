import sayHello from './sayHello';

console.log(sayHello, sayHello('Gopal'));

// 单纯为了演示，就是有条件的时候才去动态加载
// if (true) {
//   import('./Another.js').then(res => console.log(res))
// }