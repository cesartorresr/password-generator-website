const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1 =  document.getElementById('password1')
let password2 = document.getElementById('password2')
let passwordLength = document.getElementById('input-length')

// set value for passwordlength

passwordLength.value =  6;



function generatePassword() {
    password1.textContent = random()
    password2.textContent = random()
}


function random(){
    let password = ''
    for(let i = 0; i< passwordLength.value; i ++) {
        let random = Math.floor(Math.random() * characters.length)
        password += characters[random]
        
    }
    return password
}

function copyUno(){
    const range = document.createRange()
    range.selectNode(document.getElementById("password1"))
    window.getSelection().removeAllRanges()
    window.getSelection().addRange(range)
    document.execCommand("copy")
    window.getSelection().removeAllRanges()
    alert('Copied')
}

function copyDos(){
    const range = document.createRange()
    range.selectNode(document.getElementById("password2"))
    window.getSelection().removeAllRanges()
    window.getSelection().addRange(range)
    document.execCommand("copy")
    window.getSelection().removeAllRanges()
    alert(`Copied`)
}


