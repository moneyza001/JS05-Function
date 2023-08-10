บรรทัดที่มี \* , \*\*ให้ผลลัพธ์เป็นอะไร เพราะอะไร

```js
const square = (n) => {
  n ** 2;
};

console.log(square(7)); // * undefind เพราะไม่มีการ return ค่าออกมาใน function
```

```js
const calcCircleArea = (r) => Math.PI * r ** 2;
console.log(calcCircleArea(3)); // ** ได้ 28 กว่าๆ เพราะเป็นการเรียกใช้ function และ syntax arrow function ถูกต้องจึง log ค่าออกมาได้
```
