บรรทัด \* และ \*\* ให้ผลลัพธ์เป็นอะไร เพราะอะไร

```js
const showModal = alert;
showModal("Execute modal"); // * alert คำว่า Execute modal เพราะตอนนี้ showModal มีค่าเท่ากับ alert เมื่อมีการประกาศใช้ function ด้วยการใส่ () จึงเป็นเหมือนการใช้ alert() นั่นเอง
```

```js
const showModal = alert();
showModal("Execute modal"); // ** error เพราะตอนนี้ showModal ไม่ใช่ function
```
