// first button eventhandler use korchi 
function makeRed(){
    document.body.style.backgroundColor = 'red';
}
// second button event listenner use korchi 
const greenBtn = document.getElementById('green-btn').addEventListener('click', function(){
    document.body.style.backgroundColor = 'green';
})