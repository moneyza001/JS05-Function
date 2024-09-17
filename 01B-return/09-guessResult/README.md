บรรทัด \*, \*\*, \*\*\* และ \*\*\*\* ให้ผลลัพธ์เป็นอะไร เพราะอะไร

```js
function sayHi(age) {
  if (age < 12) alert("Hi kid");
}
console.log(sayHi); // * return ค่า function และเนื้อหาข้างในออกมา
console.log(sayHi(10)); // ** alert Hi kid พร้อม return undefined ออกมาเพราะเมื่อจบการทำงานของ function จะ return ค่า undefined ออกมา
```

<!-- ```js
function sayHi(name) {
  if (name) {
    alert("Hi " + name);
    return;
  } else {
    return "Who are you";
  }
}
console.log(sayHi("John")); // *** Hi John
console.log(sayHi()); // **** Who are you
``` -->
