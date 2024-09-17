บรรทัด \*, \*\*, ให้ผลลัพธ์เป็นอะไร เพราะอะไร

```js
function sayHi(age) {
    if (age < 12) alert('Hi kid');
}
console.log(sayHi); // * undefied เพราะ log ของ function จะได้ค่า undefined
console.log(sayHi(10)); // ** undefied เพราะ function sayHi ไม่ได้มีค่าที่ return ออกมาทำให้เมื่อจบกระบวนการจะคืนค่า undefined ออกมา
```
