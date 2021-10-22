var loginID= document.getElementById('loginID')
var password= document.getElementById('password')
var checkbox= document.getElementById('checkbox')
var val = []
function findInputs() {
    
    val.push(loginID.value)
    val.push(password.value)
    console.log(val)
}
function validateinput(){
    findInputs()
    console.log(!val.includes(''))
}
function btnok(){
    alert("Login is Clicked")
}
function btncancel(){
    alert("Cancel is Clicked")
}
function loginf(){
if (checkbox.checked){
    console.log('Logged in with remember me marked')
}
else{
    console.log('Logged in ')
}
}