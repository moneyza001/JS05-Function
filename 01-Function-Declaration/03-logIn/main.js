function login(username,password) {
    
    if(username === 'admin' && password === 'P@ssw0rd'){
        console.log('login สำเร็จ')
    }else {console.log('login ไม่สำเร็จ')}
}

let user = prompt('Username')
let pass = prompt('Password')
login(user,pass)