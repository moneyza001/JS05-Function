ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

```js
let x = 1;
function func() {
  console.log(x); // * error เพราะเรียกใช้ x ก่อนประกาศ
  let x = 2;
}
func();
```