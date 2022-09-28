let mainbtn = document.querySelector('#submit');
let buttons = document.querySelectorAll('.btn');
let front = document.querySelector('#front');
let back = document.querySelector('#back');
let urchoice = document.querySelector('#urchoice');


mainbtn.addEventListener('click', backside);

let userResponse = 0;

function backside() {
    if (userResponse == 0) {
        alert('Please choose one option')
    } else {
        front.style.display = "none";
        back.style.display = "block";
    }
    // alert('Select any one rating')

}
buttons.forEach((element) => {
    element.addEventListener('click', () => {
        userResponse = element.value;
        urchoice.textContent = userResponse;
    })
})